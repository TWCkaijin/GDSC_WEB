import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination, Autoplay} from "swiper/modules";
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SlideStyle.css';


const ProjectSlide = ({ Projects = [] }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [centerIndex, setCenterIndex] = useState(0);

  /* faded slide */
  const handleSlideChange = (swiper) => {
    const slides = swiper.slides;
    const activeIndex = swiper.activeIndex;

    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.remove('swiper-slide-faded');
      } else {
        slide.classList.add('swiper-slide-faded');
      }
    });
  };
  /* faded slide */



  /* Handle null exception */
  if (!Array.isArray(Projects)) {
    return null;
  }removeEventListener
  /* Handle null exception */



  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl:'.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }}
        //autoplay={{ delay: 3000 }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 1.5,
          slideShadows: false,
        }}
        breakpoints={{
          480: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {Projects.map((project, index) => (
          <SwiperSlide key={project.id}>
            <div className="Clickable-div" onClick={() => setSelectedProject(project)}>
              <img src={project.image == "" ? 'https://via.placeholder.com/360' : project.image} alt={project.name} />
              <h3>{project.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedProject && <Modal target={selectedProject} onClose={() => setSelectedProject(null)} />}
    </div>
  );
};

export default ProjectSlide;