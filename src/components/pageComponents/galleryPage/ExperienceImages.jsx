import React, { useState } from 'react';
import { expImages } from '@/utils/Contents/images/experience';

function ExperienceImages() {
  const [slicedIndex, setSlicedIndex] = useState(8);

  return (
    <div>
    <div className='gallery_grid'>
     {expImages.length > 0 &&
         expImages.slice(0, slicedIndex).map((item, index) => {
          return (
            <div className='gallery_item'>
        <a href={item.path} className='gallery_img'>
          <img src={item.path} alt='gallery image' />
        </a>
      </div>
          );
        })}

    </div>
    <div className='text-center'>
      <button type='button' className='load_more_btn'      onClick={() => {
              setSlicedIndex(slicedIndex + 8);
            }}>
        <span>Load more</span>
      </button>
    </div>
  </div>
  );
}

export default ExperienceImages;
