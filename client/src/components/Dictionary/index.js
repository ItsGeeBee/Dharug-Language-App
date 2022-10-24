// import React from "react";
import React, { useState, useEffect } from 'react';
import WordCard from "../WordCard/index.js";
import '../WordCard/style.css'
import Auth from '../../utils/auth';
import { addFavourite, editWord, getAllWords, deleteFavourite, deleteWord, getFavouriteWords } from '../../utils/API';

  export default function Dictionary(props) {
      const [wordList, setWordList] = useState([]);
      const [wordDeleted, setWordDeleted] = useState(false);
      const [AllFavouritesWords, setAllFavouritesWords] = useState([]);

      useEffect(() => {
        const getWordData= async () => {

          try {
            const response = await getAllWords()

         if (!response.ok) {
            throw new Error('something went wrong!');
            }

        const wordList = await response.json();
        setWordList(wordList);
      } catch (err) {
        console.error(err);
      }
    };
    getWordData();
    setWordDeleted(false);
      },[wordDeleted]);

    useEffect(() => {
      const getFavourites= async () => {

      try {
        const response = await getFavouriteWords()
        console.log(response)
        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const AllFavouritesWords = await response.json();


        setAllFavouritesWords(AllFavouritesWords);
      } catch (err) {
        console.error(err);

      }
    };
    getFavourites();
  },[]);

  // create function to handle saving a word to our database
  const handleFavouriteWord = async (wordId) => {
    console.log("handleFavouriteWord", wordId)
    // find the word in `wordList` state by the matching id
    const wordToFavourite = wordList.find((word) => word._id === wordId);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
      }

      try {
        const response = await addFavourite(wordToFavourite, token);
        if (!response.ok) {
          throw new Error('Whoops! We are unable to add this to your Favourites');
        }

      // if word successfully Favourites to user's account, Favourite book id to state
      setAllFavouritesWords([...AllFavouritesWords, wordToFavourite]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteFavouriteWord = async (wordId) => {
    console.log("handleDelete", wordId);
     // get token
     const token = Auth.loggedIn() ? Auth.getToken() : null;
     if (!token) {
         return false;
       }

       try {
         const response = await deleteFavourite(wordId, token);
         console.log(response);
         if (!response.ok) {
           throw new Error('Whoops! We are unable to remove this from your Favourites');
         }

        // create copy of state array
        const tempFavsArray = [...AllFavouritesWords];

        // array filter returns all elements of asrray that don't === wordId
        const newArray = tempFavsArray.filter(item => item._id !== wordId);

        // write over state array with the new array
        setAllFavouritesWords(newArray);

       } catch (err) {
         console.error(err);
       }
     };


  const handleEditWord = async (wordId, wordData) => {
    console.log('handle edit word', wordData)

      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
      try {
        const response = await editWord(wordId, wordData, token)

        if (!response.ok) {
          throw new Error('unable to addWord');
        }

        const responseJson = await response.json()

        // if word successfully Favourites to user's account, Favourite word id to state
        setWordList([...wordList.map(w => {
          if (w._id === wordId) {
            return responseJson
          }
          return w
        })]);
      } catch (err) {
        console.log('Unable to setWordList')
      }
  };

   const handleDeleteWord = async (wordId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    if (!token) {
        return false;
      }

      try {
        const response = await deleteWord(wordId, token);
        if (!response.ok) {
          throw new Error('Whoops! We are unable to delete this word');
        }
        setWordDeleted(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <WordCard
      isAuthenticated={props.isAuthenticated}
        wordcards={wordList}
        handleFavouriteWord={handleFavouriteWord}
        handleDeleteFavouriteWord={handleDeleteFavouriteWord}
        handleDeleteWord={handleDeleteWord}
        handleEditWord={handleEditWord}
        AllFavouritesWords={AllFavouritesWords}
      />
    </>

  );
};