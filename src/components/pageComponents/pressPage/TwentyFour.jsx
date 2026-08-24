import { getPressByYear } from '@/utils/API';
// import { PressContentsTwentyThree } from "@/utils/Contents/press";
import React, { useCallback, useEffect, useState } from 'react';

function TwentyFour() {
  const [pressData, setPressData] = useState([]);

  const fetchPressData = useCallback(async () => {
    const response = await getPressByYear(2024);
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setPressData(response.data.data.reverse());
        console.log(response.data.data, 'media');
      }
    }
  }, []);

  useEffect(() => {
    fetchPressData();
  }, [fetchPressData]);

  console.log(pressData);
  return (
    <div>
      <div className='media_tab_grid'>
        {pressData.length > 0 &&
          pressData?.map((e, index) => {
            return (
              <div key={index} className='media_tab_item'>
                <div className='img' style={{ overflow: 'hidden' }}>
                  <img
                    src={`https://noormahalpalace.com/files/${e?.image?.path}`}
                    alt='media image'
                  />
                </div>
                <div className='content'>
                  <p className='py-3'>{e?.title}</p>
                  <p>{e?.shortDescription.slice(0, 100) + '...'}</p>
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

export default TwentyFour;
