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
                    <Link to="dashboard" className={currentPage.name === 'dashboard' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[2])}>Dashboard</Link>
                </li>
                <li>
                    <Link to="contact" className={currentPage.name === 'contact' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[3])}>Contact</Link>
                </li>
                <li>
                    <Link to="sign-in" className={currentPage.name === 'sign-in' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[4])}>Sign In</Link>
                </li>
                <li>
                    <Link to="sign-up" className={currentPage.name === 'sign-up' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[5])}>Sign Up</Link>
                </li>
            </ul>
        </nav >
    );
};
// exports file
export default Navigation;