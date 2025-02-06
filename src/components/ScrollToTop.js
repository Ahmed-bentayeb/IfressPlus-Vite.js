import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll en haut de la page
  }, [pathname]);

  return null; // Aucun rendu nécessaire
}

export default ScrollToTop;