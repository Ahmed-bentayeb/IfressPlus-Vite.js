import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF } from 'react-icons/fa'; // Import de l'icône Facebook
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Section gauche : Qui sommes-nous */}
        <div className="footer-left">
          <h4>Qui sommes-nous ?</h4>
          <p>
            SARL IFRESS PLUS propose des solutions modulaires, définitives ou temporaires, à vos besoins de bureaux, logements, cantines, vestiaires ou entrepôts.
          </p>
          <Link to="/about" className="footer-learn-more">En savoir plus</Link>
        </div>

        {/* Logo centré */}
        <div className="footer-center">
          <img src="/images/footer-logo-transparent.webp" alt="IFRESS PLUS" className="footer-logo" />
        </div>

        {/* Section droite : Bouton Contact */}
        <div className="footer-right">
          <Link to="/contact" className="footer-contact-button">Contactez-nous</Link>
        </div>
      </div>

      {/* Réseaux sociaux & Copyright */}
      <div className="footer-bottom">
        <a href="https://www.facebook.com/IFRESSPLUS.DZ" target="_blank" rel="noopener noreferrer" className="footer-social">
          <FaFacebookF />
        </a>
        <p>Copyright © 2016-2018 ifress-dz. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;