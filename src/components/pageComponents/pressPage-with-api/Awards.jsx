
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
import { Autoplay, Pagination , Navigation } from 'swiper';
import Image from 'next/image';

function Awards() {
  // Responsive breakpoints
  const breakpoints = {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 2,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
      spaceBetweenSlides: 2,
    },

    1450: {
      slidesPerView: 4,
      spaceBetweenSlides: 2,
    },
  };
  return (
    <div>
      <div className=' position-relative' id='memoriesSlider'>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <Swiper
              centeredSlides={true}
              loop
              navigation
              breakpoints={breakpoints}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed='1500'
              effect='fade'
              spaceBetween={2}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination , Navigation]}
              className='mySwipe  swiper '
            >
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/event/memories_img1.png'>
                    <img
                      src='assets/images/event/memories_img1.png'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/event/memories_img3.png'>
                    <img
                      src='assets/images/event/memories_img3.png'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>

       
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/event/memories_img2.png'>
                    <img
                      src='assets/images/event/memories_img2.png'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
          
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/1.jpg'>
                    <img
                      src='assets/images/weedings/1.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/2.jpg'>
                    <img
                      src='assets/images/weedings/2.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/3.jpg'>
                    <img
                      src='assets/images/weedings/3.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/4.jpg'>
                    <img
                      src='assets/images/weedings/4.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/5.jpg'>
                    <img
                      src='assets/images/weedings/5.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/event/memories_img1.png'>
                    <img
                      src='assets/images/event/memories_img1.png'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/6.jpg'>
                    <img
                      src='assets/images/weedings/6.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_gallery_item'>
                  <a href='assets/images/weedings/10.jpg'>
                    <img
                      src='assets/images/weedings/10.jpg'
                      alt='event image'
                      className='event_img'
                    />
                  </a>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        {/* <div className='memories_prev_icon'>
          <img src='assets/icon/slider_prev_icon.png' alt='prev icon' />
        </div>
        <div className='memories_next_icon'>
          <img src='assets/icon/slider_next_icon.png' alt='prev icon' />
        </div> */}
      </div>
    </div>
  );
}

export default Awards;
