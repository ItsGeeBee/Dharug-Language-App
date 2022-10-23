import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState, useEffect } from "react";
import MainPage from "./components/MainPage";
import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect for the PWA installation
  useEffect(() => {
    console.log("PWA useEffect");
    const butInstall = document.getElementById("buttonInstall");

    window.addEventListener("beforeinstallprompt", (event) => {
      console.log("beforeinstallprompt called");
      event.preventDefault();
      if (butInstall !== null) {
        butInstall.style.visibility = "visible";
        butInstall.textContent = "Click here to install!";

        butInstall.addEventListener("click", () => {
          // @ts-ignore
          event.prompt();
          butInstall.style.visibility = "hidden";
        });
      }
    });

    window.addEventListener("appinstalled", (event) => {
      console.log("appinstalled", event);
    });
  }, []);


  return (
    <div className="App">
      <Container disableGutters sx={{ m: 0 }} maxWidth={false}>
        <Grid item xs={12}>
          <Header
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            pages={pages}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Grid>
        <Grid item xs={12}>
          <MainPage
            currentPage={currentPage}
            pages={pages}
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Container>
    </div>
  );
}

export default App;
