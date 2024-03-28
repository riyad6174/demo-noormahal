import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/home/2.ExperiencesExperiences1Main.jpg';
import slider2 from '../../../../public/assets/images/home/2.ExperiencesExperiences2.jpg';
import slider3 from '../../../../public/assets/images/home/Experiences3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function ExperienceSlider() {
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
          className=' swiper-slide '
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
          <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className='hero_item '
              src={slider3}
              alt='slider image'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default ExperienceSlider;
