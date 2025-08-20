import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import About from './Component/About';
import Rating from './Component/Rating';
import Favorites from './Component/Favorites';
import Feedback from './Component/Feedback';
import Contact from './Component/Contact';

import Library from './Component/Library';
import Community from './Component/Community';
import './App.css';

function App() {
  const [favorites, setFavorites] = useState([]);


  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
      <Navbar />
      <Routes>
       

  <Route path="/" element={<Home favorites={favorites} setFavorites={setFavorites} />} />
  <Route path="/about" element={<About />} />
  <Route
    path="/rating"
    element={<Rating favorites={favorites} setFavorites={setFavorites} />}
  />
  <Route
    path="/favorites"
    element={<Favorites favorites={favorites} setFavorites={setFavorites} />}
  />
  <Route path="/feedback" element={<Feedback />} />
  <Route path="/contact" element={<Contact />} />
  
  <Route path="/library" element={<Library favorites={favorites} setFavorites={setFavorites} />} />
<Route path="/community" element={<Community />} />
</Routes>

    </Router>
  );
}

export default App;
