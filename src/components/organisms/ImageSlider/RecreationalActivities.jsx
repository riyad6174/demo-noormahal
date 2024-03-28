import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/event/activities.png';
import slider2 from '../../../../public/assets/images/event/field.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function RecrationalSlider() {
  return (
    <div style={{ height: '100%' }}>
      <section className='slider_wrapper' style={{ height: '100%' }}>
        <Swiper
          centeredSlides={true}
        loop={true}

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
          <SwiperSlide className='swiper-slide img'>
            <Image
              width={1500}
              height={1500}
              className='img '
              src={slider2}
              alt='slider image'
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide img'>
            <Image
              width={1500}
              height={1500}
              className='img '
              src={slider1}
              alt='slider image'
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default RecrationalSlider;
