import React from 'react';
import '../Scss/Home.scss';
import ConfettiButton from '../components/ConfettiButton';
import homeData from '../Sections.json';

function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__data">
          <span className="home__greeting">{homeData.greeting}</span>
          <h2>{homeData.name}</h2>
          <h3 className="home__education">{homeData.title}</h3>

          <div className="button-wrapper">
            <a download="" href={homeData.cvLink} className="confetti-button">↩ Télécharger CV</a>
            <div className="home__button">
              <a href="#about" className="button">À propos</a>
            </div>
          </div>
        </div>

        <div className="home__handle">
          <img src="assets/img/moi.webp" alt="Ordinateur" className="home__img" width="200" height="200" />
        </div>

        <div className="home__social">
          {homeData.socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noreferrer" className="home__social-link" aria-label={link.name}>
              <i className={link.iconClass}></i>
            </a>
          ))}
        </div>

        <a href="#about" className="home__scroll">
          <i className='bx bx-mouse home__scroll-icon'></i>
          <span className="home__scroll-name">scroller</span>
        </a>
      </div>

      <ConfettiButton />
    </section>
  );
}

export default Home;
