import React from 'react';
import './Skills.scss';

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Mon Expérience</h2>

      <div className="skills__content">
        <h3 className="skills__title">Frontend Développement</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">HTML</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">CSS/SCSS</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Javascript</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Redux</h3>
                <span className="skills__level">intermédiaire</span>
              </div>
            </div>
            
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>
              
              <div>
                <h3 className="skills__name">Git</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>
            
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>
              
              <div>
                <h3 className="skills__name">React</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="skills__content">
        <h3 className="skills__title">Autres notions du développement</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Node JS</h3>
                <span className="skills__level">Intermédiaire</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Mongodb</h3>
                <span className="skills__level">Intermédiaire</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Swagger</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Postman</h3>
                <span className="skills__level">Intermédiaire</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Github</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

            <div className="skills__data">
              <i className='bx bxs-badge-check'></i>

              <div>
                <h3 className="skills__name">Lighthouse</h3>
                <span className="skills__level">Avancée</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
