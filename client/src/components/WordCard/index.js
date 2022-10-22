import React from "react";
import "./style.css";
import { Card } from '@mui/material';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid} from '@mui/material';
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { DeleteOutlined } from "@mui/icons-material";
// import { box } from '@mui/material'

export default function WordCard({ wordcards }) {
console.log("wordcards", wordcards)
  return (
    <>
`    <Grid container columns={12}>
      {wordcards.map((wordcard) => (
          <Grid item xs={4} sm={4} md={4} key={wordcard._id} m={4}>
            <Card elevation={2}>
              <CardHeader
                title={wordcard.word}
                subheader={wordcard.definition}
              ></CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {wordcard.example}
                </Typography>
              </CardContent>
              <CardActions>
                <IconButton>
                  <DeleteOutlined />
                </IconButton>
                <IconButton
                  aria-label="add to favorites"
                  onClick={() => wordcard.props.handleFavouriteWord(wordcard._id)}
                >
                  {wordcard.addFavourite}
                  <FavoriteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
      ))}
          </Grid>`
    </>
  );
}

// router.route('/:userId/addfavourite').put(addFavourite);


