import React from 'react';

function HeroSection() {
  return (
    <div>
      <section className='hero_wrapper'>
        <div className='swiper'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='hero_item'>
                <img
                  src='assets/images/hero/hero_slider_img1.png'
                  alt='hero slider image'
                />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='hero_item'>
                <img
                  src='assets/images/hero/hero_slider_img2.png'
                  alt='hero slider image'
                />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='hero_item'>
                <img
                  src='assets/images/hero/hero_slider_img3.png'
                  alt='hero slider image'
                />
              </div>
            </div>
            <div className='swiper-slide'>
              <div className='hero_item'>
                <img
                  src='assets/images/hero/hero_slider_img4.png'
                  alt='hero slider image'
                />
              </div>
            </div>
          </div>

          <div className='swiper-pagination'></div>
        </div>
        <form
          action=''
          className='checking_form mx-auto needs-validation '
          noValidate
        >
          <div className='form_item'>
            <h4>CHECK IN</h4>
            <div>
              <input type='date' />
              <div className='invalid-feedback'>Enter Check in date</div>
            </div>
          </div>
          <div className='form_item'>
            <h4>CHECK Out</h4>
            <div>
              <input type='date' />
              <div className='invalid-feedback'>Enter Check out date</div>
            </div>
          </div>
          <div className='form_item'>
            <h4>Room</h4>
            <div className='d-flex justify-content-center'>
              <div>
                <select className='niceSelect'>
                  <option data-display='Select'>Select</option>
                  <option value='1'>1 Room</option>
                  <option value='1'>2 Room</option>
                  <option value='1'>3 Room</option>
                </select>
                <div className='invalid-feedback'>Select Room Number</div>
              </div>
            </div>
          </div>
          <div className='form_item'>
            <h4>Adult</h4>
            <div className='d-flex justify-content-center'>
              <div>
                <select className='niceSelect'>
                  <option data-display='Select'>Select</option>
                  <option value='1'>1 Adult</option>
                  <option value='1'>2 Adult</option>
                  <option value='1'>3 Adult</option>
                </select>
                <div className='invalid-feedback'>Select Adult</div>
              </div>
            </div>
          </div>
          <div className='submit_btn'>
            <button type='submit'>CHECK AVAILBILITY</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default HeroSection;
