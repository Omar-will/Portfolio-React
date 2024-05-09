import React from 'react';
import '../Scss/Skills.scss';
import skillsData from '../Sections.json';


const Skills = () => {

  const skills = skillsData.skills || [];

  return (
    <div className="skills" id="skills">
      <h2 className="section__title">Skills</h2>
       
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.image} className="skill-image" alt=""/>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
