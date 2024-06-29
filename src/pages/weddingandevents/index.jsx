import WeddingBanner from '@/components/organisms/Banners/WeddingPageBanner';
import EventGallarySlider from '@/components/organisms/EventGallarySlider';
import EventPlan from '@/components/pageComponents/weddingPage/EventPlan';
import Memories from '@/components/pageComponents/weddingPage/Memories';
import SpecialService from '@/components/pageComponents/weddingPage/SpecialService';
import { getEvent, getSeo, postEnquire } from '@/utils/API';
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function page({ eventData, seoData }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/submitEvents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'WeddindAndEvents' }), // Change the sheet name as per your requirement
      });
      setIsLoading(false);
      if (response.ok) {
        console.log('Form data submitted successfully!');
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }

    try {
      setIsLoading(true);
      data.title = 'wedding';
      data.type = 'enquire';
      const response = await postEnquire(data);
      setIsLoading(false);
      if (response.status == 200 || response.status == 200) {
        console.log('Form data submitted successfully!');
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form data.');
      }
    } catch (error) {
      console.error('Error submitting form data:', error);
    }

    // Reset the form after submission
    reset();
  };
  return (
    <>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id='custom-swiper-bottom'>
        <WeddingBanner />
      </div>

      <section className='event_wrapper'>
        <div className='header_area text-center mx-auto'>
          <h1 className='story_title yellow-color-c2'>
            PLAN YOUR
            <br />
            <span className='black-color-0c'>MEMORABLE EVENTS</span>
          </h1>
          <div className='shape2'>
            <img
              src='assets/images/shape/experience_shape.png'
              alt='place shape'
            />
          </div>
          <p className='pt-2 pb-1'>
            Get set to garner accolades from your guests for hosting the perfect
            event in our spacious ball rooms. Equipped with latest
            state-of-the-art facilities and having a flair for warm hospitality,
            we ensure that you have memorable celebrations.
          </p>
        </div>

        <EventPlan eventData={eventData} />

        <EventGallarySlider />
        {/* <!-- Gallery Description  --> */}
        <div className='gallery_description mx-auto'>
          <h4 className='luxurious_title'>
            OUR SPECIAL PACKAGES FOR YOUR SPECIAL EVENT
          </h4>
          <p>
            Celebrate your special moments in style at Noormahal Palace. Our
            exclusive event packages offer luxurious accommodations,
            personalized service, elegant venues, and exquisite dining options.
            From weddings to anniversaries, corporate gatherings to social
            galas, we create unforgettable experiences tailored to your unique
            needs. Book now and make your event truly exceptional.
          </p>
          <div className='text-center'>
            <button
              className='book_table_btn'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              <span>Enquire Now </span>
            </button>
          </div>
        </div>

        <SpecialService />

        <Memories />

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
                  ENQUIRY FORM
                </p>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
              </div>

              {/* <form className="contact-form modal-form"> */}
              <div className='row '>
                <div className='col-lg-12 p-4 mx-auto'>
                  <div className='card-body rounded-0'>
                    <div className='container'>
                      <form
                        id='contact-form'
                        role='form'
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className='controls'>
                          <div className='row '>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_name'
                                  type='text'
                                  name='name'
                                  className='form-control rounded-0'
                                  placeholder='Name'
                                  required='required'
                                  data-error='Firstname is required.'
                                  {...register('name', {
                                    required: 'Name is required!',
                                  })}
                                />
                              </div>
                            </div>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_lastname'
                                  type='email'
                                  name='email'
                                  className='form-control rounded-0'
                                  placeholder='Email'
                                  required='required'
                                  data-error='Lastname is required.'
                                  {...register('email', {})}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_email'
                                  type='tel'
                                  name='phone'
                                  className='form-control rounded-0'
                                  placeholder='Phone'
                                  required='required'
                                  data-error='Valid email is required.'
                                  {...register('phone', {})}
                                />
                              </div>
                            </div>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_email'
                                  type='date'
                                  name='date'
                                  className='form-control rounded-0'
                                  placeholder='Date'
                                  required='required'
                                  data-error='Valid email is required.'
                                  {...register('date', {})}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='row '>
                            <div className='col-md-12 pt-2'>
                              <div className='form-group'>
                                <textarea
                                  id='form_message'
                                  name='message'
                                  className='form-control rounded-0'
                                  placeholder='Message'
                                  rows='4'
                                  required='required'
                                  data-error='Please, leave us a message.'
                                  {...register('message', {})}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12 pt-2'>
                              <button
                                type='submit'
                                className='book_table_btn w-100  btn-block
                            '
                              >
                                <span>SUBMIT</span>
                              </button>
                            </div>
                          </div>
                        </div>
                        {isSubmitted && (
                          <div>
                            <p>
                              Thank you for reaching out to us. We will get back
                              to you at earliest.
                            </p>
                          </div>
                        )}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseEvent = await getEvent();
    const responseSeo = await getSeo('weddingPlan');

    if (!responseEvent || !responseEvent.data) {
      throw new Error('Invalid Dinning API response');
    }
    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const eventData = responseEvent.data.data || [];
    const seoData = responseSeo.data.data || {};

    return { props: { eventData, seoData } };
  } catch (error) {
    console.log(error);
    return { props: { eventData: [], seoData: {} } };
  }
}
