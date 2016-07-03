{-# LANGUAGE DeriveGeneric #-}

module Types where

import Data.Text.Lazy (Text)
import Data.Aeson
import GHC.Generics

data Person = Person
  { name :: Text
  , email :: Text
  } deriving (Generic, Show)

instance ToJSON Person

data Date = Date
  { year :: Int
  , month :: Int
  , day :: Int
  , hour :: Int
  , minute :: Int
  , second :: Int
  } deriving (Generic, Show)

instance ToJSON Date

epoch :: Date
epoch = Date 1970 1 1 0 0 0

data Email = Email
  { sender :: Person
  , recipients :: [Person]
  , subject :: Text
  , date :: Date
  , body :: Text
  , tags :: [Text]
  } deriving (Generic, Show)

instance ToJSON Email
