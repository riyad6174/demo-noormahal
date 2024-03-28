import React from 'react';

import KhawabgahImageSlider from './KhawabgahImageSlider';
import HtmlParser from 'react-html-parser';

function Rooms({ roomData }) {
  return (
    <div>
      <div className='luxurious-container'>
        <div className='luxurious_grid'>
          {roomData &&
            roomData.map((room, index) => {
              return (
                <div key={index} className='luxurious_item' data-aos='fade-up'>
                  <KhawabgahImageSlider images={room.images} />
                  <div className='py-4 lx-contents d-flex flex-column  text-center '>
                    <a href='' className='luxurious_title text-center'>
                      {room.title}
                    </a>
                    <p className='text-center text-dark'>{room.subTitle}</p>
                    <span>{HtmlParser(room.description)}</span>

                    <div className='text-center'>
                      <a
                        // href='https://bookings.simplotel.com/?propertyId=6217'
                        href={room.btnLink}
                        className='book_now_btn'
                      >
                        <span>{room.btnName}</span>
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
                              fill='#C29A5C'
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
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
