import { getRooms } from '@/utils/API';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import shape from '../../../../public/assets/images/shape/experience_shape.png';
function RoomsAndSuits() {
  const [data, setData] = useState([]);

  //  const fetchGalleryData = useCallback(async () => {
  //    const response = await getRooms();
  //    if (response && response.status) {
  //      if (response.data && Object.keys(response.data.data).length > 0) {
  //        const newData = [...response.data.data]; // Copy the data array
  //        // Swap the elements at indexes 0 and 1 kphcrc=>p
  //        [newData[0], newData[1], newData[2], newData[3], newData[4]] = [
  //          newData[3],p
  //          newData[2],h
  //          newData[4],k
  //          newData[0],cr
  //          newData[1],crs
  //        ];
  //        setData(newData); // Set the modified data as state
  //        console.log(newData, 'Rooms and suits data');
  //      }
  //    }
  //  }, []);
  //  useEffect(() => {
  //    fetchGalleryData();
  //  }, [fetchGalleryData]);

  const fetchGalleryData = useCallback(async () => {
    const response = await getRooms();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data.data, 'Rooms and suits data');
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  return (
    <div>
      <section className='place_wrapper'>
        <div className='header_area text-center mx-auto px-2'>
          {/* <h4 className='sub_heading'>Palace</h4> */}
          <h2 className='heading_title_md'>Rooms & Suites</h2>
          <div className='shape'>
            <Image src={shape} alt='shape icon' height={20} width={220} />
          </div>
          <p>
            At Noor Mahal, Karnal, we have an inventory of 125 elegant
            rooms and suites, furnished with premium furniture and upholstery.
            Despite being styled after traditional Indian architecture, no
            modern comforts have been compromised with. Immerse yourself in the
            splendour of the Indian Royalty at Noor Mahal, ‘The Jewel of
            Karnal’.
          </p>
        </div>
        <div className='place_grid'>
          {data &&
            data.map((room, index) => {
              return (
                <div key={index} className='place_item '>
                  <Image
                    src={`https://noormahalpalace.com/files/${room.image?.path}`}
                    alt={room.title}
                    className='place_img'
                    width={500}
                    height={500}
                    loading='lazy'
                  />
                  <div className='place_content'>
                    <h4>{room.title}</h4>
                    {/* <h4 className='text-light fw-bold'>{room.subTitle}</h4> */}
                    <Link href={room.btnLink} className='book_now_btn'>
                      <span>View Rooms</span>
                      <svg
                        width='15'
                        height='15'
                        viewBox='0 0 15 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clipPath='url(#clip0_6_693)'>
                          <path
                            d='M0.62207 7.84741H12.9123L10.1576 10.6023L10.7728 11.2175L14.5802 7.40991L10.7728 3.60229L10.1576 4.21753L12.9123 6.97241H0.62207V7.84741Z'
                            fill='#C29A5C'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_6_693'>
                            <rect
                              width='14'
                              height='14'
                              fill='white'
                              transform='translate(0.580078 0.409912)'
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </div>
  );
}

export default RoomsAndSuits;
