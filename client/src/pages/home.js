import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from '../components/About';
import Contact from '../components/Contact';
import Dictionary from '../components/Dictionary';
import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import NoPage from '../components/NoPage';


export default function App() {

    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/dictionary" element={<Dictionary />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/sign-in" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </BrowserRouter>
        </section>
    );
}