export const getSavedWordIds = () => {
    const savedWordIds = localStorage.getItem('saved_words')
        ? JSON.parse(localStorage.getItem('saved_words'))
        : [];

    return savedWordIds;
};

export const saveWordId = (wordArr) => {
    if (wordArr.length) {
        localStorage.setItem('saved_words', JSON.stringify(wordArr));
    } else {
        localStorage.removeItem('saved_words');
    }
};

export const removeSavedWord = (wordId) => {
    const savedWordIds = localStorage.getItem('saved_words')
        ? JSON.parse(localStorage.getItem('saved_words'))
        : null;

    if (!savedWordIds) {
        return false;
    }

    const updatedSavedWordIds = savedWordIds?.filter((savedWordId) => savedWordId !== wordId);
    localStorage.setItem('saved_words', JSON.stringify(updatedSavedWordIds));

    return true;
};
