// route to get logged in user's info (needs the token)
import Auth from "./auth";

export const getMe = (token) => {
  return fetch("/api/users/:id", {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};

export const createUser = (userData) => {
  return fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const loginUser = (userData) => {
  return fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });
};

export const getAllWords = (wordData) => {
  return fetch("/api/dictionary", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

export const addWord = (wordData, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/${user.data._id}/added`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

export const getAddedWord = (wordData) => {
  return fetch("/api/users/:id/added", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(wordData),
  });
};

// Favourite book data for a logged in user
export const addFavourite = (wordData, token) => {
  const user = Auth.getProfile(token);
  console.log("FavouritewordAPI", wordData);
  return fetch(`/api/users/${user.data._id}/addfavourite`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(wordData),
  });
};

export const deleteFavourite = (wordId, token) => {
  const user = Auth.getProfile(token);
  return fetch(`/api/users/${user.data._id}/addfavourite/${wordId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(wordId),
  });
};

// delete a word for a logged in user
export const deleteWord = (wordId, token) => {
  console.log("deleteWord", deleteWord);
  const user = Auth.getProfile(token);
  console.log("user.data._id", user.data._id)
  console.log("wordId", wordId)
  return fetch(`/api/users/${user.data._id}/deleteWord/${wordId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    // remove AllFavourites book data for a logged in user
    // export const deleteWord = (wordId, token) => {
    //     return fetch(`/api/users/:userId/${wordId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             authorization: `Bearer ${token}`,
    //         },
  });
};