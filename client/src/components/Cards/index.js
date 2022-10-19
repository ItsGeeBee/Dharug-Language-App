import React from 'react';
import './style.css';


// SavedWords card component to show on dashboard 

const SavedCard = (props) => {

    return (
    <div className="WordCardContainer">
    {props.savedWords.map((savedWord, i) => (
  <div key={savedWord.wordId}>
    <div className="wordHeader">
      <h1 className="wordTitle">{savedWord.word}</h1>
    </div>
    <div className="wordContent">
      <h4>{savedWord.definition}</h4>
    </div>
  </div>
    ))}
    <button
          onClick={props.handleRemovedSaved}
          className="btn btn-primary"
          type="submit">
          Delete this word from Favourties
        </button> 
  </div>
)};

export default SavedCard