import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";


function App() {
  return (
    <Router>
      <Header />
      
      {/* Routing  */}
      <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;