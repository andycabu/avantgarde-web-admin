import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]); // Reacciona solo a los cambios en la ruta.

  return null; // No es necesario renderizar nada.
};

export default ScrollToTop;
