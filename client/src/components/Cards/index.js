import React from 'react';
import './style.css';


// AllFavouritesWords card component to show on dashboard 

const AllFavouritesCard = (props) => {

    return (
    <div className="WordCardContainer">
    {props.allFavouritesWords.map((allFavouritesWord, i) => (
  <div key={allFavouritesWord.wordId}>
    <div className="wordHeader">
      <h1 className="wordTitle">{allFavouritesWord.word}</h1>
    </div>
    <div className="wordContent">
      <h4>{allFavouritesWord.definition}</h4>
    </div>
  </div>
    ))}
    <button
          onClick={props.handleRemovedAllFavourites}
          className="btn btn-primary"
          type="submit">
          Delete this word from Favourties
        </button> 
  </div>
)};

export default AllFavouritesCard