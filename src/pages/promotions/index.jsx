import PromotionBanner from '@/components/organisms/Banners/PromotionBanner';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const promotions = [
  // {
  //   image: 'assets/images/promotion/valentines.jpg',
  //   knowMoreLink: 'assets/images/promotion/valentines.pdf', // No "Know More" button for this promotion
  // },
  {
    image: 'assets/images/promotion/polobar.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/NMP.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/rangbarse.jpg',
    knowMoreLink: 'assets/images/promotion/rangbarse-know-more.jpg', // No "Know More" button for this promotion
  },
  {
    image: 'assets/images/promotion/chai_pe_charcha.jpeg',
    knowMoreLink: null, // No "Know More" button for this promotion
  },
  {
    image: 'assets/images/promotion/royal_escape_noormahal.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/sunday_splendor_noormahal.jpg',
    knowMoreLink: null, // No "Know More" button for this promotion
  },
];

export default function Page() {
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

    data.ipaddress = ipAddress;

    try {
      setIsLoading(true);
      const response = await fetch('/api/submitPromotion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sheetName: 'promotions' }),
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
              {promotions.map((promotion, index) => (
                <div
                  key={index}
                  className='promotion-container col-md-6 mx-auto'
                >
                  <div className='promotion_img text-center'>
                    <img src={promotion.image} alt='promotion image' />
                  </div>
                  <div className='d-flex gap-4 justify-content-center py-4'>
                    {promotion.knowMoreLink && (
                      <a
                        href={promotion.knowMoreLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <button className='book_table_btn'>
                          <span>KNOW MORE</span>
                        </button>
                      </a>
                    )}
                    <button
                      className='book_table_btn'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                    >
                      <span>Enquire Now</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
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
            <div className='row'>
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
                            <input
                              id='form_name'
                              type='text'
                              name='name'
                              className='form-control rounded-0'
                              placeholder='Name'
                              {...register('name', {
                                required: 'Name is required!',
                              })}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              id='form_lastname'
                              type='email'
                              name='email'
                              className='form-control rounded-0'
                              placeholder='Email'
                              {...register('email', {})}
                            />
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-6'>
                            <input
                              id='form_email'
                              type='tel'
                              name='phone'
                              className='form-control rounded-0'
                              placeholder='Phone'
                              {...register('phone', {})}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              id='form_email'
                              type='date'
                              name='date'
                              className='form-control rounded-0'
                              placeholder='Date'
                              min={new Date().toISOString().split('T')[0]}
                              {...register('date', {})}
                            />
                          </div>
                        </div>
                        <div className='row py-2'>
                          <div className='col-md-12'>
                            <textarea
                              id='form_message'
                              name='message'
                              className='form-control rounded-0'
                              placeholder='Message'
                              rows='4'
                              {...register('message', {})}
                            ></textarea>
                          </div>
                        </div>
                        <div className='row'>
                          <div className='col-md-12 pt-2'>
                            <button
                              disabled={isSubmitted}
                              type='submit'
                              className='book_table_btn w-100 btn-block'
                            >
                              {isLoading
                                ? 'SUBMITTING..'
                                : isSubmitted
                                ? 'SUBMITTED'
                                : 'SUBMIT'}
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
    </div>
  );
}
