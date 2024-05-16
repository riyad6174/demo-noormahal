import React, { useCallback, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '../../../../public/assets/images/home/2.ExperiencesExperiences1Main.jpg';
// import slider2 from '../../../../public/assets/images/home/2.ExperiencesExperiences2.jpg';
// import slider3 from '../../../../public/assets/images/home/Experiences3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';
import { getTestimonial } from '@/utils/API';
import HtmlParser from 'react-html-parser';

function TestimonialSlider() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getTestimonial();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data.reverse());
        console.log(response.data?.data, 'blog list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Responsive breakpoints

  const breakpoints = {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },

    1450: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    2000: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
  };
  return (
    <div className='swiper' style={{ height: '100%', width: '100%' }}>
      <div className='row'>
        {data &&
          data.map((testimonial) => {
            return (
              <div className='col-md-4'>
                <div
                  className='testimonial '
                  style={{ height: '100%', width: '100%' }}
                >
                  <div className='pic'>
                    <img
                      src={`https://api.noormahalpalace.com/${testimonial?.image?.path}`}
                    />
                  </div>
                  {HtmlParser(testimonial.message)}
                  <div className='testimonial-profile'>
                    <h3 className='title'>{testimonial.name}</h3> <br />
                    <span className='post'>{testimonial.profession}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TestimonialSlider;
