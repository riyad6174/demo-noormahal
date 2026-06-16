import PromotionBanner from '@/components/organisms/Banners/PromotionBanner';
import { baseURL } from '@/utils/API';
import { format } from 'date-fns';
import Head from 'next/head';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const promotions = [
  {
    image: 'assets/images/promotion/palace-escape.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/moon.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/royal-retreat.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/wedding-package-1.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/wedding-package-2.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/wedding-package-3.jpeg',
    knowMoreLink: null,
  },
  // {
  //   image: 'assets/images/promotion/thrill2026.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/navratri2026.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/thrill.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/holi.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/womens.jpeg',
  //   knowMoreLink: null,
  // },

  // {
  //   image: 'assets/images/promotion/brs.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/cake.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/frm.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/polo.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/buffet.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/eclair.jpg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/festive.jpeg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/carnival.jpg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/new-year.jpg',
  //   knowMoreLink: null,
  // },
  // {
  //   image: 'assets/images/promotion/sunday.jpg',
  //   knowMoreLink: null,
  // },

  // {
  //   image: 'assets/images/promotion/lohri.jpg',
  //   knowMoreLink: null,
  // },

  // {
  //   image: 'assets/images/popup/wpl.jpeg',
  //   knowMoreLink: null,
  // },

  {
    image: 'assets/images/promotion/chefstable.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/royal-hospitality.jpg',
    knowMoreLink: null,
  },
  // {
  //   image: 'assets/images/promotion/summer.jpg',
  //   knowMoreLink: null,
  // },
  {
    image: 'assets/images/promotion/dinnerbuffet.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/member.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/NMP.jpg',
    knowMoreLink: 'assets/images/promotion/pre-wedding.jpg',
  },
  {
    image: 'assets/images/promotion/chai_pe_charcha.jpeg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/royal_escape_noormahal.jpg',
    knowMoreLink: null,
  },
  {
    image: 'assets/images/promotion/sunday_splendor_noormahal.jpg',
    knowMoreLink: null,
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
        date: formattedDate,
        time: formattedTime,
        ipaddress: ipAddress,

        message: data.message,
        title: 'Query Form - Promotions',
        type: 'promotions',
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
        <title>Special Promotions | Noor Mahal</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='Explore our special promotions and offers at Noor Mahal. Enhance your stay with exclusive packages designed to make your experience even more memorable.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PromotionBanner />
      <main>
        <section className='promotion_wrapper default_section_gap'>
          <div className='header_area text-center mx-auto'>
            <h1 className='d-flex gap-2 justify-content-center'>
              <span className='story_title yellow-color-c2'>OUR </span>
              <span className='story_title'> SPECIAL OFFERS</span>
            </h1>
            <p className='pt-2 pb-1'>
              For our guests to make the most of our warm hospitality, we have
              curated various lucrative offers and packages. Being one of the
              best hotels in KARNAL, Noor Mahal brings an array of 'out of the
              ordinary' choices for you. Experience your money's worth with the
              most attractive offers in town.
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
                              {...register('email', {
                                required: 'Email is required!',
                              })}
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
                              {...register('phone', {
                                required: 'Phone is required!',
                              })}
                            />
                          </div>
                          <div className='col-md-6'>
                            <input
                              id='form_date'
                              type='date'
                              name='date'
                              className='form-control rounded-0'
                              placeholder='Date'
                              min={new Date().toISOString().split('T')[0]}
                              {...register('date', {
                                required: 'Date is required!',
                              })}
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
                              {...register('message', {
                                required: 'Message is required!',
                              })}
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
