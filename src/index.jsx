import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import './main.scss';
import Header from './Header';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Services from './Services';
import Work from './Work';
import Contact from './Contact';
import Footer from './Footer';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client'; 

const App = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2500,
      delay: 400,
      reset: true,
    });
    
    sr.reveal(`.nav__menu`, {
      delay: 100,
      scale: 0.1,
      origin: "bottom",
      distance: "300px",
    });
    
    sr.reveal(`.home__data`);
    sr.reveal(`.home__handle`, {
      delay: 100,
    });
    
    sr.reveal(`.home__social, .home__scroll`, {
      delay: 100,
      origin: "bottom",
    });
    
    sr.reveal(`.about__img`, {
      delay: 100,
      origin: "left",
      scale: 0.9,
      distance: "30px",
    });
    
    sr.reveal(`.about__data, .about__description, .about__button-contact`, {
      delay: 100,
      scale: 0.9,
      origin: "right",
      distance: "30px",
    });
    
    sr.reveal(`.skills__content`, {
      delay: 100,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
    
    sr.reveal(`.services__title, .services__button, .work__button, .work__img` ,  {
      delay: 100,
      scale: 0.9,
      origin: "top",
      distance: "30px",
    });
    
    sr.reveal(`.skill-card, .work__card`, {
      delay: 100,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
    
    sr.reveal(`.testimonial__container`, {
      delay: 100,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });
    
    sr.reveal(`.contact__info, .contact__title-info`, {
      delay: 100,
      scale: 0.9,
      origin: "left",
      distance: "30px",
    });
    
    sr.reveal(`.contact__form, .contact__form-div, .contact__title-form`, {
      delay: 100,
      scale: 0.9,
      origin: "right",
      distance: "30px",
    });
    
    sr.reveal(`.footer, .footer__container , #up, #down, #left, #right`,  {
      delay: 100,
      scale: 0.9,
      origin: "bottom",
      distance: "30px",
    });

  }, []);

  return (
    <React.StrictMode>
      <Header />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      <Contact />
      <Footer />
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root')); 
root.render(<App />);
reportWebVitals();
