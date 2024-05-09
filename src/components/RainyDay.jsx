import React, { useEffect } from 'react';

function RainyImage() {
    useEffect(() => {
        const loadImage = () => {
            var container = document.getElementById('image-container');
            if (!container) {
                console.error('L\'élément conteneur avec l\'ID "image-container" n\'a pas été trouvé dans le DOM.');
                return;
            }
        
            var image = new Image();
            image.onload = function () {
                var engine = new window.RainyDay({
                    image: this,
                    parentElement: container 
                });
                engine.rain([
                    [3, 2, 2]
                ], 100);
                
            };
            // Chargement de l'image
            image.crossOrigin = 'anonymous';
            image.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAADCAYAAABfwxXFAAAAYklEQVQYVwFXAKj/AXRCrf8E9PIAAxXhAPfv+gDp7+8A5PLsAA0PBgAB0cjr/6l4yQAGE+YAAfnxABkHCwAM/gMA8On2AAFpQbb/7u/wAPcB3ADm/9kAB//6ABoCFAAfDxwACv8maribSVsAAAAASUVORK5CYII=';
        
            container.appendChild(image);
        };

        if (typeof window.RainyDay !== 'undefined') {
            loadImage();
        } else {
            console.error('RainyDay.js n\'est pas disponible.');
        }
    }, []);

    return (
        <div id="image-container" className="rainy-image-container">

    </div>
    );
}

export default RainyImage;

