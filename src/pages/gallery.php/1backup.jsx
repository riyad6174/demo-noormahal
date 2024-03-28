import React from 'react';

function page() {
  return (
    <div>
      <section className='gallery_wrapper default_section_gap'>
        <div className='header_area text-center mx-auto'>
          <h2 className='story_title yellow-color-c2'>OUR</h2>
          <h2 className='story_title'>GALLERY</h2>
        </div>
        <div className='gallery-container mx-auto'>
          <div className='tab_btn_area d-flex align-items-center justify-content-center'>
            <ul
              className='nav nav-pills justify-content-center g-lg'
              id='pills-tab'
              role='tablist'
            >
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-all-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-all'
                  type='button'
                  role='tab'
                  aria-controls='pills-all'
                  aria-selected='true'
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
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-video-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-video'
                  type='button'
                  role='tab'
                  aria-controls='pills-video'
                  aria-selected='true'
                >
                  VIDEO
                </button>
              </li>
            </ul>
          </div>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-all'
              role='tabpanel'
              aria-labelledby='pills-all-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>

                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-stay'
              role='tabpanel'
              aria-labelledby='pills-stay-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img4 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img4.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-dining'
              role='tabpanel'
              aria-labelledby='pills-dining-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img4 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img4.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-experience'
              role='tabpanel'
              aria-labelledby='pills-experience-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img4 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img4.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-others'
              role='tabpanel'
              aria-labelledby='pills-others-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img4 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img4.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>

                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
            <div
              className='tab-pane fade'
              id='pills-video'
              role='tabpanel'
              aria-labelledby='pills-video-tab'
              tabIndex='0'
            >
              <div className='gallery_grid'>
                <div className='gallery_text_item'>
                  <div className='gallery_inner_content_area mx-auto'>
                    <h3 className='heading_title'>
                      A Photo Gallery of The NoorMahal
                    </h3>
                    <h5>
                      The Nature is Beautiful find your favourite picture around
                      the Karnal.
                    </h5>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>

                <div className='gallery_item'>
                  {/* <!-- add className "video_popup" if the video  --> */}
                  <a
                    href='assets/videos/featues_video.mp4'
                    className='video_popup'
                  >
                    <img
                      src='assets/images/gallery/gallery_img5.png'
                      alt='gallery image'
                    />
                  </a>
                  <div className='video_icon'>
                    <i className='fa-solid fa-video'></i>
                  </div>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img6.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img6.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img7.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img7.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img8 .png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img8.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img1.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img1.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img2.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img2.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
                <div className='gallery_item'>
                  <a
                    href='assets/images/gallery/gallery_img3.png'
                    className='gallery_img'
                  >
                    <img
                      src='assets/images/gallery/gallery_img3.png'
                      alt='gallery image'
                    />
                  </a>
                </div>
              </div>
              <div className='text-center'>
                <button type='button' className='load_more_btn'>
                  <span>Load more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
