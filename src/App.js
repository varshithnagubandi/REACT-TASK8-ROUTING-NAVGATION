import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/home">
            <li>HOME</li>
          </Link>
          <Link to="/about">
            <li>ABOUT</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
        </ul>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
