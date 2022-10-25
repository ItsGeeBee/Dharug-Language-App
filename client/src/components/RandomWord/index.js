import { Grid } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from "@mui/material/Divider";
import Typography from '@mui/material/Typography';
import React from 'react';


const RandomWordCard = (props) => {
 console.log(props);
    return (
        <>
        <Grid justifyContent="center" alignItems="center" container columns={6} style={{backgroundColor: "#ffc44a",}} borderRadius={10}>
          {props.randomWord.map((random) => (
            <Grid item xs={4} sm={4} md={6} m={6}>
              <Card elevation={2} >
              <Typography variant="h4" color="black" gutterBottom pt={3}>
                 <strong>Word of the Day</strong>   
                </Typography>
                <Divider variant="middle" />
                <CardContent key={random._id}>
                  <Typography variant="h5">
                    {random.word}
                   </Typography> 
                    <Typography sx={{ mb: 1.5 }} variant="h6"color="text.secondary">
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