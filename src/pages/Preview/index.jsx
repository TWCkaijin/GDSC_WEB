// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import {getDoc, doc} from "firebase/firestore";
import { db } from "../../config/firebase";

import ProjectSlide from './components/Projectslide';
import Courselside from './components/Courseslide';
import './Preview.css';

function Preview() {
  const [clubName, setClubName] = useState('Cyberpunk Club');
  const [clubYear, setClubYear] = useState('2024');
  const [projects, setProjects] = useState([]);
  const [courses, setCourses] = useState([]);


	/* Get Firestore public info*/
	const getClubInfo = async() => {
		const currentmonth = new Date().getMonth()+1;
		const currentyear = new Date().getFullYear();
		const formattedYear = `${currentmonth>8 ? currentyear:currentyear}`;

		const docSnap = await getDoc(doc(db, "Clubstatus", formattedYear));
    const data = docSnap.data();
    setClubName(data.club_name);
    setClubYear(formattedYear);
    setCourses(data.course);
    setProjects(data.project_info);

	}
  /* Get Firestore public info*/


  useEffect(() => {
    getClubInfo();
  }, []);


  
  return (
    <div className="preview-body">
      <div className="Slider-container">
        <h2 className='preview-course-title'>Courses</h2>
          <Courselside Courses={courses} />
      </div>
      <div className="Slider-container">
        <h2 className='preview-project-title'>Projects</h2>
          <ProjectSlide Projects={projects} />
      </div>
    </div>
  );
};

export default Preview;
