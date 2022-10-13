import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Dictionary from '../components/Dictionary';
import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import NoPage from '../components/NoPage';
import Navigation from '../components/Navigation';


export default function App() {

    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigation />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="dictionary" element={<Dictionary />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </section>
    );
}