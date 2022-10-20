// import React from "react";
import React, { useState, useEffect } from 'react';
import WordCard from "../WordCard/index.js";
import '../WordCard/style.css'
import Auth from '../../utils/auth';
import { saveWord, getAllWords } from '../../utils/API';
import { saveWordId, getSavedWordIds } from '../../utils/localStorage';


const Dictionary = () => {
      const [wordList, setWordList] = useState([]);
      
      
      useEffect(() => {
        const getWordData= async () => {
        
          try {
            const response = await getAllWords()

         if (!response.ok) {
            throw new Error('something went wrong!');
            }

        const wordList = await response.json();
        console.log(wordList)
        setWordList(wordList);
      } catch (err) {
        console.error(err);
      }
    };
    getWordData();
      },[]);

// Chris added this to try to start on "delete word" will need this validated and checked 
// This function is called below. 
// This function is supposed to wait until it deletes the word from the DB based on its ID
// Once that is done this is also meant to update the local state    
const handleDelete = async (id) => {
    await fetch(`mongodb://127.0.0.1:27017/languageDB` + id, {
    method: 'DELETE'
  })
// this is supposed to fire a function that evaluates each word in our state
// if true it should keep in the array but if false it should filter the word out
// A new array should be stored in newWords with that word removed
// by setting the value of word to new word
  const newWordList = wordList.filter(wordList => wordList.id != id)
  setWordList(newWordList)
}
  // // create state to hold saved wordId values
  const [savedWordIds, setSavedWordIds] = useState(getSavedWordIds());
  useEffect(() => {
    return () => saveWordId(savedWordIds);
  });

  // create function to handle saving a word to our database
  const handleSaveWord = async (wordId) => {

    // find the word in `wordList` state by the matching id
    const wordToSave = wordList.find((word) => word.wordId === wordId);

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await saveWord(wordToSave, token);

      if (!response.ok) {
        throw new Error('unable to saveWord');
      }

      // if word successfully saves to user's account, save word id to state
      setSavedWordIds([...savedWordIds, wordToSave.wordId]);
    } catch (err) {
      console.error(err);
    }
  };

  // returns the project file
  return (
    <div>
      < WordCard wordcards = {wordList}
        handleSaveWord={handleSaveWord} />
        < WordCard newWordList = {wordList}   // chris added this remove need be or check
        handleDelete={handleDelete} /> 
    </div>
  )
};

export default Dictionary;
