import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <div className='position-relative'>
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
        </Swiper>
        <CheckIn />
      </section>
      <div
        className='position-absolute top-0'
        style={{ color: 'transparent', visibility: 'hidden' }}
      >
        <h1>Noormahal Place is luxury stay near Delhi</h1>
        <p>
          If you’re searching for a luxury stay near Delhi, look no further than
          Noormahal Place. This stunning hotel provides the ultimate luxury stay
          near Delhi, combining modern comfort with traditional elegance. As you
          step into Noormahal Place, you will find that it truly embodies the
          essence of a luxury stay near Delhi.
        </p>
        <p>
          At Noormahal Place, every moment is crafted to ensure a perfect
          getaway. The spacious rooms offer a rich experience of opulence,
          making it the ideal destination for anyone seeking a luxury stay near
          Delhi. Guests can indulge in a variety of upscale amenities, including
          a lavish spa and gourmet dining, ensuring that your luxury stay near
          Delhi is nothing short of exceptional.
        </p>
        <p>
          Located conveniently close to major attractions, Noormahal Place is
          perfect for travelers wanting both relaxation and adventure. Whether
          you're here for business or leisure, a luxury stay near Delhi at
          Noormahal Place guarantees that you'll enjoy a sophisticated ambiance.
        </p>
        <p>
          For those who wish to elevate their travel experience, Noormahal Place
          is the epitome of a luxury stay near Delhi. Don't miss your chance to
          experience unparalleled hospitality and comfort—book your luxury stay
          near Delhi at Noormahal Place today!
        </p>
      </div>
    </div>
  );
}

export default StayBanner;
