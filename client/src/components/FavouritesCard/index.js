import React from "react";
// import "./style.css";
import { Card } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
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
            </Card>
          </Grid>
        ))}
      </Grid>
      `
    </>
  );
}