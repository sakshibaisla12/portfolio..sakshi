import React from 'react';
import './Skills.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaNodeJs, FaWordpress } from 'react-icons/fa';


function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-list">
        <div className="skill">
          <FaHtml5 className="skill-icon" />
          <span>HTML5</span>
        </div>
        <div className="skill">
          <FaCss3Alt className="skill-icon" />
          <span>CSS3</span>
        </div>
        <div className="skill">
          <FaJsSquare className="skill-icon" />
          <span>JavaScript</span>
        </div>
        <div className="skill">
          <FaBootstrap className="skill-icon" />
          <span>Bootstrap</span>
        </div>
        <div className="skill">
          <FaReact className="skill-icon" />
          <span>ReactJS</span>
        </div>
        
        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <span>Node.js</span>
        </div>
        <div className="skill">
          <FaWordpress className="skill-icon" />
          <span>WordPress</span>
        </div>
      
       
      </div>
      <div className="resume-button" style={{'margin-top': '4cm'}}>
        <a href="https://drive.google.com/file/d/1QFW5cyo-lMoZ-Op9waPQjMFdeGtuv7tn/view" target="_blank" rel="noopener noreferrer" className="resume-link">
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Skills;
