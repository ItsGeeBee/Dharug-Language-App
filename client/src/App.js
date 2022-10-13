import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/index';
import React, { useState } from "react";

function App() {
  const pages = [
    { name: "about" },
    { name: "dictionary" },
    { name: "resume" },
    { name: "contact" },
  ];

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} pages={pages} />
      <Footer />
    </div>
  );
}

export default App;