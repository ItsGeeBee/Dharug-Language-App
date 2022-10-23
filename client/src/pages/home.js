import { Route, Routes } from "react-router-dom"
import About from '../components/About';
import Dictionary from '../components/Dictionary';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NoPage from '../components/NoPage';


export default function App(props) {
   console.log("props.isAuthenticated HOME", props.isAuthenticated)
    return (
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/dictionary" element={<Dictionary isAuthenticated={props.isAuthenticated} />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/sign-in" element={<SignIn setIsAuthenticated={props.setIsAuthenticated} />} />
                <Route path="/sign-up" element={<SignUp setIsAuthenticated={props.setIsAuthenticated} />} />
                <Route path="/sign-out" element={<About/>} />
                <Route path="/" element={<About />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
    );
}