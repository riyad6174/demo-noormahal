import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../public/assets/images/home/banner1.jpg';

// import slider2 from '../../../public/assets/images/home/banner2.jpg';
// import video1 from '../../public/assets/videos/featues_video.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import CheckIn from './CheckIn';
import ReactPlayer from 'react-player';
import { getAmenities, getBanner } from '@/utils/API';
import { useCallback } from 'react';

function SwiperBanner() {
  const [showSlider, setShowSlider] = useState(true);
  const [banneData, setData] = useState([]);
  const vidRef = useRef();
  useEffect(() => {
    // Delay the display of the slider for a certain duration (e.g., 5 seconds)
    const timeout = setTimeout(() => {
      setShowSlider(false);
    }, 28000);

    return () => clearTimeout(timeout);
  }, []);

  const fetchBannerData = useCallback(async () => {
    const response = await getBanner('overview');
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data.data, 'home banner data');
      }
    }
  }, []);

  useEffect(() => {
    fetchBannerData();
  }, [fetchBannerData]);
  return (
    <div>
      <section className='hero_wrapper'>
        <Swiper
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed='1500'
          effect='fade'
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwipe  swiper-slide '
        >
          {!showSlider ? (
            <SwiperSlide className='swiper-slide pb-1'>
              <Image
                width={1500}
                height={1500}
                className='hero_item '
                src={slider1}
                alt='slider image'
                priority
              />
            </SwiperSlide>
          ) : (
            ''
          )}

          {showSlider ? (
            <SwiperSlide
              className={`swiper-slide`}
              data-swiper-autoplay='35000'
            >
              <video
                src='/assets/videos/nmvideo.mp4'
                ref={vidRef}
                autoPlay
                controls
                loop
                muted
                className='w-100'
                style={{
                  maxHeight: '92vh',
                  overflow: 'hidden',
                  objectFit: 'cover',
                }}
              />
            </SwiperSlide>
          ) : (
            ''
          )}
        </Swiper>

        <CheckIn />
      </section>
    </div>
  );
}

export default SwiperBanner;
