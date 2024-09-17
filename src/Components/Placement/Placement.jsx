import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './Placement.css';

// import required modules
import { EffectCards } from 'swiper/modules';

const Placement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/img/placement1.jpeg",
    "/img/placement2.jpeg",
    "/img/placement3.jpeg",
    "/img/placement4.jpeg",
    "/img/placement5.jpeg",
    "/img/placement6.jpeg",
    "/img/placement7.jpeg",
    "/img/placement8.jpeg",
    "/img/placement9.jpeg"
  ];

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="col-md-5 col-sm-12 col-12">
        <div className="sldd">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="placement-img-component">
                  <img
                    src={images[(currentIndex + index) % images.length]}
                    alt=""
                    style={{ cursor: 'pointer' }}
                  />
                  {/* Arrow Buttons */}
                  <div className="navigation-buttons">
                    <button onClick={handlePrevClick} className="arrow-button">
                      <ArrowBackIosNewIcon />{/* Left Arrow */}
                    </button>
                    <button onClick={handleNextClick} className="arrow-button">
                      <ArrowForwardIosIcon /> {/* Right Arrow */}
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="col-md-7 col-sm-12 col-12">
        <div className="arintro">
          <h4>Welcome to <b>AR Square </b>IT Institute!</h4>
          <p>Empowering the next generation with cutting-edge technology and language skills. Our expert trainers and state-of-the-art facilities ensure you gain the practical experience needed to excel in today’s competitive world. Join us to boost your career prospects and <mark> achieve your dreams! </mark></p>

          <h6>Why Choose Us?</h6>
          <ul>
            <li>Advanced Technology Training</li>
            <li>Comprehensive Language Courses</li>
            <li>Experienced and Professional Instructors</li>
            <li>Collaboration with Big IT companies</li>
            <li>100% Placement Assistance</li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default Placement;
