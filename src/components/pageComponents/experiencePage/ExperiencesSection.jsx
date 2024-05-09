import ChefSlider from '@/components/organisms/ImageSlider/ChefImageSlider';
import RecrationalSlider from '@/components/organisms/ImageSlider/RecreationalActivities';
import { getExperiencesData } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';
import HtmlParser from 'react-html-parser';

function ExperiencesSection({ experienceData }) {
  console.log(experienceData[0]?.service[0]?.queryFormType);

  const [queryFormType, setQueryFormType] = useState('require');

  useEffect(() => {
    setQueryFormType();
  }, [experienceData]);

  return (
    <div className='dining_item_area'>
      {experienceData &&
        experienceData?.map((experience, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className='dining_grid'>
                {/* <div className='img'>
                  <img
                    src={`https://api.noormahalpalace.com/${experience?.service[0].images[0].path}`}
                  />
                </div> */}
                <RecrationalSlider images={experience.service[0].images} />
                <div className='content'>
                  <div className='inner_content_area mx-auto'>
                    <h3 className='heading_title text-center'>
                      {experience?.service[0]?.title}
                    </h3>
                    <span className='text-center'>
                      {HtmlParser(experience?.service[0]?.description)}
                    </span>

                    <div className='text-center'>
                      <button
                        className='book_table_btn'
                        data-bs-toggle='modal'
                        data-bs-target={
                          experience?.service[0]?.queryFormType == 'enquire' ||
                          'require'
                            ? '#exampleModal'
                            : '#exampleModal2'
                        }
                        // data-bs-target='#exampleModal'
                      >
                        <span>{experience?.service[0].btnName} </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div key={index} className='dining_grid'>
                <div className='img'>
                  <img
                    src={`https://api.noormahalpalace.com/${experience.service[0].images[0].path}`}
                    alt='dinings image'
                  />
                </div>
                <div className='content'>
                  <div className='inner_content_area mx-auto'>
                    <h3 className='heading_title text-center text-uppercase'>
                      {experience?.service[0].title}
                    </h3>
                    <p>{HtmlParser(experience?.service[0]?.description)}</p>

                    <div className='text-center'>
                      <button
                        className='book_table_btn'
                        data-bs-toggle='modal'
                        data-bs-target={
                          experience?.service[0]?.queryFormType == 'enquire' ||
                          'require'
                            ? '#exampleModal'
                            : '#exampleModal2'
                        }
                      >
                        <span>{experience?.service[0].btnName} </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default ExperiencesSection;
