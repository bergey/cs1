{-# LANGUAGE OverloadedStrings #-}

module Lib where

import Types

import Data.List (concatMap)
import qualified Data.Time.Locale.Compat as LC
import Data.Maybe
import Data.Time (parseTimeM)
import Data.Time.Clock
import Data.Time.Calendar (toGregorian)
import Data.MBox as MB hiding (getHeader)
import System.Process
import qualified Data.Text.Lazy as T
import Data.Text.Lazy (Text)
import qualified Data.Text.Lazy.IO as T

notmuchSearch :: [String] -> IO [FilePath]
notmuchSearch terms =
  lines <$> readProcess "notmuch" ("search" : "--output=files" : terms) ""

-- | Parse an "MBox" file which is assumed to contain only a single Message
parseMaildir :: Text -> Message
parseMaildir t = case parseMBox t of
  [msg] -> msg
  [] -> error "got empty maildir file"
  _ -> error "More than one message in a single input"
  -- TODO better error handling - error should have file name instead

isRecipients :: Header -> Bool
isRecipients (tag, _) = elem (T.toLower tag) [ "to", "cc", "bcc" ]

bracketedEmail :: Text -> Maybe Person
bracketedEmail t = let
  (n, e') = T.breakOn "<" t
  (e, _) = T.breakOn ">" e'
  in
    if T.length e > 0 && T.length n > 0
    then Just (Person n $ T.tail e)
    else Nothing

emailOnly :: Text -> Maybe Person
emailOnly t
  | T.isInfixOf "@" t = Just $ Person "" t
  | otherwise = Nothing

makePerson :: Text -> Person
makePerson t = let
  parses = [ bracketedEmail t, emailOnly t ]
  in
    case catMaybes parses of
      [] -> Person t ""
      (x:_) -> x

makeDate :: UTCTime -> Date
makeDate (UTCTime day diff) = Date (fromIntegral y) mo d h mi s
  where
    (y, mo, d) = toGregorian day
    h = floor diff `quot` 3600
    mi = floor diff `mod` 3600 `quot` 60
    s = floor diff `mod` 60

getHeader :: (Header -> Bool) -> Message -> T.Text
getHeader predFunc msg = case filter predFunc (headers msg) of
  [] -> mempty
  ((h,t) : xs) -> t

getSender :: Message -> Person
getSender = makePerson . getHeader ((== "from") . T.toLower . fst)

getRecipients :: Message -> [Person]
getRecipients = map makePerson . concatMap T.lines . map snd . filter isRecipients . headers

getSubject :: Message -> Text
getSubject = getHeader ((== "subject") . T.toLower . fst)

-- | 'parseDate' returns Right if it as able to recognize the format
-- of the Date header, or Left with the contents of the header
parseDate :: Message -> Either String UTCTime
parseDate msg = let
  header = T.unpack $ getHeader isDate msg
  tryParse f = parseTimeM True LC.defaultTimeLocale f header
  formats =
    [ "%a, %_d %b %Y %T %z"
    , "%a, %_d %b %Y %T %Z"
    , "%a, %d %b %Y %T %z"
    , "%a, %d %b %Y %T %Z"
    , "%a, %_d %b %Y %T %z (%Z)"
    , "%a, %_d %b %Y %T %z (GMT%:-z)"
    , "%a, %_d %b %Y %T %z (UTC%:-z)"
    , "%a, %_d %b %Y %T %z (GMT%:z)"
    , "%a, %_d %b %Y %T %z (UTC%:z)"
    , "%A, %B %e, %Y %l:%M %p"
    , "%e %b %Y %T %z"
    ]
  in
    case catMaybes (map tryParse formats) of
      [] -> Left header
      (x:_) -> Right x

getTags :: Message -> [Text]
getTags msg = concatMap check ["canvas", "SVG", "Path", "V2", "SVGFonts", "graph"]
  where
    ws = T.words $ MB.body msg
    check tag = if elem tag ws then [tag] else []

makeEmail :: Message -> Either String Email
makeEmail msg = case parseDate msg of
  Left err -> Left err
  Right utc -> Right $ Email
    (getSender msg)
    (getRecipients msg)
    (getSubject msg)
    (makeDate utc)
    (MB.body msg)
    (getTags msg)
