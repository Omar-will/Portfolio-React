import React from 'react';
import './Home.scss';


function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">Bonjour, Je suis</span>
          <h2>Omar Bengoudifa</h2>
          <h3 className="home__education">Développeur Frontend</h3>

          <div className="home__button">
            <a download="" href="assets/pdf/mon%20cv.pdf" className="button button--ghost">↩
              Télecharger CV
            </a>

            <a href="#about" className="button">À propos</a>
          </div>
        </div>

        <div className="home__handle">
        <img src="assets/img/perfil-min.webp" alt="Ordinateur" className="home__img" width="200" height="200" loading="lazy" />
        </div>

        <div className="home__social">
          <a href="https://www.linkedin.com/in/omar-bengoudifa-59a147151/" target="_blank" rel="noreferrer" className="home__social-link" aria-label="mon compte linkedin">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/Omar-will" target="_blank" rel="noreferrer" className="home__social-link" aria-label="Mon compte github">
            <i className='bx bxl-github'></i>
          </a>
        </div>

        <a href="#about" className="home__scroll">
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className="home__scroll-name">scroller</span>
        </a>
      </div>
    </section>
  );
}

export default Home;