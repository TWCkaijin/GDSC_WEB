import React, { useState } from 'react';
import Slider from 'react-slick';
import './Courseslide.css';
import Modal from './Modal';

import { Swiper, SwiperSlide } from "swiper/types";
import {EffectCoverflow, Navigation, Pagination} from "swiper";
import 'swiper/css';
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";



function CourseSlide({ Courses  = [] }){
  const [selectedCourse, setSelectedCourse] = useState(null);
  const settings = {
    className: 'center',
    centerMode: true,
    centrePadding: '20px',
    
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true, 
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

  if (!Array.isArray(Courses)) {
    return null; 
  }


  
  return (
    <div >
      <Slider {...settings}>
        {Courses.map(Course => (
          <div key={Course.id} onClick={() => setSelectedCourse(Course)}>
            <div className='test_box'>
            <p>this is a test box</p>
            <h3>{Course.name}</h3>
            </div>
            <img src={Course.image} alt={Course.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CourseSlide;
