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

function RecrationalSlider({ images }) {
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
          {images.map((image, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide img'>
                <Image
                  width={1500}
                  height={1500}
                  className='img '
                  src={`https://noormahalpalace.com/files/${image?.path}`}
                  alt='slider image'
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default RecrationalSlider;
