import React, { useCallback, useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { getGuestReview } from '@/utils/API';
// import slider1 from "../../public/assets/images/hero/hero_slider_img1.png";
// import slider2 from "../../public/assets/images/hero/hero_slider_img2.png";
// import slider3 from "../../public/assets/images/hero/hero_slider_img3.png";

function MeetingSlider() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getGuestReview();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data.reverse());
        console.log(response.data?.data, 'guest review');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div className='meeting_slider_wrapper'>
        <div className='meeting-slider-container mx-auto'>
          <div className='header_area text-center'>
            <h2 className='story_title yellow-color-c5'>
              WHAT OUR <br />
              GUEST SAYS
            </h2>
            <div className='shape2'>
              <img
                src='assets/images/shape/place_shape.png'
                alt='place shape'
              />
            </div>
          </div>
          <div className='swiper'>
            <div className='swiper-wrapper'></div>

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
              {data &&
                data.map((review) => {
                  return (
                    <SwiperSlide className='swiper-slide'>
                      <div className='slider_grid'>
                        <div className='content mx-auto'>
                          <h3 className='heading_title_md black-color'>
                            {review.title}
                          </h3>
                          <h6 className='meeting_para'>{review.description}</h6>
                        </div>
                        <div className='img mx-auto'>
                          <img
                            src={`https://api.noormahalpalace.com/${review.image?.path}`}
                            alt='slider image'
                          />
                        </div>
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

export default MeetingSlider;
