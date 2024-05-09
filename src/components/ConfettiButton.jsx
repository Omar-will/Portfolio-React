import { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiButton = () => {
  useEffect(() => {
    const handleClick = () => {
      let canvas = document.createElement("canvas");
      let container = document.getElementsByClassName("button-wrapper")[0];
      canvas.width = 600;
      canvas.height = 600;

      container.appendChild(canvas);

      let confetti_button = confetti.create(canvas);
      confetti_button({
        particleCount: 200,
        spread: 200,
        startVelocity: 15,
        scalar: 0.9,
        ticks: 90
      }).then(() => container.removeChild(canvas));
    };

    const button = document.getElementsByClassName("confetti-button")[0];
    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
};

export default ConfettiButton;
