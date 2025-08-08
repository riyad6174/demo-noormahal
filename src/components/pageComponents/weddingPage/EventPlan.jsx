import EventGallarySlider from '@/components/organisms/EventGallarySlider';
import { getEvent } from '@/utils/API';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import HtmlParser from 'react-html-parser';

function EventPlan({ eventData }) {
  return (
    <section className='dining_wrapper facilities_wrapper'>
      <div className=' text-center mx-auto'>
        <div className='dining_item_area'>
          {eventData &&
            eventData
              .map((event, index) => {
                if (index % 2 == 0) {
                  return (
                    <div key={index} className='dining_grid'>
                      <div
                        className='img'
                        data-aos='fade-right'
                        data-aos-once='true'
                      >
                        <Image
                          src={`https://noormahalpalace.com/files/${event.images[0].path}`}
                          alt='dinings image'
                          height={600}
                          width={1000}
                        />
                      </div>
                      <div
                        className='content'
                        data-aos='fade-left'
                        data-aos-once='true'
                      >
                        <div className='inner_content_area mx-auto'>
                          <h3 className='heading_title text-center text-uppercase'>
                            {event.title}
                          </h3>
                          <span>{HtmlParser(event.description)}</span>
                          {event.seatingCapacity > 0 &&
                            event.floatingCapacity > 0 && (
                              <div className='d-flex justify-content-around align-items-baseline  gap-3 total-capacity'>
                                <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                                  <p className='text-uppercase'>seating</p>
                                  <p>{event.seatingCapacity}</p>
                                </div>
                                <div>|</div>
                                <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                                  <p className='text-uppercase'>Floating</p>
                                  <p>{event.floatingCapacity}</p>
                                </div>
                              </div>
                            )}

                          <div className='text-center'>
                            <button
                              className='book_table_btn'
                              data-bs-toggle='modal'
                              data-bs-target='#exampleModal'
                            >
                              <span>Enquire Now </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className='dining_grid'>
                      <div
                        className='img'
                        data-aos='fade-right'
                        data-aos-once='true'
                      >
                        <Image
                          src={`https://noormahalpalace.com/files/${event.images[0].path}`}
                          alt='dinings image'
                          height={600}
                          width={1000}
                        // placeholder='blur'
                        />
                      </div>
                      <div
                        className='content'
                        data-aos='fade-left'
                        data-aos-once='true'
                      >
                        <div className='inner_content_area mx-auto'>
                          <h3 className='heading_title text-center text-uppercase'>
                            {event.title}
                          </h3>
                          <span>{HtmlParser(event.description)}</span>
                          {event.seatingCapacity > 0 &&
                            event.floatingCapacity > 0 && (
                              <div className='d-flex justify-content-around align-items-baseline  gap-3 total-capacity'>
                                <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                                  <p className='text-uppercase'>seating</p>
                                  <p>{event.seatingCapacity}</p>
                                </div>
                                <div>|</div>
                                <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                                  <p className='text-uppercase'>Floating</p>
                                  <p>{event.floatingCapacity}</p>
                                </div>
                              </div>
                            )}

                          <div className='text-center'>
                            <button
                              className='book_table_btn'
                              data-bs-toggle='modal'
                              data-bs-target='#exampleModal'
                            >
                              <span>Enquire Now </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
              .reverse()}
        </div>
      </div>
    </section>
  );
}

export default EventPlan;
