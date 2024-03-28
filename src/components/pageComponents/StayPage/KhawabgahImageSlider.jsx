import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function KhawabgahImageSlider({ images }) {
  console.log(images);
  return (
    <div>
      <section className='slider_wrapper'>
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
          {images?.map((image, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide img'>
                <Image
                  width={1500}
                  height={1500}
                  className='img '
                  src={`https://api.noormahalpalace.com/${image.path}`}
                  alt='slider image'
                  style={{ objectFit: 'cover' }}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default KhawabgahImageSlider;
