import MeetingBanner from '@/components/organisms/Banners/MeetingBanner';
import MeetingSlider from '@/components/organisms/MeetingSlider';
import MeetingSection from '@/components/pageComponents/meetingPage/MeetingSection';
import { baseURL, getMeeting, getSeo } from '@/utils/API';
import { format } from 'date-fns';
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function page({ meetingData, seoData }) {
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

      // Format date and time for spreadsheet payload
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd');
      const formattedTime = format(currentDate, 'HH:mm');

      // Prepare spreadsheet payload
      const spreadsheetPayload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        date: formattedDate,
        time: formattedTime,
        title: 'Query Form - Meeting',
        type: 'meeting',
        sheetName: 'meetingAndConference',
      };

      // Prepare backend payload (without date and time)
      const backendPayload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        date: formattedDate, // Use formatted date for backend
        message: data.message,
        title: 'Query Form - Meeting',
        type: 'enquire',
      };

      // First API call: Submit to spreadsheet
      const spreadsheetResponse = await fetch('/api/submitMeeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(spreadsheetPayload),
      });

      if (!spreadsheetResponse.ok) {
        console.error(
          'Failed to submit to spreadsheet:',
          await spreadsheetResponse.text()
        );
      }

      // Second API call: Submit to backend database
      const backendResponse = await fetch(`${baseURL}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendPayload),
      });

      setIsLoading(false);

      if (spreadsheetResponse.ok && backendResponse.ok) {
        console.log(
          'Form data submitted successfully to both spreadsheet and backend!'
        );
        setIsSubmitted(true);
      } else {
        console.error('Failed to submit form data to one or both endpoints.');
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error submitting form data:', error);
    }

    // Reset the form after submission
    reset();
  };

  return (
    <div>
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
      <main>
        <div id='custom-swiper-bottom'>
          <MeetingBanner />
        </div>
        <section className='dining_wrapper facilities_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h1 className='story_title yellow-color-c2'>
              MEETINGS <br />
              <span className='black-color-0c'> FOR FLAWLESS PLANNING</span>
            </h1>
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
          <MeetingSection meetingData={meetingData} />
        </section>
        <div id='custom-swiper-bottom'>
          <MeetingSlider />
        </div>
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
                                  data-error='Name is required.'
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
                                  data-error='Email is required.'
                                  {...register('email', {
                                    required: 'Email is required!',
                                  })}
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
                                  data-error='Phone is required.'
                                  {...register('phone', {
                                    required: 'Phone is required!',
                                  })}
                                />
                              </div>
                            </div>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_date'
                                  type='date'
                                  name='date'
                                  className='form-control rounded-0'
                                  placeholder='Date'
                                  required='required'
                                  min={new Date().toISOString().split('T')[0]}
                                  data-error='Date is required.'
                                  {...register('date', {
                                    required: 'Date is required!',
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='row pt-2'>
                            <div className='col-md-12'>
                              <div className='form-group'>
                                <textarea
                                  id='form_message'
                                  name='message'
                                  className='form-control rounded-0'
                                  placeholder='Message'
                                  rows='4'
                                  required='required'
                                  data-error='Message is required.'
                                  {...register('message', {
                                    required: 'Message is required!',
                                  })}
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-12 pt-2'>
                              <button
                                disabled={isSubmitted}
                                type='submit'
                                className='book_table_btn w-100 btn-block'
                              >
                                {isLoading ? (
                                  <span>SUBMITTING.. </span>
                                ) : (
                                  <span>
                                    {isSubmitted ? 'SUBMITTED' : 'SUBMIT'}
                                  </span>
                                )}
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
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseMeeting = await getMeeting();
    const responseSeo = await getSeo('meeting');

    if (!responseMeeting || !responseMeeting.data) {
      throw new Error('Invalid Meeting API response');
    }
    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const meetingData = responseMeeting.data.data || [];
    const seoData = responseSeo.data.data || {};

    return { props: { meetingData, seoData } };
  } catch (error) {
    console.log(error);
    return { props: { meetingData: [], seoData: {} } };
  }
}
