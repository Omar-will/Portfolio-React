import React from 'react';
import './Work.scss';

function WorkSection() {
  return (
    <section className="work section" id="work">
      <h2 className="section__title">Ce que je propose</h2>
      <div className="work__container container grid">
        <div className="work__card mix web">
          <h3 className="work__title">Mon offre</h3>
          <p className="services__modal-info">
            J'excelle dans la conception et le développement de sites web en alliant un sens aigu de la créativité à une approche pragmatique. Mon objectif est de créer des expériences en ligne qui transcendent les attentes, tout en étant solidement ancrées dans les besoins spécifiques de mes clients. Mon engagement à rester à l'affût des dernières tendances et évolutions du marché me permet de proposer des solutions à la fois novatrices et en phase avec le contexte actuel.
          </p>
        </div>

        <div className="work__card mix web">
          <h3 className="work__title">Expériences Web</h3>
          <ul className="services__modal-list">
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Je développe des interfaces utilisateurs.
              </p>
            </li>
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Développement de pages Web.
              </p>
            </li>
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Je crée les interactions des éléments UX.
              </p>
            </li>
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Je positionne le nom de votre entreprise.
              </p>
            </li>
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Utilisation avancée de Redux pour gérer l'état de l'application.
              </p>
            </li>
            <li className="services__modal-item">
              <i className='bx bx-check-circle'></i>
              <p className="services__modal-info">
                Capable de créer des tests unitaires pour garantir la qualité du code et des fonctionnalités.
              </p>
            </li>
          </ul>
        </div>

        <div className="work__card mix web">
          <h3 className="work__title">Études</h3>
          <div className="collapse-content">
            <p className="services__modal-info">
              Pendant ma formation chez OpenClassroom, j'ai acquis une expertise complète dans le domaine du développement web, en me concentrant sur les technologies HTML, CSS, React.js, et Redux pour créer des sites web de haute qualité. J'ai également acquis des compétences essentielles en optimisation de sites web, tests unitaires, débogage, gestion des routes à l'aide de Swagger, et bien d'autres aspects qui me permettent de créer des solutions web efficaces et robustes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
