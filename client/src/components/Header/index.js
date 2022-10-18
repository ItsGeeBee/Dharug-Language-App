import React from "react";
import Navigation from "../Navigation";
import Page from "../../pages/home";
import "./style.css";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

export default function Header(props) {
  // passes all the props including setIsAuthenticated function to set the state
  console.log("header", props)
  // header layout
  return (
    <div>
      <header><Grid container>
        <Grid item xs={12} md={5}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-start" }}>
            <h1 className="logo">DHARUG</h1>
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box display="flex" justifyContent={{ xs: "center", md: "flex-end" }}>
            <Navigation
              pages={props.pages}
              setCurrentPage={props.setCurrentPage}
              currentPage={props.currentPage}
              isAuthenticated={props.isAuthenticated}
            />
          </Box>
        </Grid>
      </Grid>
      </header>
      <main>
        <Page currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} setIsAuthenticated={props.setIsAuthenticated} />
      </main>
    </div >
  );
}
