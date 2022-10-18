import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import React, { useEffect, useState } from "react";

function App() {
  const pages = [
    { name: "about" },
    { name: "dictionary" },
    { name: "dashboard" },
    { name: "contact" },
    { name: "sign-in" },
    { name: "sign-up" },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  useEffect(() => {
    console.log("isAuthenticated", isAuthenticated)
  }, [isAuthenticated])
  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Footer />
    </div>
  );
}

export default App;