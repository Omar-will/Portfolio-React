import React, { useState } from 'react';
import '../Scss/ShootGame.scss';

function Game() {
  const [score, setScore] = useState(0);

  function startGame() {
    // Réinitialiser le score à 0
    setScore(0);

    const container = document.querySelector('.containerGame');
    container.innerHTML = ""; // Réinitialiser le contenu du conteneur

    function createTarget() {
      const target = document.createElement('img');
      target.id = "target";
      target.src = '/assets/img/silly.png'; // Spécifier le chemin complet relatif
      target.className = "target"; // Ajouter la classe CSS "target-image" à l'image
      container.appendChild(target);
      target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
      target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

      target.onclick = () => {
        setScore(prevScore => prevScore + 1);
        target.style.display = 'none';
        setTimeout(() => {
          target.style.display = 'block'; // Réafficher l'image après un délai
        }, 100); // Temps en millisecondes avant de réafficher l'image (ajustable selon vos besoins)
      };
    }

    createTarget(); // Appeler la fonction pour créer la cible au démarrage du jeu

    let timeLeft = 10; // Temps restant en secondes
    const timerDisplay = document.createElement('div');
    timerDisplay.className = 'timer';
    container.appendChild(timerDisplay);

    const timerInterval = setInterval(() => {
      timeLeft -= 1;
      timerDisplay.textContent = `Temps restant : ${timeLeft} secondes`;

      if (timeLeft === 0) {
        clearInterval(timerInterval);
        container.innerHTML = "le jeu est terminé";
      }
    }, 1000);
  }

  return (
    <div className="game">
      <button className="start_btn" onClick={startGame}>start / restart</button>
      <div className="game_infos">
        <span className="score">Score : {score}</span>
      </div>
      <div className="containerGame"></div>
    </div>
  );
}

export default Game;
