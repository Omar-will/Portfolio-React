import { useEffect } from 'react';
import * as THREE from 'three';

const SmokeEffect = () => {
  useEffect(() => {
    // Vérifier si une balise canvas existe déjà
    let canvasElement = document.getElementById('smoke-effect-canvas');

    if (!canvasElement) {
      // Création de la scène
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.id = 'smoke-effect-canvas'; // Définir l'ID pour la balise canvas
      document.body.appendChild(renderer.domElement);

      // Création de la texture de fumée
      const smokeTexture = new THREE.TextureLoader().load('assets/img/smoke.png');
      
      // Création de la géométrie des particules de fumée
      const smokeGeometry = new THREE.PlaneGeometry(300, 300);
      
      // Création du matériau des particules de fumée
      const smokeMaterial = new THREE.MeshLambertMaterial({ map: smokeTexture, opacity: 0.7, transparent: true });
      
      // Tableau pour stocker les particules de fumée
      const smokeParticles = [];

      // Création des particules de fumée
      for (let i = 0; i < 90; i++) {
        const smokeElement = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smokeElement.scale.set(2, 2, 2);
        smokeElement.position.set(Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 100);
        smokeElement.rotation.z = Math.random() * 360;
        scene.add(smokeElement);
        smokeParticles.push(smokeElement);
      }

      // Création d'une instance de Clock pour l'animation
      const clock = new THREE.Clock();

      // Animation de l'effet visuel
      const animateSmoke = () => {
        const delta = clock.getDelta(); // Obtention de la durée écoulée depuis la dernière frame
        for (let i = 0; i < smokeParticles.length; i++) {
          smokeParticles[i].rotation.z += delta * 0.2; // Rotation des particules
        }
      };

      // Fonction d'animation globale
      const animate = () => {
        requestAnimationFrame(animate);
        animateSmoke(); // Appel de l'animation des particules de fumée
        renderer.render(scene, camera);
      };

      animate(); // Lancement de l'animation

      // Nettoyage lors de la désactivation du composant
      return () => {
        // Nettoyez la scène et le rendu
        renderer.dispose();
      };
    }
  }, []);

  return null; // Ne retourne rien dans le DOM, car le rendu est géré par Three.js
};

export default SmokeEffect;
