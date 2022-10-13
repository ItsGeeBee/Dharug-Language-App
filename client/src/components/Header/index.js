import React from "react";
import Navigation from "../Navigation";
import Page from "../../pages/home";
import "./style.css";
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

export default function Header(props) {
  // const [pages] = useState([
  //   { name: "about" },
  //   { name: "portfolio" },
  //   { name: "resume" },
  //   { name: "contact" },
  // ]);

  // const [currentPage, setCurrentPage] = useState(pages[0]);

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
            />
          </Box>
        </Grid>
      </Grid>
      </header>
      <main>
        <Page currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} />
      </main>
    </div >
  );
}
