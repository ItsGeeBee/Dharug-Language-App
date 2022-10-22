// import React from "react";
import React, { useState, useEffect } from 'react';
import WordCard from "../WordCard/index.js";
import '../WordCard/style.css'
import Auth from '../../utils/auth';
import { addFavourite, getAllWords, deleteFavourite } from '../../utils/API';
import { FavouriteWordId, getAllFavouritesWordIds } from '../../utils/localStorage';

// const Dictionary = () => {
  export default function Dictionary() {
      const [wordList, setWordList] = useState([]);

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
      },[]);


  // // create state to hold AllFavourites wordId values
  const [AllFavouritesWordIds, setAllFavouritesWordIds] = useState(getAllFavouritesWordIds());
 // useEffect(() => {
   // FavouriteWordId(AllFavouritesWordIds);
  // }, [AllFavouritesWordIds]);

  // create function to handle saving a word to our database
  const handleFavouriteWord = async (wordId) => {
   console.log("wordId", wordId)
    // find the word in `wordList` state by the matching id
    const wordToFavourite = wordList.find((word) => word._id === wordId);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;
    console.log("token", token)
    if (!token) {
        return false;
      }
      
      try {
        const response = await addFavourite(wordToFavourite, token);
        console.log("response", response)
        if (!response.ok) {
          throw new Error('unable to FavouriteWord');
        }
        
      // if word successfully Favourites to user's account, Favourite book id to state
      setAllFavouritesWordIds([...AllFavouritesWordIds, wordToFavourite._id]);
      FavouriteWordId([...AllFavouritesWordIds, wordToFavourite._id])
    } catch (err) {
      console.error(err);
    }
  };
  const handleDeleteFavouriteWord = async (wordId) => {
    console.log("wordId", wordId)
     // get token
     const token = Auth.loggedIn() ? Auth.getToken() : null;
     console.log("token", token)
     if (!token) {
         return false;
       }
       
       try {
         const response = await deleteFavourite(wordId, token);
         console.log("response", response)
         if (!response.ok) {
           throw new Error('unable to FavouriteWord');
         }
         
       // if word successfully Favourites to user's account, Favourite book id to state
      //  setAllFavouritesWordIds([...AllFavouritesWordIds, wordToFavourite._id]);
      //  FavouriteWordId([...AllFavouritesWordIds, wordToFavourite._id])
     } catch (err) {
       console.error(err);
     }
   };


  // returns the project file{

  return (
    <>
      <WordCard
        wordcards={wordList}
        handleFavouriteWord={handleFavouriteWord}
        handleDeleteFavouriteWord={handleDeleteFavouriteWord}
      />
    </>

  );
};

// export default Dictionary;