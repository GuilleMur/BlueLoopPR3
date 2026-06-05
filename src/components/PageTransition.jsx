import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const loader = document.getElementById('loader');
    
    if (loader) {
      // 1. Cuando cambia la ruta, quitamos la clase fade-out (el loader aparece/tapa)
      loader.classList.remove('fade-out');

      // 2. Pequeño retraso para que la cortina cubra la pantalla antes del cambio visual
      const timeout = setTimeout(() => {
        // 3. Volvemos a poner el fade-out para que se retire
        loader.classList.add('fade-out');
        
        // 4. Forzamos el scroll arriba
        window.scrollTo(0, 0);
      }, 500); // Este tiempo debe coincidir con la duración de tu transición CSS

      return () => clearTimeout(timeout);
    }
  }, [pathname]);

  return null;
};

export default PageTransition;