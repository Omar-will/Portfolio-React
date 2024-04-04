import React, { useEffect } from 'react';
import * as THREE from 'three';

function RainDrop() {
    useEffect(() => {
        // Création de la scène, de la caméra et du renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        // Fonction pour créer un point de couleur
        const createPoint = () => {
            const material = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 0.1, // Taille des points plus grande pour les rendre plus visibles
                sizeAttenuation: false // Désactiver l'atténuation de la taille des points
            });
            const geometry = new THREE.BufferGeometry();
            const vertices = [];
            const point = new THREE.Vector3(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
            vertices.push(point.x, point.y, point.z);
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            const pointObj = new THREE.Points(geometry, material);
            scene.add(pointObj);

            // Disparition du point après 5 secondes
            setTimeout(() => {
                scene.remove(pointObj);
                geometry.dispose(); // Nettoyage de la géométrie
            }, 5000);
        };

        // Container du canvas Three.js
        const canvasContainer = document.querySelector('.canvas-container');
        canvasContainer.appendChild(renderer.domElement);

        // Fonction d'animation
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        // Appel de la fonction animate
        animate();

        // Création de plus de points chaque seconde
        const intervalId = setInterval(() => {
            for (let i = 0; i < 10; i++) { // Ajoute 10 points à chaque intervalle
                createPoint();
            }
        }, 1000);

        // Nettoyage des ressources
        return () => clearInterval(intervalId);
    }, []); // Le tableau vide indique que cette fonction s'exécutera une seule fois après le rendu initial

    return (
        <div className="raindrop-container">
            <div className="canvas-container"></div>
        </div>
    );
}

export default RainDrop;
