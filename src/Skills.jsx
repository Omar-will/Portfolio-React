import React from 'react';
import './Skills.scss';
import MyCanvasAnimation from './components/Lightning'


const Skills = () => {
  return (
      <div className="skills" id="skills">
          <h2 className="section__title">Skills</h2>

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
                  <img src="assets/img/Redux.png" className="skill-image" alt=""/>
                  <p className="skill-name">Redux</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/nodejs.png" className="skill-image" alt=""/>
                  <p className="skill-name">Node JS</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/mongo.png" className="skill-image" alt=""/>
                  <p className="skill-name">Mongo DB</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/tailwind.png" className="skill-image" alt=""/>
                  <p className="skill-name">Tailwind</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/Sass.png" className="skill-image" alt=""/>
                  <p className="skill-name">Sass</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/Sql.png" className="skill-image" alt=""/>
                  <p className="skill-name">Sql</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/Git.png" className="skill-image" alt=""/>
                  <p className="skill-name">Git</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/Php.png" className="skill-image" alt=""/>
                  <p className="skill-name">Php</p>
              </div>
              <div className="skill-card">
                  <img src="assets/img/Seo.png" className="skill-image" alt=""/>
                  <p className="skill-name">SEO</p>
              </div>
          </div>
              <MyCanvasAnimation />
      </div>
  );
}

export default Skills;
