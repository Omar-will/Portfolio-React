import React, { useEffect } from 'react';
import '../Scss/Services.scss';
import Game from '../components/ShootGame'

const ProjectSection = () => {
    useEffect(() => {
        const modalViews = document.querySelectorAll(".services__modal");
        const modalBtns = document.querySelectorAll(".services__button");
        const modalClose = document.querySelectorAll(".services__modal-close");
    
        let modal = function (modalClick) {
          modalViews[modalClick].classList.add("active-modal");
        };
    
        modalBtns.forEach((mb, i) => {
          mb.addEventListener("click", () => {
            modal(i);
          });
        });
    
        modalClose.forEach((mc) => {
          mc.addEventListener("click", () => {
            modalViews.forEach((mv) => {
              mv.classList.remove("active-modal");
            });
          });
        });
        return () => {
          modalBtns.forEach((mb, i) => {
            mb.removeEventListener("click", () => {
              modal(i);
            });
          });
    
          modalClose.forEach((mc) => {
            mc.removeEventListener("click", () => {
              modalViews.forEach((mv) => {
                mv.classList.remove("active-modal");
              });
            });
          });
        };
      }, []);
  return (
    <section className="services section" id="project">
      <h2 className="section__title">Conception de site web</h2>
      <div className="services__container container grid">
        {/* Carte */}
        <div className="services__card">
          <div className="serv">
            <h3 className="services__title">Booki</h3>
            <img src="assets/img/work2.webp" alt="Page d'accueil du site Web de l'entreprise" className="work__img" loading="lazy" />
            <a href="https://omar-will.github.io/Booki-P3/" className="work__button" target="_blank" rel="noreferrer">
              Demo <i className='bx bx-right-arrow work__icon'></i>
            </a>
            <a href="https://github.com/Omar-will/Booki-P3" className="work__button" target="_blank" rel="noreferrer">
              Code <i className='bx bx-right-arrow work__icon'></i>
            </a>
            <span className="services__button">
              Description<i className='bx bx-right-arrow services__icon'></i>
            </span>
          </div>
          {/* Modal */}
          <div className="services__modal">
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close'></i>
              <h3 className="services__modal-title">Créez la page d'accueil d'une agence de voyage avec HTML & CSS</h3>
              <p className="services__modal-description">
                L'objectif de l'entreprise est de créer un site Internet qui permettra aux utilisateurs de rechercher et de réserver des hébergements et des activités dans la ville de leur choix. Ce projet vise à offrir une plateforme conviviale aux usagers, facilitant ainsi la découverte et la planification de voyages et d'expériences dans diverses destinations.
              </p>
              <ul className="services__modal-list">
                <li className="services__modal-item">
                  <i className='bx bx-check-circle'></i>
                  <p className="services__modal-info">
                    une page index html.
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check-circle'></i>
                  <p className="services__modal-info">
                    un dossier pour les assets (images).
                  </p>
                </li>
                <li className="services__modal-item">
                  <i className='bx bx-check-circle'></i>
                  <p className="services__modal-info">
                    un dossier “css” contenant un fichier “style.css” 
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services__card">
    <div className="serv">
        
        <h3 className="services__title">Oh my food</h3>
        <img src="assets/img/work1.webp" alt="Logo de l'entreprise XYZ" className="work__img" loading="lazy" />
        <a href="https://omar-will.github.io/Ohmyfood/" className="work__button" target="_blank" rel="noreferrer">
            Demo <i className='bx bx-right-arrow work__icon'></i>
        </a>
        <a href="https://github.com/Omar-will/Ohmyfood" className="work__button" target="_blank" rel="noreferrer">
            Code <i className='bx bx-right-arrow work__icon'></i>
        </a>
        <span className="services__button">
            Description<i className='bx bx-right-arrow services__icon'></i>
        </span>
    </div>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>
            <h3 className="services__modal-title">Améliorez l'interface d'un site mobile avec des animations CSS</h3>
            <p className="services__modal-description">
                Objectif: Développer une plateforme en priorisant l'expérience mobile, permettant aux utilisateurs de découvrir et réserver des menus dans des restaurants gastronomiques tout en leur offrant la possibilité de composer leur repas à l'avance.
            </p>
            
            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        une page index html.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        un dossier pour les assets (fichier CSS, images).
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        un dossier pour le SASS.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        un dossier 'restaurants' pour y mettre les pages de restaurants.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Portfolio architecte</h3>
    <img src="assets/img/work3.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />
    <a href="https://github.com/Omar-will/Portfolio-architecte-sophie-bluel-" className="work__button" target="_blank" rel="noreferrer">
        Code <i className='bx bx-right-arrow work__icon'></i>
    </a>
    <span className="services__button">
        Description<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Créez une page web dynamique avec JavaScript</h3>

            <p className="services__modal-description">
                Assigné en tant que développeur front-end sur la conception du site portfolio d'une architecte d'intérieur. mon rôle était de collaborer avec l'équipe existante pour créer un site web qui mettait en valeur les créations et les compétences de l'architecte d'intérieur. Ce site portfolio sera conçu pour présenter de manière élégante et visuellement attrayante les projets de design d'intérieur de l'architecte.
            </p>

            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Gérer les appels à l’API et récupérer les données via Swagger
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        2 pages index html.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        2 fichiers JavaScript
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        un dossier pour les assets (fichier CSS, images).
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Installation de Node.js.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Kasa</h3>
    <img src="assets/img/work4.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />

    <a href="https://github.com/Omar-will/Kasa" className="work__button" target="_blank" rel="noreferrer">
        Code <i className='bx bx-right-arrow work__icon'></i>
    </a>
    <span className="services__button">
        Description<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Créez une application web de location immobilière avec React</h3>

            <p className="services__modal-description">
                Kasa, un acteur majeur dans le secteur de la location d'appartements entre particuliers en France, possède une expérience de près de 10 ans dans ce domaine. Avec une impressionnante moyenne de plus de 500 nouvelles annonces mises en ligne quotidiennement
            </p>

            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Application React.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        React Router.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Create React App (CRA).
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Un dossier pour le SASS.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Nina Carducci</h3>
    <img src="assets/img/work7.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />

    <a href="https://github.com/Omar-will/Ninacarducci" className="work__button" target="_blank" rel="noreferrer">
        Code <i className='bx bx-right-arrow work__icon'></i>
    </a>
    <span className="services__button">
        Description<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Optimisez le référencement d'un site de photographe</h3>

            <p className="services__modal-description">
                le site de Nina Carducci, une photographe professionnelle. Mon objectif était d'améliorer la performance de son site en mettant en œuvre les actions, Optimisation des images, Optimisation du code et de la structure.
            </p>

            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Faire une optimisation globale du site tant sur les performances que sur le SEO.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Mettre en place le référencement local en utilisant Schema.org.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Ajouter les metas pour les réseaux sociaux.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Faire les modifications liées à l’accessibilité du site.
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Produire un rapport d’optimisation présentant toutes vos actions et leur impact.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">724 Events</h3>
    <img src="assets/img/work6.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />

    <a href="https://github.com/Omar-will/724-Events" className="work__button" target="_blank" rel="noreferrer">
        Code <i className='bx bx-right-arrow work__icon'></i>
    </a>
    <span className="services__button">
        Description<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Débuggez le site d'une agence d'événementiel</h3>

            <p className="services__modal-description">
                L'agence 724events prévoit de lancer la nouvelle version de son site vitrine événementiel, qui est conçu comme une page unique (one-page). Ma mission consistai à résoudre les problèmes et les bugs restants sur le site afin de le rendre pleinement opérationnel.
            </p>

            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        installation Node.js
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Installation et configuration de React Dev Tools
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        React.js
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Tests unitaires
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Tenir à jour un cahier de recette 
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Argent Bank</h3>
    <img src="assets/img/work5.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />

    <a href="https://github.com/Omar-will/Argentbank-" className="work__button" target="_blank" rel="noreferrer">
        Code <i className='bx bx-right-arrow work__icon'></i>
    </a>
    <span className="services__button">
        Description<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Implémentez le front-end d'une application bancaire avec React</h3>

            <p className="services__modal-description">
                Argent Bank, une nouvelle banque en ligne, Utiliser Redux pour gérer le state de l'ensemble de l'application.
                Ce que doit faire l’application :
                L'utilisateur peut visiter la page d'accueil.
                L'utilisateur peut se connecter au système et se déconnecter.
                L'utilisateur peut voir les informations de son propre profil qu'après s'être connecté.
                L’utilisateur peut modifier son pseudo.
            </p>

            <ul className="services__modal-list">
                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        installation Node.js
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Installation de Mongodb
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        React.js
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Create React App (CRA).
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Redux 
                    </p>
                </li>

                <li className="services__modal-item">
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">
                        Fichier Sass.
                    </p>
                </li>
            </ul>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Arcade Game</h3>
    <img src="assets/img/Shoot.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />
    <span className="services__button">
        Démo<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>

            <h3 className="services__modal-title">Jeu arcade de tir</h3>

            <Game/>
        </div>
    </div>
</div>
<div className="services__card">
    <h3 className="services__title">Sites de démonstration</h3>
    <img src="assets/img/perfil-min.webp" alt="Logo de l'entreprise X" className="work__img" loading="lazy" />
    <span className="services__button">
        Vidéo<i className='bx bx-right-arrow services__icon'></i>
    </span>

    <div className="services__modal">
        <div className="services__modal-content">
            <i className='bx bx-x services__modal-close'></i>
                    
            <h3 className="services__modal-title">Démo</h3>
                <a href="assets/vidéos/Trailer.mp4" target="_blank" rel="noopener noreferrer">
                    Regarder la vidéo de démo
                </a>

        </div>
    </div>
</div>
      </div>
    </section>
  );
};

export default ProjectSection;
