import React, { useState } from "react";
import "./style.css";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { DeleteOutlined } from "@mui/icons-material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import { red } from "@mui/material/colors";
import EditIcon from "@mui/icons-material/Edit";
import Auth from "../../utils/auth";
import Modal from '@mui/material/Modal';
import EditWordCard from '../EditWordCard';

export default function WordCard(props) {

  const user = props.isAuthenticated ? Auth.getProfile(Auth.getToken()) : null;
  const allFavouriteWordIds = props.AllFavouritesWords.map(w => w._id)
  const [wordEditable, setWordEditable] = useState(null)
  
  return (
    <>
      <Modal
        open={wordEditable}
        onClose={() => setWordEditable(null)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <EditWordCard
          word={wordEditable}
          handleEditWord={(id, data) => {
            setWordEditable(null)
            props.handleEditWord(id, data)
          }}
        />
      </Modal>
      <Grid justifyContent="center" alignItems="center" container columns={12}>
        {props.wordcards.map((wordcard) => (
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
              {props.isAuthenticated && (<>
                <Divider variant="middle" />
                <CardActions>
                {(allFavouriteWordIds.indexOf(wordcard._id) > -1)
                    ?
                    <IconButton
                      aria-label="remove from favorites"
                      onClick={() => props.handleDeleteFavouriteWord(wordcard._id)}
                    >
                      <FavoriteIcon sx={{ color: red[600] }} />
                    </IconButton>
                    :
                    <IconButton
                    aria-label="add to favorites"
                    onClick={() =>
                      props.handleFavouriteWord(wordcard._id)
                    }
                  >
                    <FavoriteBorderIcon sx={{ color: red[600] }} />
                  </IconButton>
                }
                {wordcard.user === user.data._id ? (<IconButton
                  aria-label="edit word"
                  onClick={() => setWordEditable(wordcard)}
                >
                  <EditIcon />
                </IconButton>
                )
                : null
                }
                {wordcard.user === user.data._id ? (
                  <IconButton
                    aria-label="handle delete word"
                    onClick={() => props.handleDeleteWord(wordcard._id)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                ) 
                : 
                null}
              </CardActions>
              </>)}
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}