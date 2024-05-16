import React, { useCallback, useEffect, useState } from 'react';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';
import { getSpaMenu, getSpaRituals } from '@/utils/API';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function SpaRituals() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getSpaRituals();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data.data);
        console.log(response.data.data, 'Rituals list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <section className='spa_price_wrapper'>
        <div className='spa-price-container mx-auto'>
          <div className='spa_price_grid'>
            <LeftMenu />
            <div className='spa_price_area' id='spaPriceArea'>
              <div className='price_title_area text-center'>
                <h3 className='story_title yellow-color-c2'>Rituals</h3>
                <p>
                  Quality Service. Attention to Detail.Relaxation at its best.
                </p>
              </div>
              {/* <Accordion defaultActiveKey="0" className="price_accordion_item accordion_active">
                {data?.map((singleFAQ, index) => (
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header> {singleFAQ.title}</Accordion.Header>
                    {singleFAQ.ritualList.map((sr) => {
                      return (
                        <Accordion.Body className="accordion_body_area">
                          <div className="list_item d-flex-between">
                            <h4>Swedish Rituals </h4>
                            <div className="time_area d-flex align-items-center justify-content-end flex-wrap g-sm">
                              <h4>60 min.</h4>
                            
                            </div>
                          </div>
                        </Accordion.Body>
                      );
                    })}
                  </Accordion.Item>
                ))}
              </Accordion> */}

              <div className='price_accordion_item accordion_active'>
                <button type='button' className='accordion_btn'>
                  <span>Therapies</span>
                  <div className='arrow_icon'>
                    <img
                      src='assets/icon/cross_icon.png'
                      alt='cross icon'
                      className='cross_icon'
                    />
                    <img
                      src='assets/icon/plus_icon.png'
                      alt='cross icon'
                      className='plus_icon'
                    />
                  </div>
                </button>
                <div className='accordion_body_area'>
                  <div className='list_item d-flex-between'>
                    <h4>Swedish Rituals </h4>
                    <div className='time_area d-flex align-items-center justify-content-end flex-wrap g-sm'>
                      <h4>60 min.</h4>
                      {/* <h4>$ 35</h4> */}
                    </div>
                  </div>
                  <div className='list_item d-flex-between'>
                    <h4>Abhyangam Rituals </h4>
                    <div className='time_area d-flex align-items-center justify-content-end flex-wrap g-sm'>
                      <h4>60 min.</h4>
                      {/* <h4>$ 35</h4> */}
                    </div>
                  </div>
                  <div className='list_item d-flex-between'>
                    <h4>Aromatherapy Rituals</h4>
                    <div className='time_area d-flex align-items-center justify-content-end flex-wrap g-sm'>
                      <h4>60 min.</h4>
                      {/* <h4>$ 35</h4> */}
                    </div>
                  </div>
                  <div className='list_item d-flex-between'>
                    <h4>Back Ritual </h4>
                    <div className='time_area d-flex align-items-center justify-content-end flex-wrap g-sm'>
                      <h4>30 min.</h4>
                      {/* <h4>$ 35</h4> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className='text-center'>
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
              <div className='text-center'>
                <a
                  href='assets/images/spa/spa_menu.pdf'
                  className='book_now_btn appointment_btn'
                  target='_blank'
                >
                  <span>Download Menu</span>
                </a>
              </div>
            </div>
            <RightMenu />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpaRituals;
