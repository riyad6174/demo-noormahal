import SpaBanner from '@/components/organisms/Banners/SpaBanner';
import ChefSlider from '@/components/organisms/ImageSlider/ChefImageSlider';
import RecrationalSlider from '@/components/organisms/ImageSlider/RecreationalActivities';
import SwiperBanner from '@/components/organisms/Slider';
import ExperienceForm from '@/components/pageComponents/experiencePage/ExperienceForm';
import ExperiencesSection from '@/components/pageComponents/experiencePage/ExperiencesSection';
import GymForm from '@/components/pageComponents/experiencePage/GymForm';
import RecreationForm from '@/components/pageComponents/experiencePage/RecreationForm';
import SpaForm from '@/components/pageComponents/experiencePage/SpaForm';
import { getExperience, getExperiencesData, getSeo } from '@/utils/API';
import Head from 'next/head';
import React from 'react';

function page({ experienceData, seoData }) {
  return (
    <div>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel Noor Mahal'}
        </title>
        <meta name='robots' content='index, follow' />

        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel Noor Mahal offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id='custom-swiper-bottom'>
        <SpaBanner />
      </div>
      <main>
        {/* <!-- Dinner   Section  --> */}
        <section className='dining_wrapper facilities_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h1 className='story_title yellow-color-c2'>
              OUR <br />
              <span className='black-color-0c'> LUXURIOUS FACILITIES</span>
            </h1>
            <p className='pt-2 pb-1'>
              Noor Mahal offers a wide variety of recreational facilities
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
              <p className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </p>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <ExperienceForm />
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
              <p className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </p>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>

            {/* <form className="contact-form modal-form"> */}
            <ExperienceForm />
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
              <p className='modal-title fs-5' id='exampleModalLabel'>
                MEMBERSHIP FORM
              </p>
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
              <p className='modal-title fs-5' id='exampleModalLabel'>
                ENQUIRE FORM
              </p>
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
    const responseSeo = await getSeo('experience');

    if (!responseExperience || !responseExperience.data) {
      throw new Error('Invalid Dinning API response');
    }
    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const experienceData = responseExperience.data.data.reverse() || [];
    const seoData = responseSeo.data.data || {};

    return { props: { experienceData, seoData } };
  } catch (error) {
    console.log(error);
    return { props: { experienceData: [], seoData: {} } };
  }
}
