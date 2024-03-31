import Image from 'next/image';
import React, { useState } from 'react';
import Head from 'next/head';
import DiningBanner from '@/components/organisms/Banners/DiningPageBanner';
// import image1 from '/public/assets/images/shape/place_shape.png'
import { useForm } from 'react-hook-form';
import { getDining, postBook } from '@/utils/API';
import HtmlParser from 'react-html-parser';
function page({ dinningData }) {
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
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'Dinning' }), // Change the sheet name as per your requirement
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
      data.title = 'dining';
      data.type = 'book';
      const response = await postBook(data);
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
    <div>
      <main>
        <Head>
          <title>
            Hotel with Restaurants in Karnal – Hotel NoorMahal Palace
          </title>
          <meta
            name='keywords'
            content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          />
          <meta
            name='description'
            content='⦁	A hotel with restaurants in Karnal, NoorMahal Palace has a 24 hour coffee shop, multi-cuisine and open air restaurant, Cake Factory and a Royal Sports Bar. Book your table now!'
          />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <DiningBanner />

        {/* <!-- Dinner   Section  --> */}
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
              Noormahal Palace welcomes its guests to a pleasant dining
              experience with exquisitely hand crafted delicacies. Indulge in
              the art of fine dining from the royal kitchens of India and savour
              global cuisines. Each restaurant has an interesting tale to tell
              on account of its origin or inspiration. Noormahal Palace offers a
              range of settings and cuisines. These are royal dining experiences
              to remember.
            </p>
          </div>

          <div className='dining_item_area'>
            {dinningData?.map((dine, index) => {
              if (index % 2 == 0) {
                return (
                  <div key={index} className='dining_grid'>
                    <div className='img' data-aos='fade-right'>
                      <Image
                        width={1000}
                        height={600}
                        src={`https://api.noormahalpalace.com/${dine.images[0].path}`}
                        alt='dinings image'
                      />
                    </div>
                    <div className='content' data-aos='fade-left'>
                      <div className='inner_content_area mx-auto d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='heading_title text-center text-uppercase'>
                          {dine.title}
                        </h3>
                        <span>{HtmlParser(dine?.description)}</span>
                        {dine.totalCapacity && dine.settingCapacity > 0 ? (
                          <div className='d-flex justify-content-center align-items-baseline  gap-3 total-capacity'>
                            <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                              <p className='text-uppercase'>total capacity</p>
                              <p style={{ fontSize: '28px' }}>
                                {dine?.totalCapacity}
                              </p>
                            </div>
                            <div>|</div>
                            <div className='d-flex  flex-column justify-content-center align-items-center gap-3'>
                              <p className='text-uppercase'>Seating capacity</p>
                              <p style={{ fontSize: '28px' }}>
                                {dine?.settingCapacity}
                              </p>
                            </div>
                          </div>
                        ) : null}

                        <div className='text-center'>
                          <button
                            className='book_table_btn'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          >
                            <span>{dine?.btnName} </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className='dining_grid'>
                    <div className='img' data-aos='fade-right'>
                      <img
                        src={`https://api.noormahalpalace.com/${dine.images[0].path}`}
                        alt='dinings image'
                      />
                    </div>
                    <div className='content' data-aos='fade-left'>
                      <div className='inner_content_area mx-auto d-flex flex-column justify-content-center align-items-center'>
                        <h3 className='heading_title text-center text-uppercase'>
                          {dine.title}
                        </h3>
                        <span> {HtmlParser(dine?.description)}</span>
                        {dine.totalCapacity > 0 &&
                          dine.settingCapacity >
                            0(
                              <div className='d-flex justify-content-center align-items-baseline  gap-3 total-capacity'>
                                <div className='d-flex flex-column justify-content-center align-items-center gap-3'>
                                  <p className='text-uppercase'>
                                    total capacity
                                  </p>
                                  <p style={{ fontSize: '28px' }}>
                                    {dine?.totalCapacity}
                                  </p>
                                </div>
                                <div>|</div>
                                <div className='d-flex  flex-column justify-content-center align-items-center gap-3'>
                                  <p className='text-uppercase'>
                                    Seating capacity
                                  </p>
                                  <p style={{ fontSize: '28px' }}>
                                    {dine?.seatingCapacity}
                                  </p>
                                </div>
                              </div>
                            )}

                        <div className='text-center'>
                          <button
                            className='book_table_btn'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          >
                            <span>{dine?.btnName} </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
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
                                    required: 'Banner name is required!',
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
                                  type='text'
                                  name='email'
                                  className='form-control rounded-0'
                                  placeholder='Email'
                                  required='required'
                                  data-error='Lastname is required.'
                                  {...register('email', {
                                    required: 'Banner name is required!',
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
                                  type='Phone'
                                  name='Phone'
                                  className='form-control rounded-0'
                                  placeholder='Phone'
                                  required='required'
                                  data-error='Valid Phone is required.'
                                  {...register('phone', {
                                    required: 'Banner name is required!',
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
                                  data-error='Valid Date is required.'
                                  {...register('date', {
                                    required: 'Banner name is required!',
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                          <div className='row '>
                            <div className='col-md-6 pt-2'>
                              <div className='form-group'>
                                <input
                                  id='form_email'
                                  type='time'
                                  name='time'
                                  className='form-control rounded-0'
                                  placeholder='time'
                                  required='required'
                                  data-error='Valid email is required.'
                                  {...register('time', {
                                    required: 'Banner name is required!',
                                  })}
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
                                  {...register('message', {
                                    required: 'Banner name is required!',
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
                                className='book_table_btn w-100  btn-block
                            '
                              >
                                {isLoading ? (
                                  <span>SUBMITTING.. </span>
                                ) : (
                                  <span>SUBMIT </span>
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
            {/* </form> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseDinning = await getDining();

    if (!responseDinning || !responseDinning.data) {
      throw new Error('Invalid Dinning API response');
    }
    const dinningData = responseDinning.data.data.reverse() || [];
    return { props: { dinningData } };
  } catch (error) {
    console.log(error);
    return { props: { dinningData: [] } };
  }
}
