import Image from 'next/image';
import React, { useState } from 'react';
import image1 from '../../../public/assets/images/dinings/frontier_mail_1.jpg';
import image4 from '../../../public/assets/images/dinings/polobar1.jpg';
import image2 from '../../../public/assets/images/dinings/dining_img2.png';
import image5 from '../../../public/assets/images/dinings/Khaas_Mahal.jpg';
import image6 from '../../../public/assets/images/dinings/cakefactory.jpg';
import Head from 'next/head';
import DiningBanner from '@/components/organisms/Banners/DiningPageBanner';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { baseURL } from '@/utils/API';

function page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let ipAddress = '';
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }
    try {
      setIsLoading(true);

      // Format date and time for spreadsheet payload
      const currentDate = new Date();
      const formattedDate = format(currentDate, 'yyyy-MM-dd');
      const formattedTime = format(currentDate, 'HH:mm');

      // Prepare backend payload (without date and time)
      const backendPayload = {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        ipaddress: ipAddress,

        date: formattedDate,
        time: formattedTime,
        title: 'Query Form - Dining',
        type: 'Dinning',
      };

      // Second API call: Submit to backend database
      const backendResponse = await fetch(`${baseURL}/contact/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendPayload),
      });

      setIsLoading(false);

      if (backendResponse.ok) {
        console.log(
          'Form data submitted successfully to both spreadsheet and backend!',
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
        <title>Exquisite Dining | Noor Mahal</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content="Indulge in a culinary journey of flavors at Noor Mahal's dining venues.From traditional delights to international cuisines, elevate your dining experience with us."
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <div id='custom-swiper-bottom'>
          <DiningBanner />
        </div>
        <section className='dining_wrapper facilities_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              OUR <br />
              Dinings
            </h2>
            <div className='shape2'>
              <img
                src='assets/images/shape/experience_shape.png'
                alt='place shape'
              />
            </div>
            <p className='pt-2 pb-1'>
              Noor Mahal welcomes its guests to a pleasant dining experience
              with exquisitely hand crafted delicacies. Indulge in the art of
              fine dining from the royal kitchens of India and savour global
              cuisines. Each restaurant has an interesting tale to tell on
              account of its origin or inspiration. Noor Mahal offers a range of
              settings and cuisines. These are royal dining experiences to
              remember.
            </p>
          </div>

          <div className='dining_item_area'>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <img
                  src='assets/images/meetings/Lounge.jpg'
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto d-flex flex-column justify-content-center align-items-center'>
                  <h3 className='heading_title text-center text-uppercase'>
                    THE LOUNGE
                  </h3>
                  <p>
                    The Lounge Access is on the Lobby Floor of the hotel for an
                    ultra quick check in with welcome drinks on arrival. On
                    special occasions, you can access the lounge in the evening
                    for complimentary drinks and light snacks.
                  </p>
                  <div className='d-flex justify-content-center align-items-baseline  gap-3 total-capacity'>
                    <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                      <p className='text-uppercase'>total capacity</p>
                      <p style={{ fontSize: '28px' }}>35</p>
                    </div>
                    <div>|</div>
                    <div className='d-flex  flex-column justify-content-center align-items-center gap-3'>
                      <p className='text-uppercase'>Seating capacity</p>
                      <p style={{ fontSize: '28px' }}>30</p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <img
                  src='assets/images/dinings/Banner2.jpg'
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    Jal Mahal
                  </h3>
                  <p>
                    Jal Mahal adoring the Beauty of Noor Mahal, bringing you the
                    perfect reflections. Enjoy a perfect getaway with your
                    family and friends at Noor Mahal and take beautiful memories
                    away.
                  </p>

                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <Image
                  width={1000}
                  height={1000}
                  src={image1}
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    The Frontier Mail
                  </h3>
                  <p>
                    Step back in time with our award winning restaurant, which
                    takes its inspiration from the legendry Frontier Mail train
                    that operated between Bombay and Peshawar during the
                    pre-independence days. The menu comprises of cuisines from
                    the regions through which the train made its initial
                    journey.
                  </p>
                  <div className='time_grid'>
                    <div className='d-flex flex-column justify-content-start align-items-start text-center'>
                      <li style={{ fontSize: '19px', listStyleType: 'disc' }}>
                        Lunch Timing
                      </li>
                      <p style={{ marginLeft: '0px', paddingTop: '10px' }}>
                        Only on Saturday and Sunday
                      </p>
                      <p style={{ marginLeft: '0px' }}>12:30 Hrs - 15:30 Hrs</p>
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <li
                        style={{
                          marginLeft: '20px',
                          fontSize: '19px',
                          listStyleType: 'disc',
                        }}
                      >
                        Dinner Timing
                      </li>
                      <p style={{ marginLeft: '20px', paddingTop: '10px' }}>
                        {' '}
                        Monday to Sunday
                      </p>
                      <p style={{ marginLeft: '20px' }}>
                        19:00 Hrs - 23:00 Hrs
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <Image
                  width={1000}
                  height={1000}
                  src={image2}
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    The Brown Sugar
                  </h3>
                  <p>
                    A place where you can enjoy an international dining
                    experience that is quite unforgettable, this all day diner
                    offers buffet meals as well as an à la carte menu. Relax,
                    entertain or conduct leisurely meetings over a wide range of
                    exotic teas, coffees and savories. It also features
                    delectable buffet meals.
                  </p>

                  <div className='time_grid'>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <li style={{ fontSize: '19px', listStyleType: 'disc' }}>
                        Round the Clock
                      </li>
                      <p style={{ marginLeft: '1.6em', paddingTop: '10px' }}>
                        24 hrs Coffee Shop
                      </p>
                    </div>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <li style={{ fontSize: '19px', listStyleType: 'disc' }}>
                        Buffet Breakfast Timing
                      </li>
                      <p style={{ marginLeft: '1.6em', paddingTop: '10px' }}>
                        {' '}
                        07:00 hrs - 10:30 hrs{' '}
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <Image
                  width={1000}
                  height={1000}
                  src={image4}
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    The Polo Bar
                  </h3>
                  <p>
                    Adorned with trophies and memorabilia of the yesteryears,
                    this colonial style English bar serves signature cocktails
                    inspired by the royal sport. The shelves are lined with the
                    finest rare whiskies, single malts, cognacs, wines and
                    liqueurs, and a hand-picked selection of Cuban cigars.
                  </p>

                  <div className=''>
                    <div className='d-flex flex-column justify-content-start align-items-start'>
                      <li style={{ fontSize: '19px', listStyleType: 'disc' }}>
                        Bar Timing
                      </li>
                      <p style={{ marginLeft: '1.6em', paddingTop: '10px' }}>
                        11:00 hrs - 00:00 hrs
                      </p>
                    </div>
                  </div>
                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <Image
                  width={1000}
                  height={1000}
                  src={image5}
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    Khaas Mahal
                  </h3>
                  <p>
                    An exclusive al fresco restaurant for a niche dining
                    experience, this is a great place to enjoy a delectable
                    melt-in-the-mouth meal under the light of a stellar sky.
                    Available on special dining request.
                  </p>

                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className='dining_grid'>
              <div className='img' data-aos='fade-right'>
                <Image
                  width={1000}
                  height={1000}
                  src={image6}
                  alt='dinings image'
                />
              </div>
              <div className='content' data-aos='fade-left'>
                <div className='inner_content_area mx-auto'>
                  <h3 className='heading_title text-center text-uppercase'>
                    The Cake Factory
                  </h3>
                  <p>
                    The Cake Factory offers a delicious spread of freshly baked
                    hand-crafted breads, tarts, an assortment of savories as
                    well as freshly baked cakes, pastries, pralines and
                    truffles.
                  </p>

                  <div className='text-center'>
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Book A Table </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
                  BOOKING FORM
                </h1>
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
                          <div className='row pt-2'>
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
                                {errors.name && (
                                  <span className='text-sm text-red-500'>
                                    {errors.name?.message}
                                  </span>
                                )}
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
                                {errors.email && (
                                  <span className='text-sm text-red-500'>
                                    {errors.email?.message}
                                  </span>
                                )}
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
                                  data-error='Valid Phone is required.'
                                  {...register('phone', {
                                    required: 'Phone is required!',
                                  })}
                                />
                                {errors.phone && (
                                  <span className='text-sm text-red-500'>
                                    {errors.phone?.message}
                                  </span>
                                )}
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
                                  data-error='Valid Date is required.'
                                  {...register('date', {
                                    required: 'Date is required!',
                                  })}
                                />
                                {errors.date && (
                                  <span className='text-sm text-red-500'>
                                    {errors.date?.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_time'
                                  type='time'
                                  name='time'
                                  className='form-control rounded-0'
                                  placeholder='Time'
                                  required='required'
                                  data-error='Valid Time is required.'
                                  {...register('time', {
                                    required: 'Time is required!',
                                  })}
                                />
                                {errors.time && (
                                  <span className='text-sm text-red-500'>
                                    {errors.time?.message}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className='row'>
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
                                  {...register('message', {
                                    required: 'Message is required!',
                                  })}
                                ></textarea>
                                {errors.message && (
                                  <span className='text-sm text-red-500'>
                                    {errors.message?.message}
                                  </span>
                                )}
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
