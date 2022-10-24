import React, { useState, useEffect } from "react";
import { getMe, addWord, getAddedWord, deleteFavourite, deleteWord, getFavouriteWords, addFavourite , editWord} from '../../utils/API';
import Auth from '../../utils/auth';
import "./style.css";
import FavouritesCard from "../FavouritesCard";
import AddWordCard from "../AddWordCard/index.js";
import WordCard from "../WordCard/index.js";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from '@mui/icons-material/Add';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

const Dashboard = () => {
  // create state for holding returned api data
  const [userData, setUserData] = useState({});
  const [addedwords, setaddedWords] = useState([]);
  const [AllFavouritesWords, setAllFavouritesWords] = useState([]);
  const [value, setValue] = React.useState('one');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


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
  }, []);


  // Get the word a User has added to the dictionary on dashboard load
  useEffect(() => {
    const getWordData= async () => {

      try {
        const response = await getAddedWord()

     if (!response.ok) {
        throw new Error('something went wrong!');
        }

    const addedwords = await response.json();


    setaddedWords(addedwords);
  } catch (err) {
    console.error(err); //console.error(`ERROR: ${err}`);

  }
};
getWordData();
  },[]);


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

  const handleFavouriteWord = async (wordId) => {
    console.log("handleFavouriteWord", wordId)
    // find the word in `wordList` state by the matching id
    const wordToFavourite = addedwords.find((word) => word._id === wordId);
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

  // Remove AllFavourites word from database and local storage
  const handleDeleteFavouriteWord = async (wordId) => {
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try { // Delete from AllFavourites Schema
      const response = await deleteFavourite(wordId, token);

      if (!response.ok) {
        throw new Error('unable to FavouriteWord');
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

// Add word to Dictionary
  const handleAddWord = async (wordData) => {
    console.log('handle add word', wordData)

      const token = Auth.loggedIn() ? Auth.getToken() : null;

      if (!token) {
        return false;
      }
      try {
        const response = await addWord(wordData, token)

        if (!response.ok) {
          throw new Error('unable to addWord');
        }

        const responseJson = await response.json()
        // if word successfully Favourites to user's account, Favourite word id to state
        setaddedWords([...addedwords, responseJson]);
      } catch (err) {
        console.log('Unable to setWordList')
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
        setaddedWords([...addedwords.map(w => {
          if (w._id === wordId) {
            return responseJson
          }
          return w
        })]);
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
      const response = await deleteWord(wordId, token)

      if (!response.ok) {
        throw new Error('unable to addWord');
      }

      // if word successfully Favourites to user's account, Favourite book id to state
      setaddedWords([...addedwords, wordId.wordId]);
    } catch (err) {
      console.log('Unable to setWordList')
    }
  }

 if(!userData){
  return <h3>Calm ya Farm</h3>
 }
 return (
  <>
  <Box>
  <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab icon={<AddIcon />} label="ADD WORD" />
      <Tab icon={<FavoriteIcon />} label="FAVORITES" />
      <Tab icon={<BookmarkAddedIcon />} label="PREVIOUSLY ADDED" />
    </Tabs>
    <AddWordCard
      addedwords={addedwords}
      handleAddWord={handleAddWord}
    />

    <WordCard
      isAuthenticated={Auth.loggedIn()}
      wordcards={addedwords}
      handleFavouriteWord={handleFavouriteWord}
      handleDeleteFavouriteWord={handleDeleteFavouriteWord}
      handleDeleteWord={handleDeleteWord}
      handleEditWord={handleEditWord}
      AllFavouritesWords={AllFavouritesWords}
    />

    < FavouritesCard favouritewords={AllFavouritesWords}
    userData={userData}/>
    </Box>
  </>
)};

export default Dashboard