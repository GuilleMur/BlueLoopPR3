import { useNavigate } from 'react-router-dom';

export const usePageTransition = () => {
    const navigate = useNavigate();

    const transitionTo = (path) => {
        const loader = document.getElementById('loader');
        if (loader) {
            // 1. Primero tapamos la pantalla
            loader.classList.remove('fade-out');

            // 2. Esperamos a que la cortina esté cerrada (ej. 400ms)
            setTimeout(() => {
                // 3. Cambiamos la página "detrás" de la cortina
                navigate(path);

                // 4. Esperamos un pelín a que React renderice y destapamos
                setTimeout(() => {
                    loader.classList.add('fade-out');
                    window.scrollTo(0, 0);
                }, 100);
            }, 400); 
        } else {
            navigate(path);
        }
    };

    return transitionTo;
};