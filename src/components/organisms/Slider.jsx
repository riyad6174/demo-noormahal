import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../public/assets/images/home/banner1.jpg';
import slider2 from '../../../public/assets/images/hero/banner22.jpeg';

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
  const [showSlider, setShowSlider] = useState(false);
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
    <div className='position-relative'>
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
            <>
              <SwiperSlide className='swiper-slide pb-1'>
                <Image
                  width={1500}
                  height={1500}
                  className='hero_item '
                  src={slider2}
                  alt='slider image'
                  priority
                />
              </SwiperSlide>
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
            </>
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
      <div
        className='position-absolute top-0'
        style={{ color: 'transparent', visibility: 'hidden' }}
      >
        <h1>Best 5-star hotel near Delhi</h1>
        <p>
          If you’re searching for the best 5-star hotel near Delhi, look no
          further than Noor Mahal, Autograph Collection, Marriott International
          Hotel. This luxurious hotel is renowned as the best 5-star hotel near
          Delhi, combining elegance and comfort to make it the perfect choice
          for both leisure and business travelers. Situated just a short drive
          from Delhi, Noor Mahal, Autograph Collection, Marriott International
          Hotel stands out as the best 5-star hotel near Delhi, offering
          stunning architecture, exquisite interiors, and world-class amenities,
          ensuring a memorable stay.
        </p>
        <p>
          As the best 5-star hotel near Delhi, Noor Mahal, Autograph Collection,
          Marriott International Hotel boasts beautifully designed rooms and
          suites that cater to the needs of every guest. Each room is equipped
          with modern facilities, plush bedding, and stunning views, creating an
          oasis of relaxation. Guests can indulge in gourmet dining at the
          hotel’s fine restaurants, showcasing the best of local and
          international flavors, further solidifying its reputation as the best
          5-star hotel near Delhi.
        </p>
        <p>
          For those looking to unwind, Noor Mahal, Autograph Collection,
          Marriott International Hotel offers a range of recreational
          facilities, including a luxurious spa, a well-equipped fitness center,
          and inviting swimming pools. Additionally, the hotel provides
          exceptional service, with attentive staff ready to cater to your every
          need.
        </p>
        <p>
          When it comes to hosting events or conferences, the best 5-star hotel
          near Delhi, Noor Mahal, Autograph Collection, Marriott International
          Hotel, provides sophisticated meeting spaces equipped with the latest
          technology. With its prime location, luxurious accommodations, and
          outstanding service, Noor Mahal, Autograph Collection, Marriott
          International Hotel is truly the best 5-star hotel near Delhi.
          Experience the ultimate in luxury and hospitality at Noor Mahal,
          Autograph Collection, Marriott International Hotel, where every stay
          is a remarkable experience.
        </p>
      </div>
    </div>
  );
}

export default SwiperBanner;
