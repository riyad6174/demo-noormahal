import SpaBanner from '@/components/organisms/Banners/SpaBanner';
import SwiperBanner from '@/components/organisms/Slider';
import SpaBookForm from '@/components/pageComponents/spaPage/SpaBookForm';
import SpaFaq from '@/components/pageComponents/spaPage/SpaFaq';
import SpaGallery from '@/components/pageComponents/spaPage/SpaGallery';
import SpaRituals from '@/components/pageComponents/spaPage/SpaRituals';
import SpaWellness from '@/components/pageComponents/spaPage/SpaWellness';
import { getSeo } from '@/utils/API';
import Head from 'next/head';

import Image from 'next/image';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

//import images and icons

function index({ seoData }) {
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
      const response = await fetch('/api/submitSpa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          sheetName: 'spa',
          spreadsheetId: '1y7OPm4M4JVh38JqendkknQj0TlT8hOwRLE_fcoJk_x4',
        }), // Change the sheet name as per your requirement
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

    // Reset the form after submission
    reset();
  };
  // const onFormSubmit = async (data) => {
  //   console.log(data)
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch("/api/submitSpa", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         ...data,
  //         sheetName: "spa",
  //         spreadsheetId: "1y7OPm4M4JVh38JqendkknQj0TlT8hOwRLE_fcoJk_x4",
  //       }), // Change the sheet name as per your requirement
  //     });
  //     setIsLoading(false);
  //     if (response.ok) {
  //       console.log("Form data submitted successfully!");
  //       setIsSubmitted(true);
  //     } else {
  //       console.error("Failed to submit form data.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form data:", error);
  //   }

  //   // Reset the form after submission
  //   reset();
  // };
  return (
    <div>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
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
          <SpaBanner />
        </div>
        {/* <!-- Spa  Section  --> */}
        <SpaWellness />
        {/* <!-- Spa Price Section  --> */}
        <SpaRituals />
        {/* <!--Spa Faq Section  --> */}
        <SpaFaq />
        {/* <!-- Spa Book Section  --> */}
        <SpaBookForm />
        {/* <!-- Spa Gallery Section  --> */}
        <SpaGallery />
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
                  APPOINTMENT FORM
                </h1>
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
                          <div className='row py-2'>
                            <div className='col-md-6'>
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
                            <div className='col-md-6'>
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
                            <div className='col-md-6'>
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
                          </div>
                          <div className='row py-2'>
                            <div className='col-md-12'>
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
      </main>
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  try {
    const responseSeo = await getSeo('spa');

    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const seoData = responseSeo.data.data || {};
    return { props: { seoData } };
  } catch (error) {
    console.log(error);
    return { props: { seoData: {} } };
  }
}
