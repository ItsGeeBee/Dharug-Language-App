// route to get logged in user's info (needs the token)
import Auth from "./auth";

// Get JWT token 
export const getMe = (token) => {
  return fetch("/api/users/:id", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
// Create new user 
export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
// Exisiting user sign in 
export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};
// Get all words on dictionary page 
export const getAllWords = (wordData) => {
  return fetch("/api/dictionary", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

// Get a random word for words of the day 
export const getRandomWord = (wordData) => {
  return fetch("/api/dictionary/randomword", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

// Add a word to the word schema 
export const addWord = (wordData, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

// Get a users added words
export const getAddedWord = (wordData, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/added`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(wordData),
  });
};

// Path to save favourtiate word for a logged in user
export const addFavourite = (wordData, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/addfavourite`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(wordData),
  });
};

//Delete a favourite word
export const deleteFavourite = (wordId, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/addfavourite/${wordId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

// delete a word for a logged in user
export const deleteWord = (wordId, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/deleteWord/${wordId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

// edit a word for a logged in user
export const editWord = (wordId, data, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/editWord/${wordId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

// Get users existing favourite words
export const getFavouriteWords = (wordData, token) => {
  const user = Auth.getProfile(token);
  console.log("FavouritewordAPI", wordData);
  return fetch(`/api/users/${user.data._id}/favourite`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
// Stripe
export const donation = () => {
  return fetch("/api/users/donate", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
};
