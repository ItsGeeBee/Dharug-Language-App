import React, { useState, useEffect } from "react";
import { getMe, addWord, getAddedWord, DeleteSavedWord } from '../../utils/API';
import { removeSavedWord,getSavedWordIds } from '../../utils/localStorage';
import SavedCard from '../Cards'
import Auth from '../../utils/auth';
import "./style.css";


const Dashboard = () => {
  // create state for holding returned api data
  const [userData, setUserData] = useState({});
  const [addedwords, setaddedWords] = useState([]);
  const [savedWordIds, setSavedWordIds] = useState(getSavedWordIds());
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;


  // Get User data on dashboard load, retrieving token auth, 
  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }

        const response = await getMe(token);

        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const user = await response.json();
        setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);


  // Get the word a User has added to the dictionary on dashboard load
  useEffect(() => {
    const getWordData= async () => {
    
      try {
        const response = await getAddedWord()

     if (!response.ok) {
        throw new Error('something went wrong!');
        }

    const addedwords = await response.json();
    console.log(addedwords)
    setaddedWords(addedwords);
  } catch (err) {
    console.error(err); //console.error(`ERROR: ${err}`);

  }
};
getWordData();
  },[addedwords]);

  // Remove Saved word from database and local storage 
  const handleRemoveSaved = async (wordId) => {

    // Find the selected word in the 'savedWordIds' state
    const wordToRemove = savedWordIds.find((word) => word._id === wordId);
    
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try { // Delete from Saved Schema 
      const response = await DeleteSavedWord(wordToRemove, token);

      if (!response.ok) {
        throw new Error('unable to saveWord');
      }
     
      console.log(wordToRemove)
      setSavedWordIds([...savedWordIds, wordToRemove._id]);
      //remove from local storage 
      removeSavedWord([...savedWordIds, wordToRemove._id])
    } catch (err) {
      console.error(err);
    }
  };

// Add word to Dictionary 
  const handleAddWord = async (wordId) => {

      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
      try {
        const response = await addWord(wordId, token)
        
        if (!response.ok) {
          throw new Error('unable to addWord');
        }

        // if word successfully saves to user's account, save word id to state
        setaddedWords([...addedwords, wordId.wordId]);
      } catch (err) {
        console.log('Unable to setWordList')
      }
  };

// Delete Users added word from Dictionary 
  const handleDeleteWord = async (wordId)=>{
    const token = Auth.loggedIn() ? Auth.getToken() : null;
  
    if (!token) {
      return false;
    }
    try {
      const response = await DeleteSavedWord(wordId, token)
      
      if (!response.ok) {
        throw new Error('unable to addWord');
      }
  
      // if word successfully saves to user's account, save book id to state
      setaddedWords([...addedwords, wordId.wordId]);
    } catch (err) {
      console.log('Unable to setWordList')
    }
  }



  return (
    <div className='text-light bg-dark'>
      <div>
        <h1>Dashboard</h1>
      </div>
       {/* User saved words from dictionary to show */}
       <form>
        <p>Inputs for added words</p>
        <button handleAddWord={handleAddWord}></button>
        </form>
    <div>
      <h4>
        {savedWordIds.length
          ? `Viewing ${savedWordIds.length} saved ${savedWordIds.length === 1 ? 'word' : 'words'}:`
          : 'You have no saved words!'}
      </h4>
      </div>
        {userData.savedWordIds.map((word) => {
          return (
            <div>
              <SavedCard savedWords={savedWordIds}
                    handleRemoveSaved={handleRemoveSaved} />
            </div>
                );
        })}

    {/* User added words to dictionary to show */}
    <div className='text-light bg-dark'>
      <h4>
        {addedwords.length
          ? `${userData.username}, you have added ${userData.addedwords.length === 1 ? 'word' : 'words'}:`
          : 'Post some words and see them here!'}
      </h4>
      </div>
        {addedwords.map((addedword) => {
          return (
            <div>
              {/* <AddedCard addedwords={addedwords}  */}
               {/* handleDeleteWord={handleDeleteWord}/> */}
              </div>
              )})}
       </div>       
        );

};
// exports file
export default Dashboard