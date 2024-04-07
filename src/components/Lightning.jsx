// import React, { useEffect, useRef } from 'react';

// function MyCanvasAnimation() {
//   const canvasRef = useRef(null);
//   const ctxRef = useRef(null);
//   const layer = useRef([]);
//   const layery = useRef([]);

//   const stgw = 1280;
//   const stgh = 720;
//   const lcount = 6;
//   const count = 100;

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     ctxRef.current = ctx;

//     const _pexresize = () => {
//       const cw = window.innerWidth;
//       const ch = window.innerHeight;
//       let loffset, toffset;
//       if (cw <= ch * stgw / stgh) {
//         loffset = 0;
//         toffset = Math.floor(ch - (cw * stgh / stgw)) / 2;
//         canvas.style.width = cw + "px";
//         canvas.style.height = Math.floor(cw * stgh / stgw) + "px";
//       } else {
//         loffset = Math.floor(cw - (ch * stgw / stgh)) / 2;
//         toffset = 0;
//         canvas.style.height = ch + "px";
//         canvas.style.width = Math.floor(ch * stgw / stgh) + "px";
//       }
//       canvas.style.marginLeft = loffset + "px";
//       canvas.style.marginTop = toffset + "px";
//     }
//     _pexresize();

//     ctx.fillStyle = "rgba(255,255,255,0.5)";
//     for (let l = 0; l < lcount; l++) {
//       ctx.clearRect(0, 0, stgw, stgh);
//       for (let i = 0; i < count * (lcount - l) / 1.5; i++) {
//         const myx = Math.floor(Math.random() * stgw);
//         const myy = Math.floor(Math.random() * stgh);
//         const myh = l * 6 + 8;
//         const myw = myh / 10;
//         ctx.beginPath();
//         ctx.moveTo(myx, myy);
//         ctx.lineTo(myx + myw, myy + myh);
//         ctx.arc(myx, myy + myh, myw, 0, 1 * Math.PI);
//         ctx.lineTo(myx - myw, myy + myh);
//         ctx.closePath();
//         ctx.fill();
//       }
//       layer.current[l] = new Image();
//       layer.current[l].src = canvas.toDataURL("img/or.png");
//       layery.current[l] = 0;
//     }

//     const rainSpeed = 0.1;

//     const animate = () => {
//       const ctx = ctxRef.current;
//       ctx.clearRect(0, 0, stgw, stgh);

//       for (let l = 0; l < lcount; l++) {
//         layery.current[l] += rainSpeed *(l + 1.5);
//         if (layery.current[l] > stgh) {
//           layery.current[l] = layery.current[l] - stgh;
//         }
//         ctx.drawImage(layer.current[l], 0, layery.current[l]);
//         ctx.drawImage(layer.current[l], 0, layery.current[l] - stgh);
//       }
//       window.requestAnimationFrame(animate);
//     }

//     animate();

//     window.addEventListener('resize', _pexresize);
//     return () => {
//       window.removeEventListener('resize', _pexresize);
//     };
//   }, []); // Empty dependency array

//   return <canvas id="canvas" ref={canvasRef} width={stgw} height={stgh}></canvas>;
// }

// export default MyCanvasAnimation;
