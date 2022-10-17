// import React from "react";
import React, { useState, useEffect } from 'react';
import Project from "../Project/index.js";
import '../Project/style.css'
import Auth from '../../utils/auth';
import { saveWord, getAllWords } from '../../utils/API';
import { saveWordId, getSavedWordIds } from '../../utils/localStorage';


const Dictionary = () => {
      const [wordList, setWordList] = useState(getAllWords());
      useEffect(() => {
        console.log(wordList)
        return () => setWordList(wordList);
      });

  // React.useEffect(() => {
  //   const loadDashboard = async () => {
  //     try {
  //     const response = await getAllWords();
  //     console.log(response)

  //     if (!response.ok) {
  //       throw new Error('something went wrong!');
  //     }

  //     const wordList = response.json();
  //     setWordList(wordList);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  //   loadDashboard();
  // }, []);




//  Need to pass in API fetch call as soon as page loads
  // const [wordList, setWordList] = useState({}); //create state for holding returned api data
      
  //     const getWordList = async () => {
  //       try {
  //          const dictionary = getAllWords();
          
  //          console.log(dictionary)
  //         if (!dictionary) {
  //           throw new Error('Error fetching GET request');
  //         }

  //         setWordList(dictionary)

  //       } catch (err) {
  //         console.error('Error when setting word list');
  //       }
  //     };
  
  //     getWordList();
        
// // create state to hold saved wordId values
     const [savedWordIds, setSavedWordIds] = useState(getSavedWordIds());
        useEffect(() => {
          return () => saveWordId (savedWordIds);
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

        // if word successfully saves to user's account, save book id to state
        setSavedWordIds([...savedWordIds, wordToSave.wordId]);
      } catch (err) {
        console.error(err);
      }
    };
    // Portfolio section assigning the images and info to each individual card
    // function Dictionary(props) {
    //   const featurePhotos = [
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word One
    //         </a>
    //       ),
    //       repo: (
    //         <a>
    //           Word One
    //         </a>
    //       ),
    //     },
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word Two
    //         </a>
    //       ),
    //       repo: (
    //         <a>
    //           Word Two
    //         </a>
    //       ),
    //     },
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word Three
    //         </a>
    //       ),
    //       repo: (
    //         <a>Word Three</a>
    //       ),
    //     },
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word Four
    //         </a>
    //       ),
    //       repo: (
    //         <a>
    //           Word Four
    //         </a>
    //       ),
    //     },
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word Five
    //         </a>
    //       ),
    //       repo: (
    //         <a>
    //           Word Five
    //         </a>
    //       ),
    //     },
    //     {
    //       name: "",
    //       feature: "",
    //       url: (
    //         <a>
    //           Word Six
    //         </a>
    //       ),
    //       repo: (
    //         <a>
    //           Word Six
    //         </a>
    //       ),
    //     },
    //   ];
    //   // returns the project file
      return (
        <div className="">
          {/* {wordList.map((word) => ( */}
            <div className="a-box">
        <div className="text-container">
         <p>{wordList.word}</p>
            </div>
            <button type="button" className="btn btn-secondary" onClick={handleSaveWord}>Submit</button>
        </div>
        </div>
)};

export default Dictionary;
