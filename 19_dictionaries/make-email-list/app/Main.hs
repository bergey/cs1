module Main where

import Lib
import Types

import Data.MBox as MB

import Data.Aeson
import qualified Data.Text.Lazy as T
import qualified Data.Text.Lazy.IO as T
import qualified Data.ByteString.Lazy.Char8 as BS
import Data.Foldable
import System.IO
import System.Process
import Control.Exception

-- import Data.Time
-- import qualified Data.Time.Locale.Compat as LC
-- import Data.MBox as MB

main :: IO ()
main = do
  -- filenames <- notmuchSearch ["to:bergey"]
  filenames <- getEmails
  -- plaintexts <- traverse T.readFile filenames
  -- let emails = makeEmail . parseMaildir <$> plaintexts
  -- traverse_ (BS.putStrLn . encode) emails
  traverse_ checkDate filenames
  -- print $ length filenames

checkDate :: FilePath -> IO ()
checkDate fn = flip catch (logFilename fn) $ do
  -- putStrLn fn
  txt <- T.readFile fn
  forM_ (parseMBox txt) $ \m -> case parseDate m of
  -- case map parseDate (parseMBox txt) of
    Left "" -> return ()
    Left hdr -> hPutStrLn stderr hdr
    Right _ -> return ()

logFilename :: String -> SomeException -> IO ()
-- logFilename fn _ = hPutStrLn stderr fn
logFilename _ _ = return ()

go :: FilePath -> IO ()
go fn = do
  txt <- T.readFile fn
  case makeEmail (parseMaildir txt) of
    Left err -> hPutStrLn stderr err
    Right email -> do
      putStr ", "
      BS.putStrLn . encode $ email
  -- -- BS.putStrLn . encode . makeEmail . parseMaildir $ txt
  -- let
  --   msg = parseMaildir txt
  --   dateHeader = T.unpack . getHeader isDate $ msg
  -- (UTCTime day ss) <-
  --   parseTimeM True LC.defaultTimeLocale  "%a, %_d %b %Y %T %z" dateHeader
  -- putStrLn "OK"

getMaildirs :: IO [FilePath]
getMaildirs = lines <$> readProcess "find" ["/home/bergey/Mail", "-name", "cur"] ""

getEmails :: IO [FilePath]
getEmails = do
  dirs <- getMaildirs
  concat <$> traverse ls dirs

ls :: FilePath -> IO [FilePath]
ls dir = do
  files <- lines <$> readProcess "ls" [dir] ""
  return $ map (\f -> dir ++ ('/':f)) files
