import { getSpaGallery } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';

function SpaGallery() {
  const [data, setData] = useState([]);
  const fetchData = useCallback(async () => {
    const response = await getSpaGallery();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data[0].images);
        console.log(response.data?.data[0].images, 'spa gallery########');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <section className='spa_gallery_wrapper default_section_gap'>
      <div className='spa-price-container mx-auto'>
        <div className='gallery_header text-center'>
          <h4>GALLERY</h4>
          {/* <h3>LOOK AT OUR HAPPY CLIENTS</h3> */}
        </div>
        <div className='spa_gallery_area'>
          <div className='spa_gallery_grid'>
            {data.map((item, index) => {
              return (
                <div key={index} className='gallery_item'>
                  <img
                    src={`https://noormahalpalace.com/files/${item.path}`}
                    alt='spa gallery image'
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* <div className="text-center">
      <button type="button" className="view_more_btn">
        <span>VIEW MORE</span>
      </button>
    </div> */}
      </div>
    </section>
  );
}

export default SpaGallery;
