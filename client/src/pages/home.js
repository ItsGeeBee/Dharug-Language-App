import React from 'react';
import About from '../components/About';
import Contact from '../components';
import PageContent from '../components/PageContent';
import Dictionary from '../components/Dictionary';
import Dashboard from '../components/Dashboard';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


export default function App() {

    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </section>
    );
}