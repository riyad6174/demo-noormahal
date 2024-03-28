import TestimonialSlider from '@/components/organisms/ImageSlider/TestimonialSlider';
import React from 'react';

function page() {
  return (
   
    <div>
      <main>
        {/* <!-- Testimonial   Section  --> */}
        <section className='testimonial_page_wrapper default_section_gap pt-5'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              Some words <br />
              <span className='black-color-0c'>From our Guests</span>
            </h2>
            <div className='shape2'>
              <img
                src='assets/images/shape/place_shape.png'
                alt='place shape'
              />
            </div>
          </div>
          <div className='testimonial_slider_area'>
            <div className='guest-container mx-auto'>
              <div className='position-relative'>
               
                <TestimonialSlider />
                <div className='testimonial_prev_btn'>
                  <i className='fa-solid fa-arrow-left-long'></i>
                </div>
                <div className='testimonial_next_btn'>
                  <i className='fa-solid fa-arrow-right-long'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;
