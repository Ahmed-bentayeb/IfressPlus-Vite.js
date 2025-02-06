import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Carousel from '../components/Carousel';
import '../styles/Home.css';

function Home() {
  const navigate = useNavigate();

    return (
      <div className='home'>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Des solutions modulaires innovantes</h1>
          <p className="hero-description">Cabines préfabriquées, systèmes bungalow, bases de vie fixes et plus encore.</p>
          <Link to="/about" className="hero-button">En savoir plus</Link>
        </div>
      </section>
      <section id="services" className="services">
        <div className="services-container">
          <h2 className="section-title">Nos Services</h2>
          <div className="services-grid">
            <div to="/activites" className="service-card service-cabines" onClick={() => navigate('/activites' , {state : { filter : "Cabines Modulaires"} }) }>
              <h3 className="service-title">Cabines modulaires</h3>
              <p className="service-description">Des cabines préfabriquées adaptées à vos besoins professionnels.</p>
            </div>
            <div className="service-card service-fixes" onClick={() => navigate('/activites' , {state : { filter : "Systèmes Fixes"} }) }>
              <h3 className="service-title">Système fixes</h3>
              <p className="service-description">Solutions durables pour vos infrastructures de travail.</p>
            </div>
            <div className="service-card service-industriels" onClick={() => navigate('/activites' , {state : { filter : "Travaux Industriels"} }) }>
              <h3 className="service-title">Travaux industriels</h3>
              <p className="service-description">Des services industriels de qualité pour vos projets.</p>
            </div>
            <div className="service-card service-batiments" onClick={() => navigate('/activites' , {state : { filter : "Travaux Batiments"} }) }>
              <h3 className="service-title">Travaux Batiments</h3>
              <p className="service-description">Construction et aménagement de bâtiments adaptés à vos besoins.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us">
        <div className="why-container">
          <h2 className="section-title">Pourquoi nous choisir ?</h2>
          <div className="why-grid">
            <div className="why-card">
              <h3>Qualité</h3>
              <p className='why-description'>Nos produits sont conformes aux normes internationales, assurant <strong>fiabilité</strong> et <strong>durabilité</strong>.</p>
            </div>
            <div className="why-card">
              <h3>Personnalisation</h3>
              <p className='why-description'>Des solutions adaptées à vos besoins spécifiques, qu'il s'agisse de <u>bureaux</u>, <u>logements</u> ou <u>cantines</u>...</p>
            </div>
            <div className="why-card">
              <h3>Expérience</h3>
              <p className='why-description'>Plus de <strong>20 ans</strong> d'expertise dans les solutions modulaires et les travaux industriels.</p>
            </div>
          </div>
        </div>
      </section>
      <Carousel />
      </div>
    );
}

export default Home;
