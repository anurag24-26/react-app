// src/MainContent.js
import React from 'react';
import './MainContent.css';
import Toolbar from './Toolbar'; // Import the Toolbar component

const MainContent = () => {
  return (
    <div className="main-content">
      <iframe
        width="1087"
        height="392"
        src="https://www.youtube.com/embed/SMKPKGW083c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <Toolbar /> {/* Add the Toolbar component below the video */}
      <div className="video-details">
        <h2>Norway AMAZING - Horizon View bath with Beautiful nature - 4k VideoHD</h2>
        <div className="video-actions">
          <button>Leave a review</button>
          <button>Like</button>
        </div>
      </div>
      <div className="additional-content">
        <div className="instructor">
          <h3>INSTRUCTOR</h3>
          <img src="path-to-image" alt="Instructor" />
          <p><strong>Rodrigo Diaz</strong></p>
          <p>Solution Architect, Lorem, Ipsum, engineer</p>
          <p>Analyst, Programmer, worker</p>
        </div>
        <div className="related-to-course">
          <h3>RELATED TO COURSE</h3>
          <p>Classroom <a href="#">show all</a></p>
          <p>Class Files <a href="#">show all</a></p>
          <p>Certificates <a href="#">show all</a></p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
