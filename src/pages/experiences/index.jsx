import SpaBanner from '@/components/organisms/Banners/SpaBanner';
import ChefSlider from '@/components/organisms/ImageSlider/ChefImageSlider';
import RecrationalSlider from '@/components/organisms/ImageSlider/RecreationalActivities';
import SwiperBanner from '@/components/organisms/Slider';
import DinningForm from '@/components/pageComponents/experiencePage/DinningForm';
import ExperiencesSection from '@/components/pageComponents/experiencePage/ExperiencesSection';
import GymForm from '@/components/pageComponents/experiencePage/GymForm';
import RecreationForm from '@/components/pageComponents/experiencePage/RecreationForm';
import SpaForm from '@/components/pageComponents/experiencePage/SpaForm';
import { getExperience, getExperiencesData } from '@/utils/API';
import React from 'react';

function page({ experienceData }) {
  return (
    <div>
      <SpaBanner />
      <main>
        {/* <!-- Dinner   Section  --> */}
        <section className='dining_wrapper facilities_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              OUR <br />
              <span className='black-color-0c'> LUXURIOUS FACILITIES</span>
            </h2>
            <p className='pt-2 pb-1'>
              Noormahal Palace offers a wide variety of recreational facilities
              for guests to unwind – either by themselves or in the company of
              their loved ones. These include a spa & wellness center, and an
              outdoor pool with a bar next to it. There are also a few indoor
              and outdoor games for our little guests to have a good time.
            </p>
            <div className='shape2'>
              <img
                src='assets/images/shape/place_shape.png'
                alt='place shape'
              />
            </div>
          </div>
          <ExperiencesSection experienceData={experienceData} />
        </section>
      </main>

      {/* spa modal */}
      <div
        className='modal fade modal-form rounded-0'
        id='exampleModal'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog rounded-0'>
          <div className='modal-content rounded-0'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <SpaForm />
          </div>
        </div>
      </div>
      {/* dinning form */}
      <div
        className='modal fade modal-form rounded-0'
        id='exampleModal2'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog rounded-0'>
          <div className='modal-content rounded-0'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <DinningForm />
          </div>
        </div>
      </div>
      {/* recreation form */}
      <div
        className='modal fade modal-form rounded-0'
        id='exampleModal3'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog rounded-0'>
          <div className='modal-content rounded-0'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                MEMBERSHIP FORM
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <RecreationForm />
          </div>
        </div>
      </div>
      {/* gym form */}
      <div
        className='modal fade modal-form rounded-0'
        id='exampleModal4'
        tabIndex='-1'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog rounded-0'>
          <div className='modal-content rounded-0'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </h1>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <GymForm />
          </div>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseExperience = await getExperiencesData();

    if (!responseExperience || !responseExperience.data) {
      throw new Error('Invalid Dinning API response');
    }
    const experienceData = responseExperience.data.data.reverse() || [];
    return { props: { experienceData } };
  } catch (error) {
    console.log(error);
    return { props: { experienceData: [] } };
  }
}
