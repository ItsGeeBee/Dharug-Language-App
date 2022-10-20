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


  // // create state to hold saved wordId values
  const [savedWordIds, setSavedWordIds] = useState(getSavedWordIds());
 // useEffect(() => {
   // saveWordId(savedWordIds);
  // }, [savedWordIds]);

  // create function to handle saving a word to our database
  const handleSaveWord = async (wordId) => {
   
    // find the word in `wordList` state by the matching id
    const wordToSave = wordList.find((word) => word._id === wordId);
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
        
        console.log(wordToSave)
      // if word successfully saves to user's account, save book id to state
      setSavedWordIds([...savedWordIds, wordToSave._id]);
      saveWordId([...savedWordIds, wordToSave._id])
    } catch (err) {
      console.error(err);
    }
  };

  // returns the project file
  return (
    <div>
      < WordCard wordcards = {wordList}
        handleSaveWord={handleSaveWord} />
    </div>
  )
};

export default Dictionary;
