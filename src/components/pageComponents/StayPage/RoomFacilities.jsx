import { getRoomFacilities } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';

function RoomFacilities() {
  const [data, setData] = useState([]);

  const fetchGalleryData = useCallback(async () => {
    const response = await getRoomFacilities();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data.data, 'service data');
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  return (
    <div className='luxurious_wrapper'>
      <div className='header_area text-center mx-auto pb-4'>
        <h2 className='story_title yellow-color-c2'>
          IN-ROOM SERVICES & AMENITIES
        </h2>

        <div className='shape2'>
          <img
            src='assets/images/shape/experience_shape.png'
            alt='place shape'
          />
        </div>
      </div>
      <div className='room-facilities pt-4 '>
        <div className='row'>
          {data &&
            data.map((service) => {
              return (
                <div className='col-md-3 '>
                  <h4 className='ps-3'>{service.title}</h4>

                  <ul className='facilities-list'>
                    {service.services.map((desc) => {
                      return <li>{desc} </li>;
                    })}
                  </ul>
                </div>
              );
            })}
        </div>
        <p className='py-2 text-left px-4'>
          {' '}
          Note: Dear Guest, our rooftop is undergoing soft refurbishment to
          enhance your future experience; we apologize for any inconvenience and
          appreciate your patience.
        </p>
      </div>
    </div>
  );
}

export default RoomFacilities;
