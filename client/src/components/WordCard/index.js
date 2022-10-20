import React from 'react';
import './style.css';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { DeleteOutlined } from '@mui/icons-material';

export default function WordCard(props) {
  
  props.wordcards.map((wordcard, i) => {
    
    return (
      <Card elevation="2" sx={{ maxWidth: 345 }}>
        props.wordcards.map((wordcard, i) =>
        <CardHeader
          key={wordcard._id}      
          title={wordcard.word}
          subheader={wordcard.definition}
          posted on={wordcard.addedOn}
          by={wordcard.name}
        >
      
          <IconButton onClick={()=>props.handleDelete(wordcard._id)}>
            <DeleteOutlined/>
          </IconButton>
    
        </CardHeader>

        <CardMedia
          component="img"
          height="194"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {wordcard.definition}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {wordcard.example}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites" onClick={()=>props.handleFavouriteWord(wordcard._id)}>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  });
  
}
  // export default WordCard;
  // AllFavouritesWords card component to show on dashboard