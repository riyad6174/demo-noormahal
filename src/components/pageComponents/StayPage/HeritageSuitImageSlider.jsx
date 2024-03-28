import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/stay/5.HeritageSuite.jpg';
import slider2 from '../../../../public/assets/images/stay/heritageSuite1.jpg';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function HeritageSuitImageSlider() {
  return (
    <div >
      <section className='slider_wrapper' >
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
              src={slider1}
              alt='slider image'
              style={{objectFit:'cover'}}

            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide img'>
            <Image
              width={1500}
              height={1500}
              className='img '
              src={slider2}
              alt='slider image'
              style={{objectFit:'cover'}}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default HeritageSuitImageSlider;
