import { getPressByYear } from '@/utils/API';
import { PressContentsTwentyTwo } from '@/utils/Contents/press';
import React, { useCallback, useEffect, useState } from 'react';

function TwentyTwo() {
  const [pressData, setPressData] = useState([]);

  const fetchPressData = useCallback(async () => {
    const response = await getPressByYear(2022);
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
      <div className='media_tab_grid'>
        {pressData.length > 0 &&
          pressData.map((e, index) => {
            return (
              <div key={index} className='media_tab_item'>
                <div className='img' style={{ overflow: 'hidden' }}>
                  <img
                    src={`https://api.noormahalpalace.com/${e?.image?.path}`}
                    alt='media image'
                  />
                </div>
                <div className='content'>
                  <p>{e?.header}</p>
                  <p>{e?.shortDescription}</p>
                  <div className='text-center'>
                    <a href={e?.link} className='media_btn'>
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

export default TwentyTwo;
