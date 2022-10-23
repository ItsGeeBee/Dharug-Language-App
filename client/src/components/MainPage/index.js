import React from 'react';
import Page from "../../pages/home";

const MainPage = (props) => {

    return (
      <main>
        <Page currentPage={props.currentPage} setCurrentPage={props.setCurrentPage} setIsAuthenticated={props.setIsAuthenticated} isAuthenticated={props.isAuthenticated}/>
      </main>
    );
};

export default MainPage;
