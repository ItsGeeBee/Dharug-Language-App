import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from 'react';


const RandomWordCard = (props) => {
 console.log(props);
    return (
        <>
        <Grid justifyContent="center" alignItems="center" container columns={12}>
          {props.randomWord.map((random) => (
            <Grid item xs={4} sm={4} md={6} m={6}>
              <Card elevation={2}>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                    Word of the Day
                </Typography>
                <CardContent key={random._id}>
                  <Typography variant="h5">
                    {random.word}
                   </Typography> 
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {random.definition}
                    </Typography>
                    <Typography variant="body2">
                     {random.example}
                     </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </>
    )
};

export default RandomWordCard