import React from 'react';
import '../Scss/Work.scss';
import jsonData from '../Sections.json';
import MyParticleComponent from '../components/Particles'

function WorkSection() {
  const { work } = jsonData;

  return (
    <section className="work section" id="work">
      <h2 className="section__title">Ce que je propose</h2>
      <div className="work__container container grid">
        {work.map((section, index) => (
          <div className="work__card mix web" key={index}>
            <h3 className="work__title">{section.offer.title}</h3>
            <p className="services__modal-info">{section.offer.description}</p>
            <div className="cube">
              <div className="top"></div>
              <div>
                <span style={{'--i': 0}}></span>
                <span style={{'--i': 1}}></span>
                <span style={{'--i': 2}}></span>
                <span style={{'--i': 3}}></span>
              </div>
            </div>
            <div className="cubeDouble">
              <div className="right"></div>
              <div>
                <span style={{'--i': 0}}></span>
                <span style={{'--i': 1}}></span>
                <span style={{'--i': 2}}></span>
                <span style={{'--i': 3}}></span>
              </div>
            </div>
            <div className="cubeThree">
              <div className="left"></div>
              <div>
                <span style={{'--i': 0}}></span>
                <span style={{'--i': 1}}></span>
                <span style={{'--i': 2}}></span>
                <span style={{'--i': 3}}></span>
              </div>
            </div>
          </div>
        ))}
        {work.map((section, index) => (
          <div className="work__card mix web" key={index}>
            <h3 className="work__title">{section.webExperiences.title}</h3>
            <ul className="services__modal-list">
              {section.webExperiences.items.map((item, itemIndex) => (
                <li className="services__modal-item" key={itemIndex}>
                  <i className='bx bx-check-circle'></i>
                  <p className="services__modal-info">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {work.map((section, index) => (
          <div className="work__card mix web" key={index}>
            <h3 className="work__title">{section.studies.title}</h3>
            <div className="collapse-content">
              <p className="services__modal-info">{section.studies.description}</p>
            </div>
          </div>
        ))}
        <MyParticleComponent />
      </div>
    </section>
  );
}

export default WorkSection;
