export const getAllFavouritesWordIds = () => {
    const AllFavouritesWordIds = localStorage.getItem('AllFavourites_words')
        ? JSON.parse(localStorage.getItem('AllFavourites_words'))
        : [];

    return AllFavouritesWordIds;
};

export const FavouriteWordId = (wordArr) => {
    console.log(wordArr)
    if (wordArr.length) {
        localStorage.setItem('AllFavourites_words', JSON.stringify(wordArr));
    } else {
        localStorage.removeItem('AllFavourites_words');
    }
};

export const removeAllFavouritesWord = (wordId) => {
    const AllFavouritesWordIds = localStorage.getItem('AllFavourites_words')
        ? JSON.parse(localStorage.getItem('AllFavourites_words'))
        : null;

    if (!AllFavouritesWordIds) {
        return false;
    }

    const updatedAllFavouritesWordIds = AllFavouritesWordIds?.filter((AllFavouritesWordId) => AllFavouritesWordId !== wordId);
    localStorage.setItem('AllFavourites_words', JSON.stringify(updatedAllFavouritesWordIds));

    return true;
};
