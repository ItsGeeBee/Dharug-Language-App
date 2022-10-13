import React from 'react';
import About from '../components/About/index.js';
import Portfolio from '../components/Portfolio/index';
import Contact from '../components/Contact';
import Resume from '../components/Dashboard/index.js';
import PageContent from '../components/PageContent/index.js';
import Dictionary from '../components/Dictionary/index.js';
import Dashboard from '../components/Dashboard/index.js';


export default function Page(props) {
    // switch statement (conditional) returning the page
    const renderPage = () => {
        switch (props.currentPage.name) {
            case "about":
                return <About setCurrentPage={props.setCurrentPage} />;
            case "portfolio":
                return <Dictionary />;
            case "resume":
                return <Dashboard />;
            case "contact":
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}