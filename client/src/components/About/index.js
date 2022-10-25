import React, {useState, useEffect} from 'react';
import "./style.css"
import { getRandomWord } from '../../utils/API';
import Typography from '@mui/material/Typography';
import { Grid} from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import RandomWordCard from '../RandomWord/index.js';
import Painting from '../../assets/painting.png';

const theme = createTheme();

theme.typography.h3 = {
  fontSize: '1.2rem',
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.4rem',
  },
};

function About() {

  const [randomWord, setRandomWord] = useState([]);

  useEffect(() => {
    const generateRandomWord= async () => {

      try {
        const response = await getRandomWord()

     if (!response.ok) {
        throw new Error('something went wrong!');
        }

    const randomWord = await response.json();
        

    setRandomWord(randomWord);
  } catch (err) {
    console.error(err)

  }
};
generateRandomWord();
  },[]);


    return (

      <div>
      <Grid container spacing={2}gap={3} pt={10} pb={13}>
        <Grid item xs={12}>
        <Typography 
            id="About" 
            variant="h3"
            align="center"
            gutterBottom
            >
               <strong>About Dharug</strong>
        </Typography>
        </Grid>
        <Grid item xs={7} ml={6} mt={6}>
        <Typography            
            // direction="flex" 
            alignItems="center" 
            justifyContent="center" 
            textAlign="center" 
            align="center"
            variant="h5"> 
            We respect and honour Aboriginal and Torres Strait Islander Elders past, present and future. We acknowledge the stories, traditions and living cultures of Aboriginal and Torres Strait Islander peoples on this land and commit to building a brighter future together.
            <br/>
            <CardMedia 
            component="img"
            height="100"
            image={Painting}
            sx={{ p: 2 }}

      />
            The Dharug language, also spelt Darug, Dharuk, and other variants, and also known as the Sydney language, Gadigal language, is an Australian Aboriginal language of the Yuin–Kuric group that was traditionally spoken in the region of Sydney, New South Wales.
            It is the traditional language of the Dharug people.
        </Typography>
        </Grid>

        <Grid item xs mr={10}
          direction="flex" 
          alignItems="center" 
          justifyContent="center" 
          textAlign="center" 
          align="center">
        <RandomWordCard 
        variant="outlined"
        randomWord={randomWord}/>
        </Grid>
      </Grid>
</div>
      
    )

};

// exports file
export default About;