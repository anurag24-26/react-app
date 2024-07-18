import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="instructor">
        <h3>INSTRUCTOR</h3>
        <p>Rodrigo Diaz</p>
        <p>Solution Architect, Lorem, Ipsum, engineer</p>
        <p>Analyst, Programmer, worker</p>
      </div>
      <div className="related-to-course">
        <h3>RELATED TO COURSE</h3>
        <p>Classroom show all</p>
        <p>Class Files show all</p>
        <p>Certificates show all</p>
      </div>
    </footer>
  );
};

export default Footer;
