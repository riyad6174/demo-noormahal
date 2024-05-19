import { PressContentsTwentyFour } from '@/utils/Contents/press';
import React from 'react';

function TwentyFour() {
  return (
    <div>
      <div className='media_tab_grid'>
        {PressContentsTwentyFour.length > 0 &&
          PressContentsTwentyFour.map((e, index) => {
            return (
              <div key={index} className='media_tab_item'>
                <div className='img' style={{ overflow: 'hidden' }}>
                  <img src={e?.image} alt='media image' />
                </div>
                <div className='content py-4'>
                  <p>{e?.header}</p>
                  <p>{e?.shortDescription.slice(0, 100) + '...'}</p>
                  <div className='text-center'>
                    <a target='_blank' href={e?.link} className='media_btn'>
                      READ MORE
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TwentyFour;
