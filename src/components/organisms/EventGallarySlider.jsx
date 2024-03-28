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
import { getWeddingImages } from '@/utils/API';

function EventGallarySlider() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getWeddingImages();
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
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 4,
    },

    1450: {
      slidesPerView: 5,
    },
    2000: {
      slidesPerView: 5,
    },
  };
  return (
    <div>
      <div className='event_gallery_slider' id='#eventGallery'>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <Swiper
              loop={true}
              freeMode={true}
              centeredSlides={true}
              spaceBetween={4}
              navigation
              breakpoints={breakpoints}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              speed='1500'
              effect='fade'
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className='mySwipe   '
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

export default EventGallarySlider;
