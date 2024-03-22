import React from 'react';
import './Skills.scss';

const Skills = () => {
  return (
      <div className="skills" id="skills">
          <h2 className="title">Skills</h2>

          <div className="skills-container">
              <div className="skill-card">
                  <img src="assets/img/html.png" className="skill-image" alt=""/>
                  <p className="skill-name">HTML</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/css.png" className="skill-image" alt=""/>
                  <p className="skill-name">CSS</p>
              </div>
              <div className="skill-card">
                  <img src="/assets/img/javascript.png" className="skill-image" alt=""/>
                  <p className="skill-name">JavaScript</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/reactjs.png" className="skill-image" alt=""/>
                  <p className="skill-name">React JS</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/nodejs.png" className="skill-image" alt=""/>
                  <p className="skill-name">Node JS</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/tailwind.png" className="skill-image" alt=""/>
                  <p className="skill-name">Tailwind</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/mongo.png" className="skill-image" alt=""/>
                  <p className="skill-name">Mongo DB</p>
              </div>
          </div>
      </div>
  );
}

export default Skills;
