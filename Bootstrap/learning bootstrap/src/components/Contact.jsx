import React from 'react';
import './Contact.css';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="section">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          <a href="baislasakshi713@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="contact-icon" />
            Email
          </a>
        </p>
        <p>
          <a href="https://github.com/sakshibaisla12" target="_blank" rel="noopener noreferrer">
            <FaGithub className="contact-icon" />
            GitHub
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/sakshi-baisla-385690252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            LinkedIn
          </a>
        </p>
        <p>
          <a href="https://www.linkedin.com/in/sakshi-baisla-385690252/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="contact-icon" />
            Leetcode 
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;
