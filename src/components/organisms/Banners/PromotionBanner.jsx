import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import CheckIn from '../CheckIn';
import { getBanner } from '@/utils/API';

function PromotionBanner() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getBanner('promotion');
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'Promotion banner dataaaa===>>>>');
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
          {data.map((banner, index) => {
            return (
              <SwiperSlide key={index} className='swiper-slide'>
                <Image
                  width={2000}
                  height={2000}
                  property={true}
                  className='hero_item '
                  src={`https://noormahalpalace.com/files/${banner.image.path}`}
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

export default PromotionBanner;
