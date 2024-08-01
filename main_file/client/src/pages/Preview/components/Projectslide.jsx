import React, { useState } from 'react';
import Slider from 'react-slick';
import './Projectslide.css';
import Modal from './Modal';

import { Swiper, SwiperSlide } from "swiper/types";
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectSlide = ({ Projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [centerIndex, setCenterIndex] = useState(null);

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (target) => {
    if (!isDragging) {
      setSelectedProject(target);
    }
  };


  const settings = {
    className: 'center',
    centerMode: true,
    centrePadding: '20px',
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    draggable: true,
    afterChange: (current) => {
      setCenterIndex((current + 1)%4); // 中心元素的索引
    },
    responsive:[
      {
        breakpoint: 480,
        settings: 
        {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (!Array.isArray(Projects)) {
    return null; 
  }

  return (
    <div>   
      <Slider {...settings}>
        {Projects.map((project, index) => (
          <div key={project.id} 
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={()=>handleMouseUp(project)}
            className={index === centerIndex ? 'center-slide' : 'small-slide'}
            >
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
          </div>
        ))}
      </Slider>
      {selectedProject && <Modal target={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default ProjectSlide;
