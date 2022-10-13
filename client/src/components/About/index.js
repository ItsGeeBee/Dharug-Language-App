import React from 'react';
import "./style.css"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

function About(props) {
    const clickHandler = (e) => {
        props.setCurrentPage({ name: "contact" }); // calls the contact page for the contact button
    }
    // about me layout
    return (
        <Grid className="about-container" container >
            <Grid item xs={12} md={4} lg={3} p={1} justifyContent="flex-start">
                <Box sx={{ gap: 1 }}>

                </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={9} p={1} justifyContent="flex-start">
                <h2 id="About">Welcome to Dharug</h2>
            </Grid>
        </Grid >
    );
};

// exports file
export default About;