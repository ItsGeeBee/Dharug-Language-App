import { Route, Routes } from "react-router-dom"
import About from '../components/About';
import Dictionary from '../components/Dictionary';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NoPage from '../components/NoPage';


export default function App() {

    return (
        <section>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signIn" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </section>
    );
}