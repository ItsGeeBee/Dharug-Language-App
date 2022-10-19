import React, { useState, useEffect } from "react";
import { getMe, addWord, getAddedWord, DeleteSavedWord } from '../../utils/API';
import { removeSavedWord,getSavedWordIds } from '../../utils/localStorage';
import Card from '../Cards'
import Auth from '../../utils/auth';
import "./style.css";

const handleDeleteWord = ()=>{
  
}

const Dashboard = () => {
  // create state for holding returned api data
  const [userData, setUserData] = useState({});
  const [addedwords, setaddedWords] = useState([]);
  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

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
  },[]);


  useEffect(() => {
    return () => addWord(addedwords);
  },[addedwords]);

  const [savedWordIds, setSavedWordIds] = useState(getSavedWordIds());
  useEffect(() => {
    return () => removeSavedWord(savedWordIds);
  },[savedWordIds]);


  const handleRemoveSaved = async (wordId) => {

    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await DeleteSavedWord(wordId, token);

      if (!response.ok) {
        throw new Error('unable to saveWord');
      }
      const updatedUser = await response.json();
      setUserData(updatedUser);
      removeSavedWord(wordId)
    } catch (err) {
      console.error(err);
    }
  };


  // const handleAddWord = async (wordId) => {

  //     const token = Auth.loggedIn() ? Auth.getToken() : null;

  //     if (!token) {
  //       return false;
  //     }
  //     try {
  //       const response = await addWord(wordToAdd, token)
        
  //       if (!response.ok) {
  //         throw new Error('unable to addWord');
  //       }

  //       // if word successfully saves to user's account, save book id to state
  //       setWordList([...wordList, wordToAdd.wordId]);
  //     } catch (err) {
  //       console.log('Unable to setWordList')
  //     }
  // };

  return (
  
    <div className='text-light bg-dark'>
      <div>
        <h1>Dashboard</h1>
      </div>
       {/* User saved words from dictionary to show */}
    <div>
      <h4>
        {userData.savedWords.length
          ? `Viewing ${userData.savedWords.length} saved ${userData.savedWords.length === 1 ? 'word' : 'words'}:`
          : 'You have no saved words!'}
      </h4>
      </div>
        {userData.savedWords.map((word) => {
          return (
            <div>
              <Card savedWords={userData}
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
              <Card addedwords={addedwords} 
               handleDeleteWord={handleDeleteWord}/>
              </div>
              )})}
       </div>       
        );

};
// exports file
export default Dashboard