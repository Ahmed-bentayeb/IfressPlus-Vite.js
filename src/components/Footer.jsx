import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Icône Facebook
import '../styles/footer.css';

const Footer = () => {
  const location = useLocation(); // Permet de savoir sur quelle page on est

  // Fonction pour gérer le clic sur un lien
  const handleLinkClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo(0, 0); // Scroll en haut
      setTimeout(() => {
        window.location.reload(); // Rafraîchir après un court délai
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section gauche : Qui sommes-nous */}
        <div className="footer-left">
          <h4>Qui sommes-nous ?</h4>
          <p>
            SARL IFRESS PLUS propose des solutions modulaires adaptées à vos besoins de bureaux, logements, cantines et entrepôts.
          </p>
          <Link to="/about" className="footer-learn-more" onClick={() => handleLinkClick("/about")}>En savoir plus</Link>
        </div>

        {/* Logo centré */}
        <div className="footer-center">
          <img src="/images/footer-logo-transparent.webp" alt="IFRESS PLUS" className="footer-logo" />
        </div>

        {/* Section droite : Contact & Carte */}
        <div className="footer-right">
          <Link to="/contact" className="footer-contact-button" onClick={() => handleLinkClick("/contact")}>Contactez-nous</Link>
          <div className="footer-map">
            {/* Ici tu peux ajouter une iframe Google Maps si nécessaire */}
          </div>
        </div>
      </div>

      {/* Réseaux sociaux & Copyright */}
      <div className="footer-bottom">
        <a href="https://www.facebook.com/IFRESSPLUS.DZ" target="_blank" rel="noopener noreferrer" className="footer-social">
          <FaFacebookF />
        </a>
        <p>© 2016-2024 IFRESS PLUS. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
