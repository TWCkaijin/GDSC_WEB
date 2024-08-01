// src/pages/Home.js
import React, { useState, useEffect } from 'react';

import ProjectSlide from './components/Projectslide';
import Courselside from './components/Courseslide';
import './Preview.css';

function Preview() {
  const [clubName, setClubName] = useState('Cyberpunk Club');
  const [clubYear, setClubYear] = useState('2024');
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);





  useEffect(() => {
    setClubName('Cyberpunk Club');
    setClubYear('2024');
    setProjects([
      { id: 1, name: 'Project 1', image: 'https://via.placeholder.com/360', description: 'Project 1 Description' },
      { id: 2, name: 'Project 2', image: 'https://via.placeholder.com/360', description: 'Project 2 Description' },
      { id: 3, name: 'Project 3', image: 'https://via.placeholder.com/360', description: 'Project 3 Description' },
    ]);
    setCourses([
      { id: 3, name: 'Course  3', image: 'https://via.placeholder.com/360', description: 'Course 3 Description' },
      { id: 4, name: 'Course  4', image: 'https://via.placeholder.com/360', description: 'Course 4 Description' },
      { id: 5, name: 'Course  5', image: 'https://via.placeholder.com/360', description: 'Course 5 Description' },
    ]);

  }, []);


  
  return (
    <div className="home">
      <div className="club-info">
      </div>
        <div className="Slider-container">
          <h2>Courses</h2>
            <Courselside Courses={courses} />
        </div>
        <div className="Slider-container">
          <h2>Projects</h2>
            <ProjectSlide Projects={projects} />
        </div>
    </div>
  );
};

export default Preview;
