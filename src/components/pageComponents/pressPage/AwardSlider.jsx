import React from 'react';
import Slider from 'react-slick';

function AwardSlider() {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1299,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 999,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 499,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div
        className='container mb-4 memories_slider position-relative'
        id='memoriesSlider'
      >
        <Slider {...settings}>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award5.jpg'>
              <img
                src='assets/images/awards/award5.jpg'
                alt='event image'
                className='border border-5 border-light'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award1.jpg'>
              <img
                src='assets/images/awards/award1.jpg'
                alt='event image'
                className='border border-5 border-light'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award6.jpg'>
              <img
                src='assets/images/awards/award6.jpg'
                alt='event image'
                className='border border-5 border-light'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award2.jpg'>
              <img
                src='assets/images/awards/award2.jpg'
                alt='event image'
                className='border border-5 border-light'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award3.jpg'>
              <img
                src='assets/images/awards/award3.jpg'
                alt='event image'
                className='border border-5 border-light'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/award4.jpg'>
              <img
                src='assets/images/awards/award4.jpg'
                alt='event image'
                className='border border-5 border-light shadow-md'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/wow.jpg'>
              <img
                src='assets/images/awards/wow.jpg'
                alt='event image'
                className='border border-5 border-light shadow-md'
              />
            </a>
          </div>
          <div className='award_gallery_item'>
            <a href='assets/images/awards/wow1.jpg'>
              <img
                src='assets/images/awards/wow1.jpg'
                alt='event image'
                className='border border-5 border-light shadow-md'
              />
            </a>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AwardSlider;
