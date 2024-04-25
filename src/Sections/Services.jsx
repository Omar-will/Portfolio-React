import React, { useEffect, useState } from 'react';
import '../Scss/Services.scss';
import projectsData from '../Sections.json';
// import Game from '../components/ShootGame'
import ScrollReveal from 'scrollreveal';

const ProjectSection = () => {
    const [projects, setProjects] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
  
    useEffect(() => {
      setProjects(projectsData.projects);

      ScrollReveal().reveal('.services__card', {
        delay: 100,
        scale: 0.9,
        origin: "bottom",
        distance: "30px",
      });

    }, []);
  
    const openModal = (project) => {
      setSelectedProject(project);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <section className="services section" id="project">
        <h2 className="section__title">Conception de site web</h2>
        <div className="services__container container grid">
          {projects.map((project, index) => (
            <div className="services__card" key={index}>
              <div className="serv">
                <h3 className="services__title">{project.title}</h3>
                <img src={project.image} alt={`Logo de ${project.title}`} className="work__img" loading="lazy" />
                <a href={project.demoLink} className="work__button" target="_blank" rel="noreferrer">
                  Demo <i className='bx bx-right-arrow work__icon'></i>
                </a>
                <a href={project.codeLink} className="work__button" target="_blank" rel="noreferrer">
                  Code <i className='bx bx-right-arrow work__icon'></i>
                </a>
                <span className="services__button" onClick={() => openModal(project)}>
                  Description<i className='bx bx-right-arrow services__icon'></i>
                </span>
              </div>
            </div>
          ))}
        </div>
  
        {selectedProject && (
          <div className={`services__modal ${isModalOpen ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <i className='bx bx-x services__modal-close' onClick={closeModal}></i>
              <h3 className="services__modal-title">{selectedProject.description}</h3>
              <p className="services__modal-description">{selectedProject.longDescription}</p>
              <ul className="services__modal-list">
                {selectedProject.details.map((detail, index) => (
                  <li className="services__modal-item" key={index}>
                    <i className='bx bx-check-circle'></i>
                    <p className="services__modal-info">{detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    );
  };
  
  export default ProjectSection;
  

