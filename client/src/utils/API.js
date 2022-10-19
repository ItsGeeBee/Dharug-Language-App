// route to get logged in user's info (needs the token)
export const getMe = (token) => {
    return fetch('/api/users/me', {
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
    return fetch('/api/dictionary', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wordData),
    });
};

export const getAddedWord = (wordData) => {
    return fetch('/api/users/dashboard', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(wordData),
    });
};

// save book data for a logged in user
export const saveWord = (wordData, token) => {
    return fetch('/api/users/dashboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(wordData),
    });
};

export const DeleteSavedWord = (wordData, token) => {
    return fetch('/api/users/dashboard', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(wordData),
    });
};

// remove saved book data for a logged in user
export const deleteWord = (wordId, token) => {
    return fetch(`/api/users/dashboard/${wordId}`, {
        method: 'DELETE',
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
};


