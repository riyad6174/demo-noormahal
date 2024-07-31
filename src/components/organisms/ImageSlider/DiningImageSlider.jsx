import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/home/dining-main.jpg';
import slider2 from '../../../../public/assets/images/home/2.ExperiencesOurDinings2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

function DiningSlider({ images }) {
  console.log(images, '===============>>>>images');
  return (
    <div style={{ height: '100%' }}>
      <section className='slider_wrapper' style={{ height: '100%' }}>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            watchOverflow: true,
          }}
          speed='1500'
          effect='fade'
          loop={true}
          modules={[Autoplay, Pagination]}
          className='mySwipe  swiper-slide '
        >
          {images.map((image) => {
            return (
              <SwiperSlide className='swiper-slide'>
                <Image
                  width={1500}
                  height={1500}
                  className='hero_item '
                  src={`https://api.noormahalpalace.com/${image.path}`}
                  alt='slider image'
                  priority
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
}

export default DiningSlider;
