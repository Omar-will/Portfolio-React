import { useEffect } from 'react';
import * as THREE from 'three';

const SmokeEffect = () => {
  useEffect(() => {

    let canvasElement = document.getElementById('smoke-effect-canvas');

    if (!canvasElement) {

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.domElement.id = 'smoke-effect-canvas';
      renderer.domElement.style.position = 'absolute'; 
      renderer.domElement.style.top = 0; 
      renderer.domElement.style.left = 0; 
      renderer.domElement.style.width = '100%'; 
      renderer.domElement.style.height = '100%'; 
      document.body.appendChild(renderer.domElement);

      const smokeTexture = new THREE.TextureLoader().load('assets/img/smokes.webp');
      
      const smokeGeometry = new THREE.PlaneGeometry(300, 300);
      
      const smokeMaterial = new THREE.MeshLambertMaterial({ map: smokeTexture, opacity: 0.7, transparent: true });
      
      const smokeParticles = [];

      for (let i = 0; i < 90; i++) {
        const smokeElement = new THREE.Mesh(smokeGeometry, smokeMaterial);
        smokeElement.scale.set(2, 2, 2);
        smokeElement.position.set(Math.random() * 1000 - 500, Math.random() * 1000 - 500, Math.random() * 1000 - 100);
        smokeElement.rotation.z = Math.random() * 360;
        scene.add(smokeElement);
        smokeParticles.push(smokeElement);
      }

      const clock = new THREE.Clock();

      const animateSmoke = () => {
        const delta = clock.getDelta();
        for (let i = 0; i < smokeParticles.length; i++) {
          smokeParticles[i].rotation.z += delta * 0.2; 
        }
      };

      const animate = () => {
        requestAnimationFrame(animate);
        animateSmoke(); 
        renderer.render(scene, camera);
      };

      animate(); 

      return () => {

        renderer.dispose();
      };
    }
  }, []);

  return null; 
};

export default SmokeEffect;
