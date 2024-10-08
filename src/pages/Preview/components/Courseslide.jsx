import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCoverflow, Navigation, Pagination, Autoplay} from "swiper/modules";

import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SlideStyle.css';



const CourseSlide = ({ Courses = [] }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);
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
  if (!Array.isArray(Courses)) {
    return null;
  }removeEventListener;
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
        {Courses.map((course,index) => (
          <SwiperSlide key={course.id}>
            <div className="Clickable-div" onClick={() => setSelectedCourse(course)}>
              <img src={course.image == "" ? 'https://via.placeholder.com/360' : course.image} alt={course.name} />
              <h3>{course.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {selectedCourse && <Modal target={selectedCourse} onClose={() => setSelectedCourse(null)} />}
    </div>
  );
};

export default CourseSlide;