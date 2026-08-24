import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// import slider2 from '../../../public/assets/images/home/1. banner 2.jpg';
// import video1 from '../../public/assets/videos/featues_video.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import { getBanner } from '@/utils/API';

function WeddingBanner() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getBanner('weddingPlan');
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'dinning banner dataaaa===>>>>');
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
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            // reverseDirection: true,
            watchOverflow: true,
          }}
          speed='1500'
          effect='fade'
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className='mySwipe  swiper-slide '
        >
          {data.map((banner, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide'>
                <Image
                  width={1500}
                  height={1500}
                  className='hero_item '
                  src={`https://noormahalpalace.com/files/${banner.image.path}`}
                  alt='slider image'
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <CheckIn /> */}
      </section>
    </div>
  );
}

export default WeddingBanner;
