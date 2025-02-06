// src/components/Carousel.jsx
import React, { useState } from 'react';
import {references} from '../data/references'; // Importez les références
import '../styles/carousel.css'; // Importez les styles

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5; // Nombre de références visibles à la fois

  const goToPrevious = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? references.length - 1 : prevIndex - 1
    );
  };
  
  const goToNext = () => {
    setStartIndex((prevIndex) =>
      (prevIndex + 1) % references.length
    );
  };
  
  // Sélectionne les références visibles
  const visibleReferences = [];
  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % references.length;
    visibleReferences.push(references[index]);
  }

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={goToPrevious}>
        &lt; {/* Icône précédent */}
      </button>
      <div className="carousel-content">
        {visibleReferences.map((reference) => (
          <div key={reference.id} className="carousel-item">
            <img
              src={reference.img}
              alt={`Référence ${reference.id}`}
              className="carousel-image"
            />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={goToNext}>
        &gt; {/* Icône suivant */}
      </button>
    </div>
  );
};

export default Carousel;