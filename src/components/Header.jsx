import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation(); // Permet de savoir sur quelle page on est

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth <= 1024) {
        if (currentScrollY < lastScrollY) {
          setIsHeaderVisible(true);
        } else if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
          setIsMenuOpen(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMenuOpen]);

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0); // Scroll tout en haut de la page
      setTimeout(() => {
        window.location.reload(); // Rafraîchir la page après un court délai
      }, 100);
    }
    setIsMenuOpen(false); // Fermer le menu sur mobile
  };

  return (
    <header className={`header ${isHeaderVisible || window.innerWidth > 1024 ? "visible" : "hidden"}`}>
      <div className="header-content">
        <div className="logo">
          <Link to="/" onClick={() => handleLinkClick("/")}>
            <img src="/images/logo-header.webp" alt="logo" className="logo-icon" />
          </Link>
        </div>

        {/* Bouton Hamburger pour mobile */}
        <button className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
        </button>

        {/* Navigation */}
        <nav className={`navigation ${isMenuOpen ? "show" : ""}`}>
          <Link to="/" className="nav-link" onClick={() => handleLinkClick("/")}>Accueil</Link>
          <Link to="/about" className="nav-link" onClick={() => handleLinkClick("/about")}>À propos</Link>
          <Link to="/activites" className="nav-link" onClick={() => handleLinkClick("/activites")}>Activités</Link>
          <Link to="/contact" className="nav-link" onClick={() => handleLinkClick("/contact")}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
