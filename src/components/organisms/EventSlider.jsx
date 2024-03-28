
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '../../public/assets/images/hero/hero_slider_img1.png';
// import slider2 from '../../public/assets/images/hero/hero_slider_img2.png';
// import slider3 from '../../public/assets/images/hero/hero_slider_img3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import { EffectCards } from 'swiper';

import Image from 'next/image';

function EventSlider() {
  return (
    <div>
      <section className='event_slider_area position-relative'>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed='1000'
              effect={'cards'}
              grabCursor={true}
              modules={[EffectCards, Autoplay, Pagination]}
              pagination={{
                clickable: true,
              }}
              // modules={[Autoplay, Pagination]}
              className='mySwipe  swiper-slide '
            >
              <SwiperSlide className='swiper-slide'>
                <div className='event_item'>
                  <img
                    src='assets/images/event/event_slider_img1.png'
                    alt='event image'
                    className='event_img'
                  />
                  <div className='content'>
                    <div className='inner_content_area mx-auto'>
                      <h3>SHEESH MAHAL</h3>
                      <p>
                        The alluring interiors and remarkable amenities
                        surrounding the hotel provide an awe-inspiring
                        background for couples who are looking for a memorable
                        pre-wedding shoot near New Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_item'>
                  <img
                    src='assets/images/event/event_slider_img1.png'
                    alt='event image'
                    className='event_img'
                  />
                  <div className='content'>
                    <div className='inner_content_area mx-auto'>
                      <h3>SHEESH MAHAL</h3>
                      <p>
                        The alluring interiors and remarkable amenities
                        surrounding the hotel provide an awe-inspiring
                        background for couples who are looking for a memorable
                        pre-wedding shoot near New Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='swiper-slide'>
                <div className='event_item'>
                  <img
                    src='assets/images/event/event_slider_img1.png'
                    alt='event image'
                    className='event_img'
                  />
                  <div className='content'>
                    <div className='inner_content_area mx-auto'>
                      <h3>SHEESH MAHAL</h3>
                      <p>
                        The alluring interiors and remarkable amenities
                        surrounding the hotel provide an awe-inspiring
                        background for couples who are looking for a memorable
                        pre-wedding shoot near New Delhi.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}

export default EventSlider;
