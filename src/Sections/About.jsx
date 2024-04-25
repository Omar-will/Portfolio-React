import React from 'react';
import '../Scss/About.scss';
import aboutData from '../Sections.json'; 

const About = () => {
  
  const { title, image, experience, completedProjects, support, description, contactLink } = aboutData.about;

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{title}</h2>
      <div className="about__container container grid">
        <img src={image} alt="ordinateur" className="about__img" width="200" height="200" loading="lazy" />
        <div className="about__data">
          <div className="about__info">
            <div className="about__box">
              <i className='bx bx-award about__icon'></i>
              <h3 className="about__title">{experience.title}</h3>
              <span className="about__subtitle">{experience.years}</span>
            </div>
            <div className="about__box">
              <i className='bx bx-briefcase-alt about__icon'></i>
              <h3 className="about__title">{completedProjects.title}</h3>
              <span className="about__subtitle">{completedProjects.count}</span>
            </div>
            <div className="about__box">
              <i className='bx bx-support about__icon'></i>
              <h3 className="about__title">{support.title}</h3>
              <span className="about__subtitle">{support.availability}</span>
            </div>
          </div>

          <p className="about__description">
            {description}
          </p>

          <a href={contactLink} className="button about__button-contact">Contacter moi</a>
        </div>
      </div>
    </section>
  );
};

export default About;
