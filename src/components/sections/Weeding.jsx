import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';
import { getBanner } from '@/utils/API';
import { useEffect, useState, useCallback } from 'react';

function Weeding({ weddingData }) {
  const [data, setData] = useState([]);

  const fetchGalleryData = useCallback(async () => {
    const response = await getBanner('wedding');
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'wedding plan dataaaa===>>>>');
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);
  return (
    <section className='wedding_wrapper'>
      <div className='swiper'>
        <div className='swiper-wrapper'>
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
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwipe  swiper-slide '
          >
            {data.map((img) => {
              return (
                <SwiperSlide className='swiper-slide'>
                  <div className='slider_item'>
                    <Image
                      width={1500}
                      height={1500}
                      style={{ objectFit: 'cover' }}
                      className='hero_item '
                      src={`https://noormahalpalace.com/files/${img.image?.path}`}
                      alt='slider image'
                      loading='lazy'
                    />
                    <div className='content'>
                      <Link href='/weddingandevents' className='plan_btn'>
                        <span>PLAN MY WEDDING</span>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Weeding;
