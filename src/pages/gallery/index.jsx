import AllImages from '@/components/pageComponents/galleryPage/AllImages';
import { FloatingButton } from '@/components/pageComponents/galleryPage/FloatingButton';

import React from 'react';

function index() {
  return (
    <div>
      <section className='gallery_wrapper pt-5 default_section_gap'>
        <div className='header_area text-center mx-auto'>
          <h2 className='story_title yellow-color-c2'>OUR</h2>
          <h2 className='story_title'>GALLERY</h2>
        </div>
        <div className='gallery-container mx-auto'>
          {/* <div className='tab_btn_area d-flex align-items-center justify-content-center'>
            <ul
              className='nav nav-pills justify-content-center g-lg'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link '
                  id='pills-all-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-all'
                  type='button'
                  role='tab'
                  aria-controls='pills-all'
                  aria-selected='false'
                >
                  ALL
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-stay-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-stay'
                  type='button'
                  role='tab'
                  aria-controls='pills-stay'
                  aria-selected='false'
                >
                  STAY
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-dining-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-dining'
                  type='button'
                  role='tab'
                  aria-controls='pills-dining'
                  aria-selected='false'
                >
                  DINING
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-experience-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-experience'
                  type='button'
                  role='tab'
                  aria-controls='pills-experience'
                  aria-selected='false'
                >
                  EXPERIENCE
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-others-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-others'
                  type='button'
                  role='tab'
                  aria-controls='pills-others'
                  aria-selected='true'
                >
                  OTHERS
                </button>
              </li>
         
            </ul>
          </div> */}
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-all'
              role='tabpanel'
              aria-labelledby='pills-all-tab'
              tabindex='0'
            >
              <AllImages />
            </div>
            {/* <div
              className='tab-pane fade'
              id='pills-stay'
              role='tabpanel'
              aria-labelledby='pills-stay-tab'
              tabindex='0'
            >
              <StayImages />
            </div>
            <div
              className='tab-pane fade'
              id='pills-dining'
              role='tabpanel'
              aria-labelledby='pills-dining-tab'
              tabindex='0'
            >
              <DinningImages />
            </div>
            <div
              className='tab-pane fade'
              id='pills-experience'
              role='tabpanel'
              aria-labelledby='pills-experience-tab'
              tabindex='0'
            >
              <ExperienceImages />
            </div>
            <div
              className='tab-pane fade'
              id='pills-others'
              role='tabpanel'
              aria-labelledby='pills-others-tab'
              tabindex='0'
            >
              <OtherImages />
            </div> */}
          </div>
        </div>
      </section>
      <FloatingButton />
    </div>
  );
}

export default index;
