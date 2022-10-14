
import { Link } from "react-router-dom";
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
                    <Link to="about" className={currentPage.name === 'about' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[0])}>About Dharug</Link>
                </li>
                <li>
                    <Link to="dictionary" className={currentPage.name === 'dictionary' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[1])}>Dictionary</Link>
                </li>
                <li>
                    <Link to="resume" className={currentPage.name === 'resume' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[2])}>Dashboard</Link>
                </li>
                <li>
                    <Link to="contact" className={currentPage.name === 'contact' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[3])}>Contact</Link>
                </li>
                <li>
                    <Link to="sign-in" className={currentPage.name === 'sign-in' ? 'nav-active' : ''}>Sign In</Link>
                </li>
            </ul>
        </nav >
    );
};
// exports file
export default Navigation;