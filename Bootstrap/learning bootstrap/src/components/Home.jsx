import React from 'react';
import './Home.css';
import myPhoto from './image.png'; // Replace with your actual photo file path

function Home() {
  return (
    <section id="home" className="section">
      <div className="intro">
        <img src={myPhoto} alt="My Photo" className="my-photo" />
        <div className="intro-text">
          <h2 className="animated-text">Hi i'am sakshi Baisla</h2>
       
          <p className="sub-text" >Hello! I'm sakshi baisla, a passionate web developer with a love for creating dynamic and responsive web applications. I have experience in HTML, CSS, JavaScript, and React. I'm always eager to learn new technologies and improve my skills. Explore my portfolio to see some of my work and feel free to get in touch!</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
