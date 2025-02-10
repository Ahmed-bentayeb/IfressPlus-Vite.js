import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (window.innerWidth <= 1024) { // Seulement pour mobile
        if (currentScrollY < lastScrollY) {
          // L'utilisateur scroll vers le haut
          setIsHeaderVisible(true); // Header réapparaît immédiatement
        } else if (currentScrollY > lastScrollY) {
          // L'utilisateur scroll vers le bas
          setIsHeaderVisible(false); // Header disparaît
          setIsMenuOpen(false); // Fermer le menu hamburger
        }
      }
  
      setLastScrollY(currentScrollY); // Mettre à jour la position du scroll
    };
  
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  return (
    <header className={`header ${isHeaderVisible || window.innerWidth > 1024 ? "visible" : "hidden"}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/">
          <img src="/images/logo-header.webp" alt="logo" className="logo-icon" />
          </Link>
        </div>

        {/* Bouton Hamburger pour mobile */}
        <button
          className="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        {/* Navigation (affichée sur grand écran et avec animation sur mobile) */}
        <nav className={`navigation ${isMenuOpen ? "show" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Accueil</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>À propos</Link>
          <Link to="/activites" className="nav-link" onClick={() => setIsMenuOpen(false)}>Activités</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;