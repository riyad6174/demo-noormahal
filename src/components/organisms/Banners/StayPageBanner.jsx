import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/stay/Banner1.jpg';

import slider2 from '../../../../public/assets/images/stay/Banner2.jpg';
import slider3 from '../../../../public/assets/images/stay/clubroyal-banner.jpg';
// import video1 from '../../public/assets/videos/featues_video.mp4';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import CheckIn from '../../organisms/CheckIn';
import { getBanner } from '@/utils/API';

function StayBanner() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getBanner('stay');
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'stay banner dataaaa===>>>>');
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
          {data.map((image) => {
            return (
              <SwiperSlide className='swiper-slide'>
                <Image
                  width={1500}
                  height={1500}
                  className='hero_item '
                  src={`https://api.noormahalpalace.com/${image.image.path}`}
                  alt='slider image'
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className='hero_item '
              src={slider1}
              alt='slider image'
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className=' hero_item '
              src={slider2}
              alt='slider image'
            />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide'>
            <Image
              width={1500}
              height={1500}
              className=' hero_item '
              src={slider3}
              alt='slider image'
            />
          </SwiperSlide> */}
        </Swiper>
        <CheckIn />
      </section>
    </div>
  );
}

export default StayBanner;
