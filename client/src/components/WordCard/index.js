
import React from 'react';
import './style.css';

// Words from word schema to show in array on /dictionary 

function WordCard (props)  {

  return (

     <div className="WordCardContainer">
        {props.wordcards.map((wordcard, i) => {
          console.log('>>>', wordcard._id)
          return (
      <div key={wordcard._id}>
        <div className="wordHeader">
          <h1 className="wordTitle">{wordcard.word}</h1>
          <span className="contributor">posted on {wordcard.addedOn} by {wordcard.name}</span>
        </div>

        <div className="wordContent">
          <h3>{wordcard.definition}</h3>
          <p>{wordcard.example}</p>
        </div>
        <button
          onClick={()=>props.handleSaveWord(wordcard._id)}
          className="btn btn-primary"
          type="submit">
          Add to Favourate
        </button> 
      </div>
        )
          })} 
      </div>
  )};

export default WordCard;