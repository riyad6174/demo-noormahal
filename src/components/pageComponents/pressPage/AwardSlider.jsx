import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '../../public/assets/images/hero/hero_slider_img1.png';
// import slider2 from '../../public/assets/images/hero/hero_slider_img2.png';
// import slider3 from '../../public/assets/images/hero/hero_slider_img3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';

function AwardSlider() {
  // Responsive breakpoints
  const breakpoints = {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 2,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 3,
      spaceBetweenSlides: 2,
    },

    1450: {
      slidesPerView: 4,
      spaceBetweenSlides: 2,
    },
    1950: {
      slidesPerView: 4,
      spaceBetweenSlides: 2,
    },
  };
  return (
    <div>
      <div
        className='container mb-4 memories_slider position-relative'
        id='memoriesSlider'
      >
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <Swiper
              loop={true}
              // centeredSlides={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
                watchOverflow: true,
              }}
              breakpoints={breakpoints}
              speed='1500'
              effect='fade'
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              className='mySwipe  swiper-slide '
            >
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/award1.jpg'>
                    <img
                      src='assets/images/awards/award1.jpg'
                      alt='event image'
                      className='border border-5 border-light'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/award2.jpg'>
                    <img
                      src='assets/images/awards/award2.jpg'
                      alt='event image'
                      className='border border-5 border-light'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/award3.jpg'>
                    <img
                      src='assets/images/awards/award3.jpg'
                      alt='event image'
                      className='border border-5 border-light'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/award4.jpg'>
                    <img
                      src='assets/images/awards/award4.jpg'
                      alt='event image'
                      className='border border-5 border-light shadow-md'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/wow.jpg'>
                    <img
                      src='assets/images/awards/wow.jpg'
                      alt='event image'
                      className='border border-5 border-light shadow-md'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className=''>
                <div className='award_gallery_item'>
                  <a href='assets/images/awards/wow1.jpg'>
                    <img
                      src='assets/images/awards/wow1.jpg'
                      alt='event image'
                      className='border border-5 border-light shadow-md'
                    />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AwardSlider;
