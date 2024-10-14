// import Layout from '@/components/Layout';
import PromotionBanner from '@/components/organisms/Banners/PromotionBanner';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function page() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // Fetch the IP address
    let ipAddress = '';
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      ipAddress = ipData.ip;
    } catch (error) {
      console.error('Error fetching IP address:', error);
    }

    // Add IP address to form data
    data.ipaddress = ipAddress;

    try {
      setIsLoading(true);
      const response = await fetch('/api/submitPromotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'promotions' }), // Change the sheet name as per your requirement
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
  return (
    <div>
      <Head>
        <title>Special Promotions | Noormahal Palace</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
        />
        <meta name='robots' content='index, follow' />

        <meta
          name='description'
          content='Explore our special promotions and offers at Noormahal Palace. Enhance your stay with exclusive packages designed to make your experience even more memorable.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Layout> */}
      <PromotionBanner />
      <main>
        <section className='promotion_wrapper default_section_gap'>
          <div className='header_area text-center mx-auto'>
            <h1>
              <span className='story_title yellow-color-c2'>OUR</span>
              <span className='story_title'>SPECIAL OFFERS</span>
            </h1>
            <p className='pt-2 pb-1'>
              For our guests to make the most of our warm hospitality, we have
              curated various lucrative offers and packages. Being one of the
              best hotels in KARNAL, Noormahal Palace brings an array of 'out of
              the ordinary' choices for you. Experience your money's worth with
              the most attractive offers in town.
            </p>

            <div className='row'>
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/halloween.jpg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/monsoon.pdf'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '}
              {/* another promotion */}
              {/* <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/dusshera.jpg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/monsoon.pdf'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '} */}
              {/* another promotion */}
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/karwachauth.jpg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/monsoon.pdf'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '}
              {/* another promotion */}
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/navratri.jpg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/monsoon.pdf'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '}
              {/* another promotion */}
              {/* <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/monsoon.jpg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/monsoon.pdf'
                    target='_blank'
                    className='d-block'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '} */}
              {/* another promotion */}
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/chai_pe_charcha.jpeg'
                    alt='promotion image'
                  />
                </div>

                <div className='d-flex gap-4 justify-content-center py-4'>
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
              </div>{' '}
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/royal_escape_noormahal.jpg'
                    alt='promotion image'
                  />
                </div>
                {/* <div className="promotion_img text-center">
              <img
                src="assets/images/promotion/Staycation_Packages_19jun.jpg"
                alt="promotion image"
              />
            </div> */}
                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/knowmore.jpg'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>{' '}
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/sunday_splendor_noormahal.jpg'
                    alt='promotion image'
                  />
                </div>
                {/* <div className="promotion_img text-center">
              <img
                src="assets/images/promotion/Staycation_Packages_19jun.jpg"
                alt="promotion image"
              />
            </div> */}
                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/knowmore.jpg'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>
              <div className='promotion-container col-md-6 mx-auto'>
                <div className='promotion_img text-center'>
                  <img
                    src='assets/images/promotion/NMP.jpg'
                    alt='promotion image'
                  />
                </div>
                {/* <div className="promotion_img text-center">
              <img
                src="assets/images/promotion/Staycation_Packages_19jun.jpg"
                alt="promotion image"
              />
            </div> */}
                <div className='d-flex gap-4 justify-content-center py-4'>
                  <a
                    href='assets/images/promotion/knowmore.jpg'
                    target='_blank'
                    className='d-none'
                  >
                    {' '}
                    <button className='book_table_btn'>
                      <span>KNOW MORE</span>
                    </button>
                  </a>
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
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* </Layout> */}
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
                          <div className='col-md-6'>
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
                              disabled={isSubmitted}
                              type='submit'
                              className='book_table_btn w-100  btn-block
                            '
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
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
