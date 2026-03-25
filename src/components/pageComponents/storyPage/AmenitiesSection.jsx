import Image from 'next/image';
import React from 'react';
import HtmlParser from 'react-html-parser';

function AmenitiesSection({ amenitiesData }) {
  return (
    <div>
      {' '}
      <section className='amenities_wrapper'>
        <div className='header_area text-center mx-auto'>
          <h2 className='heading_title'>Amenities</h2>
          <div className='shape '>
            <img
              src='assets/images/shape/experience_shape.png'
              alt='shape icon'
            />
          </div>
          <p>
            Noor Mahal offers a wide variety of recreational facilities
            for guests to unwind – either by themselves or in the company of
            their loved ones. These include a spa & wellness center, and an
            outdoor pool with a bar next to it. There are also a few indoor and
            outdoor games for our little guests to have a good time.
          </p>
        </div>
        <div className='amentites_grid_area'>
          <div className='amentites_outer_grid'>
            {amenitiesData &&
              amenitiesData
                ?.slice(2, 4)
                .reverse()
                .map((aminities, index) => {
                  return (
                    <div key={index} className='amentites_innter_grid'>
                      <div className='img'>
                        <Image
                          width={400}
                          height={400}
                          loading='lazy'
                          src={`https://noormahalpalace.com/files/${aminities.images[0].path}`}
                          alt='Salon-image'
                        />
                      </div>
                      <div className='content' data-aos-delay='10'>
                        <div className='inner_content d-flex flex-column justify-content-center mx-auto text-center'>
                          <h4>{aminities.title}</h4>
                          <span>{HtmlParser(aminities?.description)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
          {/*  */}

          { }
          <div className='amentites_outer_grid'>
            {amenitiesData &&
              amenitiesData
                ?.slice(0, 2)
                .reverse()
                .map((aminities, index) => {
                  return (
                    <div key={index} className='amentites_innter_grid'>
                      <div className='img'>
                        <img
                          src={`https://noormahalpalace.com/files/${aminities.images[0].path}`}
                          alt='aminities-image'
                        />
                      </div>
                      <div className='content' data-aos-delay='10'>
                        <div className='inner_content d-flex flex-column justify-content-center mx-auto text-center'>
                          <h4>{aminities.title}</h4>
                          <span>{HtmlParser(aminities?.description)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default AmenitiesSection;
