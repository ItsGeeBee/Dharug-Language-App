import React from 'react';
import "./style.css"
import Grid from '@mui/material/Grid';
// import Box from "@mui/material/Box";

function About() {
    console.log("about")
    // about me layout
    return (
        <Grid item xs={12} md={8} lg={9} p={1} justifyContent="flex-start">
            <h2 id="About">Welcome to Dharug</h2>
            <p>this is a test</p>
        </Grid>
    );
};

// exports file
export default About;