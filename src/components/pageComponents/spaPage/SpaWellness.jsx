import { getWellness } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';

function SpaWellness() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getWellness();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data[0]);
        console.log(response.data?.data[0], 'wellness');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className='spa_wrapper default_section_gap'>
      <div className='header_area text-center mx-auto'>
        <img
          src='assets/icon/spa-icon.png'
          alt='flower shape'
          className='flower_icon'
        />
        {/* <h4 className="spa_sub_title">Welcome to</h4> */}
        <h2 className='story_title text-capitalize pt-5'> Spa And Wellness</h2>
        {/* <h2 className="story_title text-capitalize">Experience</h2> */}
        <p className='pt-2 pb-1'>
          We have integrated healing and wellness modalities from various
          streams of relaxing and pampering experiences. After all, getting back
          to being healthy should be an enjoyable experiences. We have gone a
          step further, to ensure that all our therapies are highly effective in
          producing the desired results, as they are based on science. Right
          from assessment of wellness and lifestyle we offer many ways to get
          Fit along with modern, scientific and effective therapies.
          <br /> What's more, all services are truly personalized right from the
          face therapy where ingredients are chosen as per various skin zones .
        </p>
        <p>
          Welcome to Wellness and healing. Welcome to The Spa at Noormahal
          Palace
        </p>
      </div>
      <div className='relax_slider_area mx-auto position-relative'>
        {/* <!-- Swiper --> */}
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='relax_grid'>
                <div className='img'>
                  <img
                    src={`https://api.noormahalpalace.com/${data.image?.path}`}
                    alt='spa slider image'
                  />
                </div>
                <div className='relax_content'>
                  <h4 className='relax_title text-center'>{data.title}</h4>
                  <h4 className='story_title yellow-color-c2 text-capitalize'>
                    {data.subTitle}
                  </h4>
                  <p>{data?.description}</p>
                  <button
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                    href='#'
                    className='book_now_btn appointment_btn'
                  >
                    <span>Get Appointment</span>

                    <svg
                      width='15'
                      height='15'
                      viewBox='0 0 15 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_30_36)'>
                        <path
                          d='M0.731873 7.85742H13.0221L10.2674 10.6123L10.8826 11.2275L14.69 7.41992L10.8826 3.6123L10.2674 4.22754L13.0221 6.98242H0.731873V7.85742Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_30_36'>
                          <rect
                            width='14'
                            height='14'
                            fill='white'
                            transform='translate(0.690002 0.419922)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Add Pagination --> */}
        <div className='swiper-pagination relax_pagination_area'></div>
      </div>
    </section>
  );
}

export default SpaWellness;
