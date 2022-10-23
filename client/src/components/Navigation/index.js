import { Link } from "react-router-dom";
import "../../index.css"
import Auth from "../../utils/auth";

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage,
        isAuthenticated,
        setIsAuthenticated
    } = props;
    
    const logOutHandler = () => {
    setIsAuthenticated(false)
    Auth.logout();
    }

    
    // navigation layout
    // setCurrentPage and currentPage is being sent from "header" through props
    return (
        <nav>
            <ul>
                <li>
                    <Link to="about" className={currentPage.name === 'about' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[0])}>About Dharug</Link>
                </li>
                <li>
                    <Link to="dictionary" className={currentPage.name === 'dictionary' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[1])}>Dictionary</Link>
                </li>
                {isAuthenticated &&<li>
                    <Link to="dashboard" className={currentPage.name === 'dashboard' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[2])}>Dashboard</Link>
                </li>}
                <li>
                    <Link to="contact" className={currentPage.name === 'contact' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[3])}>Contact</Link>
                </li>
                {
                    (!isAuthenticated) ?
                        <>
                            <li>
                                <Link to="sign-in" className={currentPage.name === 'sign-in' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[4])}>Sign In</Link>
                            </li>
                            <li>
                                <Link to="sign-up" className={currentPage.name === 'sign-up' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[5])}>Sign Up</Link>
                            </li>
                        </>
                        :
                        <li>
                            <Link to="sign-out" className={currentPage.name === 'sign-out' ? 'nav-active' : ''} onClick={() => logOutHandler()}>Sign Out</Link>
                        </li>
                }
            </ul>
        </nav >
    );
};
// exports file
export default Navigation;