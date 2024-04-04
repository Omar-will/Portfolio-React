import { useEffect } from 'react';
import RainyDay from 'public/js/rainyday.js';

function RainEffect() {
    useEffect(() => {
        // Créer un conteneur pour simuler l'espace de pluie
        const rainContainer = document.createElement('div');
        rainContainer.id = 'rain-container';
        rainContainer.style.position = 'fixed';
        rainContainer.style.top = 0;
        rainContainer.style.left = 0;
        rainContainer.style.width = '100%';
        rainContainer.style.height = '100%';
        document.body.appendChild(rainContainer);

        // Appliquer l'effet de pluie
        const rainyDay = new RainyDay(rainContainer, 10, 10, 0.9);
        rainyDay.rain([ [0, 2, 200] ], 100); // Modifier les paramètres de la pluie selon vos préférences
    }, []); // Effect will run only after the initial render

    return null; // Nous n'avons pas besoin de retourner de contenu JSX puisque nous manipulons directement le DOM
}

export default RainEffect;
