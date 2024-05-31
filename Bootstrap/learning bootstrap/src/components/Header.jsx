import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  const [bgColor, setBgColor] = useState('#333');

  useEffect(() => {
    const colors = ['#333', '#555'];
    let colorIndex = 0;
    const interval = setInterval(() => {
      setBgColor(colors[colorIndex]);
      colorIndex = (colorIndex + 1) % colors.length;
    }, 5000); // Change color every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header style={{ backgroundColor: bgColor }}>
      <h1 >Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#Skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
