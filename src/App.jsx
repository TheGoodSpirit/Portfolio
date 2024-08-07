import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import ComingSoon from "./pages/comingSoon";


function App() {
  return (
    
    <Router>
      <ComingSoon />
      {/* <Header /> */}
      {/* <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
      </Routes> */}
    </Router>
  );
}

export default App;