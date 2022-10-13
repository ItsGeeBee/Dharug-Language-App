
import React from "react";
import "../../index.css"

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    // navigation layout

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about" className={currentPage.name === 'about' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[0])}>About Dharug</a>
                </li>
                <li>
                    <a href="#dictionary" className={currentPage.name === 'dictionary' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[1])}>Dictionary</a>
                </li>
                <li>
                    <a href="#resume" className={currentPage.name === 'resume' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[2])}>Resume</a>
                </li>
                <li>
                    <a href="#contact" className={currentPage.name === 'contact' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[3])}>Contact</a>
                </li>
                <li>
                    <a href="" id="buttonInstall" className={currentPage.name === 'contact' ? 'nav-active' : ''}>install</a>
                </li>
            </ul>
        </nav >
    );
};
// exports file
export default Navigation;