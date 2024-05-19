import { getPressByYear } from '@/utils/API';
import { PressContentsTwentyThree } from '@/utils/Contents/press';
import React, { useCallback, useEffect, useState } from 'react';

function LatestNews() {
  const [pressData, setPressData] = useState([]);

  const fetchPressData = useCallback(async () => {
    const response = await getPressByYear(2024);
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setPressData(response.data.data);
      }
    }
  }, []);

  useEffect(() => {
    fetchPressData();
  }, [fetchPressData]);
  return (
    <div>
      <div className='media_top_grid'>
        {pressData.length > 0 &&
          pressData.slice(0, 4).map((e, index) => {
            return (
              <div key={index} className='media_top_item'>
                <div className='img'>
                  <img
                    src={`https://api.noormahalpalace.com/${e?.image?.path}`}
                    alt='media image'
                  />
                </div>
                <div className='content'>
                  <p className='text-center text-uppercase'>
                    {e.title.slice(0, 90)}
                  </p>
                  <a href={e.link} className='media_btn'>
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
