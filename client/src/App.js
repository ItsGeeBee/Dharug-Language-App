import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect, useState } from "react";
import MainPage from "./components/MainPage";
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Auth from './utils/auth';

function App() {
  const pages = [
    { name: "about" },
    { name: "dictionary" },
    { name: "dashboard" },
    { name: "contact" },
    { name: "sign-in" },
    { name: "sign-up" },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    setIsAuthenticated(Auth.loggedIn())
    }
  )


  return (
    <div className="App">
      <Container disableGutters sx={{ m: 0 }} maxWidth={false}>
        <Grid item xs={12}>
          <Header setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
        </Grid>
        <Grid item xs={12}>
          <MainPage currentPage={currentPage} pages={pages} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/> 
        </Grid>
        <Grid>
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
