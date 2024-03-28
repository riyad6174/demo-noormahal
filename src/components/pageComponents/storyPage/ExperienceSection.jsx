import DiningSlider from '@/components/organisms/ImageSlider/DiningImageSlider';
import Link from 'next/link';
import React from 'react';
import HtmlParser from 'react-html-parser';
function ExperienceSection({ experienceData }) {
  return (
    <div>
      <section className='experience_wrapper'>
        <div className='header_area text-center'>
          <h2 className='heading_title'>Experiences</h2>
          <div className='shape'>
            <img
              src='assets/images/shape/experience_shape.png'
              alt='shape icon'
            />
          </div>
        </div>
        {experienceData &&
          experienceData
            .map((experience, index) => {
              if (index % 2 == 0) {
                return (
                  <div key={index} className='experience_grid'>
                    <div className='img' data-aos='fade-right'>
                      <DiningSlider images={experience?.images} />
                    </div>
                    <div className='content' data-aos='fade-left'>
                      <div className='inner_content_area mx-auto text-center'>
                        <h3 className='heading_title'>{experience.title}</h3>
                        <span>{HtmlParser(experience?.description)}</span>
                        <Link href='/dining' className='book_now_btn '>
                          <span>{experience?.btnName}</span>
                          <svg
                            width='15'
                            height='15'
                            viewBox='0 0 15 15'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <g clipPath='url(#clip0_1_58)'>
                              <path
                                d='M0.901855 7.59753H13.1921L10.4374 10.3524L11.0526 10.9677L14.86 7.16003L11.0526 3.35242L10.4374 3.96765L13.1921 6.72253H0.901855V7.59753Z'
                                fill='#C29A5C'
                              />
                            </g>
                            <defs>
                              <clipPath id='clip0_1_58'>
                                <rect
                                  width='14'
                                  height='14'
                                  fill='white'
                                  transform='translate(0.859985 0.160034)'
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <div className='experience_grid'>
                      <div className='content' data-aos='fade-right'>
                        <div className='inner_content_area mx-auto text-center'>
                          <h3 className='heading_title'>{experience.title}</h3>
                          <span>{HtmlParser(experience?.description)}</span>
                          <Link href='/experiences' className='book_now_btn'>
                            <span>Explore More</span>
                            <svg
                              width='15'
                              height='15'
                              viewBox='0 0 15 15'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <g clipPath='url(#clip0_1_58)'>
                                <path
                                  d='M0.901855 7.59753H13.1921L10.4374 10.3524L11.0526 10.9677L14.86 7.16003L11.0526 3.35242L10.4374 3.96765L13.1921 6.72253H0.901855V7.59753Z'
                                  fill='#C29A5C'
                                />
                              </g>
                              <defs>
                                <clipPath id='clip0_1_58'>
                                  <rect
                                    width='14'
                                    height='14'
                                    fill='white'
                                    transform='translate(0.859985 0.160034)'
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </Link>
                        </div>
                      </div>
                      <div className='img' data-aos='fade-left'>
                        <DiningSlider images={experience.images} />
                      </div>
                    </div>
                  </div>
                );
              }
            })
            .reverse()}
      </section>
    </div>
  );
}

export default ExperienceSection;
