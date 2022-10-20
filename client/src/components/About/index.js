import React from 'react';
import "./style.css"
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme } from '@mui/material/styles';

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
    console.log("about")
    // about me layout
    return (
        <Box 
        margin="55px"
        alignItems="center"
        justifyContent="center"
      >

        <Typography 
            id="About" 
            variant="h3"
            align="center"
            gutterBottom
            >
                About Dharug
        </Typography>
        <Typography 
            direction="flex" 
            alignItems="center" 
            justifyContent="center" 
            textAlign="center" 
            align="center">
            The Dharug language, also spelt Darug, Dharuk, and other variants, and also known as the Sydney language, Gadigal language, is an Australian Aboriginal language of the Yuin–Kuric group that was traditionally spoken in the region of Sydney, New South Wales.
            It is the traditional language of the Dharug people.
        </Typography>
        </Box>       
        );
};

// exports file
export default About;