import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '../../public/assets/images/hero/hero_slider_img1.png';
// import slider2 from '../../public/assets/images/hero/hero_slider_img2.png';
// import slider3 from '../../public/assets/images/hero/hero_slider_img3.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import Image from 'next/image';
import { getPreWeddingImages, getWeddingImages } from '@/utils/API';

function MemorySlider() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getPreWeddingImages();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data[0].images);
        console.log(
          response.data?.data[0].images,
          'Wedding images dataaaa===>>>>'
        );
      }
    }
  }, []);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);
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
      <div className='memories_slider position-relative' id='memoriesSlider'>
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
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwipe  swiper '
            >
              {data.map((image, index) => {
                return (
                  <SwiperSlide key={index} className='swiper-slide'>
                    <div className='event_gallery_item'>
                      <a href='assets/images/event/memories_img1.png'>
                        <img
                          src={`https://api.noormahalpalace.com/${image.path}`}
                          alt='event image'
                          className='event_img'
                        />
                      </a>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemorySlider;
