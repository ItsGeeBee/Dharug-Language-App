
import React from 'react';
import './style.css';

// Words from word schema to show in array on /dictionary 

function WordCard (props)  {

  return (

     <div className="WordCardContainer">
        {props.wordcards.map((wordcard, i) => (
      <div key={wordcard.wordId}>
        <div className="wordHeader">
          <h1 className="wordTitle">{wordcard.word}</h1>
          <span className="contributor">posted on {wordcard.addedOn} by {wordcard.name}</span>
        </div>

        <div className="wordContent">
          <h3>{wordcard.definition}</h3>
          <p>{wordcard.example}</p>
        </div>
      </div>
        ))}
        <button
          onClick={props.handleSaveWord}
          className="btn btn-primary"
          type="submit">
          Add to Favourites
        </button>  
      </div>
  )};

export default WordCard;