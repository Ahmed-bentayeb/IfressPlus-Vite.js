import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home'
import About from './pages/About';
import Activites from './pages/Activites'
import Contact from './pages/Contact' 
import Header from './components/Header.jsx';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <ScrollToTop/>

        <div className="app-container">
          
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/activites" element={<Activites initialType="Cabines Modulaires"/>} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Footer />

        </div>

      </Router>

  );
};

export default App;