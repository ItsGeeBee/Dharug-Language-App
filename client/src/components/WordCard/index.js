import React from "react";
import "./style.css";
import { Card } from '@mui/material';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { DeleteOutlined } from "@mui/icons-material";
// import { box } from '@mui/material'

export default function WordCard({ wordcards }) {

  return (
    <>
      {wordcards.map((wordcard) => (
        <Grid container className="card" key={wordcard._id}>
          <Grid item xs={12} sm={6} md={3} m={3}>
            <Card elevation="2" sx={{ maxWidth: 345 }}>
              <CardHeader
                title={wordcard.word}
                subheader={wordcard.definition}
              ></CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {wordcard.example}
                </Typography>
              </CardContent>
              {/* <CardActions disableSpacing>
                <IconButton>
                  <DeleteOutlined />
                </IconButton>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => wordcard.handleFavouriteWord(wordcard._id)}
                >
                  {wordcard.addFavourite}
                  <FavoriteIcon />
                </IconButton>
              </CardActions> */}
            </Card>
          </Grid>
        </Grid>
      ))}
    </>
  );
}


// export default WordCard;
// AllFavouritesWords card component to show on dashboard

