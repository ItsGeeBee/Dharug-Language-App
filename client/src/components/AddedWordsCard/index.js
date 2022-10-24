import React from "react";
import "./style.css";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import { DeleteOutlined } from "@mui/icons-material";
import Divider from "@mui/material/Divider";


// AllFavouritesWords card component to show on dashboard 

const AddedWords = (props) => {

    return (
      <>
      `{" "}
      <Grid justifyContent="center" alignItems="center" container columns={12}>
        {props.addedwords.map((added) => (
          <Grid item xs={4} sm={4} md={4} key={added._id} m={4}>
            <Card elevation={2}>
              <CardHeader>Your Added Words</CardHeader>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                Word: {added.word}
                Definition: {added.definition}
                </Typography>
              </CardContent>
              <Divider variant="middle" />
              <CardActions>
                  <IconButton aria-label="handle delete word" onClick={() => props.handleDeleteWord(added._id)} >
                  <DeleteOutlined />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      `
    </>
)};

export default AddedWords