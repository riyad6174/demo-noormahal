import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/spa/Banner1.jpg';
import slider2 from '../../../../public/assets/images/spa/Banner2.jpg';

// import slider2 from '../../../../public/assets/images/home/1. banner 2.jpg';
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

function SpaBanner() {
  const [data, setData] = useState([]);

  const fetchBannerData = useCallback(async () => {
    const response = await getBanner('spa');
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
        {/* <!-- Swiper --> */}
        {/* <div className="swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="hero_item">
                  <img
                    src="assets/images/hero/hero_slider_img1.png"
                    alt="hero slider image"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero_item">
                  <img
                    src="assets/images/hero/hero_slider_img2.png"
                    alt="hero slider image"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero_item">
                  <img
                    src="assets/images/hero/hero_slider_img3.png"
                    alt="hero slider image"
                  />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="hero_item">
                  <img
                    src="assets/images/hero/hero_slider_img4.png"
                    alt="hero slider image"
                  />
                </div>
              </div>
            </div>
          
            <div className="swiper-pagination"></div>
          </div> */}

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
                  width={1500}
                  height={1500}
                  className='hero_item '
                  src={`https://api.noormahalpalace.com/${banner.image.path}`}
                  alt='slider image'
                />
              </SwiperSlide>
            );
          })}
          {/* <SwiperSlide className='swiper-slide'>
          <video autoPlay muted loop style={{ width: '500px', height: '500px' }}>
<source src={video1} />
</video>
          </SwiperSlide> */}
        </Swiper>
        {/* <CheckIn /> */}
      </section>
    </div>
  );
}

export default SpaBanner;
