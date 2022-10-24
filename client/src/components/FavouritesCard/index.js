import React from "react";
// import "./style.css";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import Auth from '../../utils/auth';

export default function FavouritesCard(props) {
  const user = Auth.getProfile(Auth.getToken());
 
  return (
    <>
      `{" "}
      <Grid justifyContent="center" alignItems="center" container columns={12}>
        {props.favouritewords.map((favourite) => (
          <Grid item xs={4} sm={4} md={4} key={favourite._id} m={4}>
            <Card elevation={2}>
              <CardHeader
                title={favourite.word}
              ></CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                {favourite.definition}
                </Typography>
              </CardContent>
              {/* <Divider variant="middle" />
            <CardActions>
                {
                  props.isAuthenticated
                  ?
                    (allFavouriteWordIds.indexOf(wordcard._id) > -1)
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
                  : null
                }
                <IconButton
                  aria-label="edit word"
                  onClick={() => setWordEditable(wordcard)}
                >
                  <EditIcon />
                </IconButton>
                {wordcard.user === user.data._id ? (
                  <IconButton
                    aria-label="handle delete word"
                    onClick={() => props.handleDeleteWord(wordcard._id)}
                  >
                    <DeleteOutlined />
                  </IconButton>
                ) : null}
              </CardActions> */}
            </Card>
          </Grid>
        ))}
      </Grid>
      `
    </>
  );
}