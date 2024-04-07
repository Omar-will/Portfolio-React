import React from 'react';
import './About.scss';



const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">Qui Suis-Je ?</h2>
      <div className="about__container container grid">
        <img src="assets/img/about-min.webp" alt="ordinateur" className="about__img" width="200" height="200" loading="lazy" />
        {/* <img src="assets/img/palm.png" alt="palm" className="about__img" width="200" height="200" loading="lazy" /> */}
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">Experience</h3>
              <span className="about__subtitle">9 mois de formation chez OpenClassRoom</span>
            </div>
            <div className="about__box">
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">Complété</h3>
              <span className="about__subtitle">8+ Projets fictifs</span>
            </div>
            <div className="about__box">
              <i className='bx bx-support about__icon'></i>
              <h3 className="about__title">Support</h3>
              <span className="about__subtitle">Disponibilité 24/7</span>
            </div>
          </div>

          <p className="about__description">
            Passionné depuis toujours par un large éventail de domaines, l'informatique occupe une place centrale dans ma vie. Le développement web est une passion.
            Mon parcours d'apprentissage a déjà englobé des technologies telles que HTML, CSS, JavaScript et React, et j'ai hâte de creuser davantage mes compétences et d'explorer de nouveaux horizons. Je suis toujours avide de connaissances et de découvertes.
          </p>

          <a href="#contact" className="button about__button-contact">Contacter moi</a>
        </div>
      </div>
    </section>
  );
};

export default About;
