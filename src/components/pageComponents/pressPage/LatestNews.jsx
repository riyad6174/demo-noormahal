import { PressContentsTwentyFour } from '@/utils/Contents/press';
import React from 'react';

function LatestNews() {
  return (
    <div>
      <div className='media_top_grid'>
        {PressContentsTwentyFour.length > 0 &&
          PressContentsTwentyFour.slice(0, 4).map((e, index) => {
            return (
              <div key={index} className='media_top_item'>
                <div className='img'>
                  <img src={e.image} alt='media image' />
                </div>
                <div className='content'>
                  <p className='text-center text-uppercase'>
                    {e.header.slice(0, 80)}
                  </p>
                  <a target='_blank' href={e.link} className='media_btn'>
                    READ MORE
                  </a>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default LatestNews;
