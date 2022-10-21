import React from "react";

import { Card } from '@mui/material';
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';
import { box } from '@mui/material'
export default function WordCard({ wordcards }) {
  return (
    <>
      {wordcards.map((wordcard) => (
        <Grid>
          <Grid item xs={12} sm={6} md={3} m={3}>
        <Card elevation="2" sx={{ maxWidth: 345 }}>
          <CardHeader
            key={wordcard._id}
            title={wordcard.word}
            subheader={wordcard.definition}
          >
          </CardHeader>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {wordcard.example}
            </Typography>
          </CardContent>
        </Card>
        </Grid>
        </Grid>
      ))}
    </>
  );
}


// export default WordCard;
// AllFavouritesWords card component to show on dashboard
