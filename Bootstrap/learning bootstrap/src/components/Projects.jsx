import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>Hand gesture tracking and recognition system</h3>
          <p>A Hand Gesture Tracking and Recognition System leverages computer vision and machine learning to monitor and interpret hand movements in real-time. It accurately tracks hand positions and recognizes specific gestures for intuitive interaction with digital devices. Applications include augmented reality, sign language translation, and touchless interface controls</p>
          <a href="https://github.com/sakshibaisla12/Hand-gesture-tracking-and-recognition-system " target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>Data science project</h3>
          <p>In this data science project, I conducted an exploratory data analysis on a dataset using the Plotly library. I created interactive visualizations, including scatter plots, bar charts, and heatmaps, to uncover patterns and correlations within the data. These visualizations provided valuable insights into key metrics and relationships, enhancing the overall understanding of the dataset. Plotly's interactivity allowed for a more engaging and thorough exploration of the data.</p>
          <a href="https://github.com/sakshibaisla12/Data-science-project-1" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
        <div className="project">
          <h3>BBC Clone</h3>
          <p>In the BBC clone project, I built a responsive web application replicating the BBC news website's design and functionality. It features dynamic content fetching, news categorization, and multimedia integration using HTML, CSS, JavaScript, and a backend framework. The project includes user authentication and a seamless user interface. This clone provides a comprehensive news browsing experience similar to the BBC site.</p>
          <a href="https://github.com/sakshibaisla12/bbc-clone" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
