import { getSpaMenu } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';

function LeftMenu() {
  const [data, setData] = useState([]);
  const SIDE = 'left';
  const fetchData = useCallback(async () => {
    const response = await getSpaMenu(SIDE);
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'left************');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className='price_left_area mt-5'>
      {data.map((item) => {
        return (
          <div className='price_left_item'>
            <div className='icon'>
              <img
                src={`https://api.noormahalpalace.com/${item.icon.path}`}
                alt=''
              />
            </div>
            <div className='title_area'>
              <h4>{item.title}</h4>
            </div>
            <div className='content_area'>
              <h5>{item.description}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default LeftMenu;
