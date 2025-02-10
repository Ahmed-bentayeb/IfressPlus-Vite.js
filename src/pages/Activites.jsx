import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { activitiesGallery } from '../data/activitiesGallery';
import '../styles/activites.css';

function Activites() {
  const location = useLocation();
  const initialFilter = location.state?.filter || "Cabines Modulaires"; // Vérifie s'il y a un filtre dans l'état sinon défaut
  const [filter, setFilter] = useState(initialFilter);
  const [currentImageIndex, setCurrentImageIndex] = useState(null); // Gère l'image en plein écran

  // Ajoutez ce useEffect pour le nettoyage lors du démontage du composant
  useEffect(() => {
    return () => {
      // Réinitialise le scroll quand le composant est démonté
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    };
  }, []); // Tableau de dépendances vide = s'exécute au démontage

  // Fonction pour filtrer les images
  const filteredData = activitiesGallery.filter((item) => item.type === filter);

  useEffect(() => {
    setCurrentImageIndex(null); // Fermer toute image ouverte lors du changement de filtre
  }, [filter]);

  // Ouvrir une image en plein écran
  const openImage = (index) => {
    setCurrentImageIndex(index);
    document.documentElement.style.overflow = "hidden"; // Bloque le scroll sur toute la page
    document.body.style.overflow = "hidden";  };

  // Fermer l'image
  const closeImage = () => {
    setCurrentImageIndex(null);
    document.documentElement.style.overflow = "auto"; // Réactive le scroll
    document.body.style.overflow = "auto";
  };

  // Navigation entre les images
  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : filteredData.length - 1));
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev < filteredData.length - 1 ? prev + 1 : 0));
  };

  // Fermer l'image en cliquant en dehors de la photo
  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains("lightbox")) {
      closeImage();
    }
  };

  // Gérer les événements clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (currentImageIndex !== null) {
        if (e.key === "Escape") closeImage();
        else if (e.key === "ArrowLeft") prevImage(e);
        else if (e.key === "ArrowRight") nextImage(e);
      } 
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    }
  }, [currentImageIndex]);

  return (
    <div className="activities">
        <h1 className="page-title">Nos Activités</h1>
        <div className="tabs">
          {/* Filtres */}
          <button 
            key="Cabines Modulaires" 
            onClick={() => { setFilter("Cabines Modulaires") } } 
            className={`tab-button ${filter === "Cabines Modulaires" ? 'active' : ''}`} >
              Cabines Modulaires
          </button>

          <button 
                key="Systèmes Fixes" 
                onClick={() => { setFilter("Systèmes Fixes") } } 
                className={`tab-button ${filter === "Systèmes Fixes" ? 'active' : ''}`} >
                  Systèmes Fixes
          </button>

          <button 
            key="Travaux Industriels" 
            onClick={() => { setFilter("Travaux Industriels") } } 
            className={`tab-button ${filter === "Travaux Industriels" ? 'active' : ''}`} >
              Travaux Industriels
          </button>

          <button 
            key="Travaux Batiments" 
            onClick={() => { setFilter("Travaux Batiments") } } 
            className={`tab-button ${filter === "Travaux Batiments" ? 'active' : ''}`} >
              Travaux Batiments
          </button>
        </div>
        {/* Description */}
        <div className="content">
            {filter === 'Cabines Modulaires' && (
            <div className="tab-content">
                <h2>Cabines Modulaires</h2>
                <p>
                Présentation cabine modulaire pour bureaux, locaux sociaux, salles de réunion, vestiaires, sanitaires, réfectoires, cabines techniques, postes de garde, salles de classe, extension de bâtiments existants, base de vie export…
                Disponibles en plusieurs dimensions et diverses configurations.
                </p>
                <p>
                Conçues par ordinateur, ces constructions modulaires contribuent à valoriser l’image de votre entreprise, votre style d’architecture et son intégration dans le site environnant.
                </p>
                <ul className="key-points">
                    <li>3x2.5 m²</li>
                    <li>3x6 m²</li>
                    <li>3x9 m²</li>
                    <li>3x12 m²</li>
                </ul>
                <p>
                Elles sont transportables, juxtaposables et superposables pour créer des espaces personnalisés et évolutifs.
                </p>
            </div>
            )}

            {filter === 'Systèmes Fixes' && (
            <div className="tab-content">
                <h2>Systèmes Fixes</h2>
                <p>
                SARL IFRESS PLUS met à votre disposition son expérience et savoir-faire avec une équipe d’experts pour la réalisation de vos projets : bureaux, locaux sociaux, salles de réunion, vestiaires, blocs sanitaires, blocs réfectoires, etc.
                </p>
                <p>
                Notre objectif est de construire, avec vous, un projet de base de vie :
                </p>
                <ul className="key-points">
                    <li>Adapté à vos besoins</li>
                    <li>Personnalisé pour répondre pleinement à vos attentes</li>
                    <li>A la pointe de l’innovation et dans le respect des normes de fabrication</li>
                    <li>Livré rapidement grâce à notre unité de production sur place</li>
                </ul>
            </div>
            )}

            {filter === 'Travaux Industriels' && (
            <div className="tab-content">
                <h2>Travaux Industriels</h2>
                <p>
                Nous offrons des services de travaux industriels conçus pour répondre aux besoins de nos clients dans divers secteurs :
                </p>
                <ul className="key-points">
                    <li>Montage de structures métalliques</li>
                    <li>Installation de lignes de production</li>
                    <li>Maintenance batiments industrielle et rénovation d’équipements</li>
                    <li>Gestion de projets industriels complexes</li>
                </ul>
                <p>
                Nos équipes d'experts travaillent avec précision et efficacité pour garantir des résultats conformes aux standards internationaux.
                </p>
            </div>
            )}

            {filter === 'Travaux Batiments' && (
            <div className="tab-content">
                <h2>Travaux Batiments</h2>
                <p>
                  Notre expertise en travaux de bâtiments nous permet de réaliser des constructions , fonctionnelles et adaptées aux besoins de nos clients.
                  Nous intervenons sur divers types de projets, allant des bâtiments industriels aux infrastructures commerciales et résidentielles.
                  <br/> Nos services incluent :
                </p>
                  <ul className="key-points">
                    <li>Construction de structures en béton et en acier : Conception et mise en œuvre de bâtiments durables et conformes aux normes en vigueur</li>
                    <li>Aménagement intérieur et extérieur : Optimisation des espaces pour un usage pratique et esthétique.</li>
                    <li>Rénovation et réhabilitation : Modernisation et amélioration des bâtiments existants.</li>
                    <li>Gestion et suivi de projet : Accompagnement à chaque étape, de la conception à la livraison finale.</li>
                  </ul>
                  Grâce à notre savoir-faire et à notre équipe expérimentée, nous garantissons des solutions clé en main qui allient qualité, sécurité et respect des délais.
                <p>
                  Nos équipes d'experts travaillent avec précision et efficacité pour garantir des résultats conformes aux standards internationaux.
                </p>
            </div>
            )}
            
        </div>


        {/* Galerie */}
        <div className="gallery-container">
            <div className="gallery-grid" key={filter}>
                {filteredData.map((item, index) => (
                <div
                    className="gallery-item"
                    key={item.id}
                    onClick={() => openImage(index)}
                >
                    <img src={item.image} alt={item.title} className="gallery-image" />
                    <div className="gallery-info">
                    <p className="gallery-title">{item.title}</p>
                    <p className="gallery-post">{item.post}</p>
                    </div>
                </div>
                ))}
            </div>

            {/* Lightbox */}
            {currentImageIndex !== null && (
                <div className="lightbox" onClick={handleBackgroundClick}>
                <button className="close-btn" onClick={closeImage}>
                    &times;
                </button>
                <button className="prev-btn" onClick={prevImage}>
                    &larr;
                </button>
                <img
                    src={filteredData[currentImageIndex].image}
                    alt={filteredData[currentImageIndex].title}
                />
                <button className="next-btn" onClick={nextImage}>
                    &rarr;
                </button>
                </div>
            )}
        </div>
    </div>
  );
};

export default Activites;