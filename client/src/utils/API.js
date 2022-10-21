// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/:userId', {
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
    });
};

export const createUser = (userData) => {
    return fetch('/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const loginUser = (userData) => {
    return fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
    });
};

export const getAllWords = (wordData) => {
    return fetch('/api/dictionary', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wordData),
    });
};

export const addWord = (wordData) => {
    return fetch('/api/:userId/added', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wordData),
    });
};

export const getAddedWord = (wordData) => {
    return fetch('/api/users/:userId/added', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wordData),
    });
};

// Favourite book data for a logged in user
export const addFavourite = (wordData, token) => {
    console.log('FavouritewordAPI', wordData)
    return fetch('/api/users/:userId/addfavourite', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(wordData),
    });
};

export const deleteFavourite = (wordId, token) => {
    return fetch(`/api/users/:userId/addfavourite/${wordId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(wordId),
    });
};

// remove AllFavourites book data for a logged in user
export const deleteWord = (wordId, token) => {
    return fetch(`/api/users/:userId/${wordId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};


