import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider2 from '../../../../public/assets/images/stay/clubroyal2.jpg';
import slider3 from '../../../../public/assets/images/stay/clubroyal3.jpg';
import slider4 from '../../../../public/assets/images/stay/clubroyal4.jpg';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function ClubRoyalImageSlider() {
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
              src={slider2}
              alt='slider image'
              style={{objectFit:'cover'}}

            />
          </SwiperSlide>

          <SwiperSlide className='swiper-slide img'>
            <Image
              width={1500}
              height={1500}
              className='img '
              src={slider3}
              alt='slider image'
              style={{objectFit:'cover'}}
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide img'>
            <Image
              width={1500}
              height={1500}
              className='img '
              src={slider4}
              alt='slider image'
              style={{objectFit:'cover'}}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default ClubRoyalImageSlider;
