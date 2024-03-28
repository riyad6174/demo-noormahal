import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/home/spa_1.jpg';
import slider2 from '../../../../public/assets/images/home/spa_2.jpg';
// import slider3 from '../../../../public/assets/images/home/3.Experiences-Experiences2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function SpaSlider() {
  return (
    <div style={{ height: '100%' }}>
      <section className='slider_wrapper' style={{ height: '100%' }}>
        <Swiper
        loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            watchOverflow: true,

          }}
          speed='1500'
          effect='fade'
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Autoplay, Pagination]}
          className='mySwipe  swiper-slide '
        >
          <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className='hero_item '
              src={slider2}
              alt='slider image'
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className='hero_item '
              src={slider1}
              alt='slider image'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default SpaSlider;
