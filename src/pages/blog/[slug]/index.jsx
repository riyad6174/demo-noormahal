import { getSingleBlog } from '@/utils/API';
import { BlogMain } from '@/utils/Contents/blog';
import parse from 'html-react-parser';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

function Index({ data }) {
  const router = useRouter();
  const { slug } = router.query; // Get the slug from the router
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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

  const onSubmitDining = async (data) => {
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

    // Reset the form after submission
    reset();
  };

  return (
    <div>
      <Head>
        <title>
          {data && data.title
            ? data.title
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content={
            data && data.keyWords
              ? data.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          }
        />
        <meta
          name='description'
          content={
            data && data.subTitle
              ? data.subTitle
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:url'
          content={`https://api.noormahalpalace.com/${router.asPath}`}
        />
        <meta property='og:title' content={data?.title || 'Default Title'} />
        <meta
          property='og:description'
          content={data?.subTitle || 'Default Description'}
        />
        <meta
          property='og:image'
          content={`https://api.noormahalpalace.com/${data.image?.path}`}
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:url'
          content={`https://api.noormahalpalace.com/${router.asPath}`}
        />
        <meta
          property='twitter:title'
          content={data?.title || 'Default Title'}
        />
        <meta
          property='twitter:description'
          content={data?.subTitle || 'Default Description'}
        />
        <meta
          property='twitter:image'
          content={`https://api.noormahalpalace.com/${data.image?.path}`}
        />
      </Head>
      {data && (
        <section className='blog_details_wrapper default_section_gap pt-5'>
          <div className='instagram-container mx-auto'>
            <div className='blog_details_content mx-auto'>
              <h3 className='blog_title'>{data?.title}</h3>
              <div className='blog_footer d-flex align-items-center flex-wrap'>
                {data.image?.path && (
                  <div className='user_grid'>
                    <a href='#'>
                      <img
                        src={`https://api.noormahalpalace.com/${data.image?.path}`}
                        alt='user image'
                      />
                    </a>
                    <a href='#'>{data?.author}</a>
                  </div>
                )}
                <a href='#'>{data?.publishedDate}</a>
              </div>
            </div>
            {data.image && (
              <div className='blog_details_img text-center'>
                <img
                  src={`https://api.noormahalpalace.com/${data.image?.path}`}
                  alt='user image'
                />
              </div>
            )}

            <div className='blog_details_content mx-auto'>
              <div
                className='content_item'
                dangerouslySetInnerHTML={{ __html: data?.description }}
              >
                {}
              </div>
            </div>
            {slug ===
              'celebrate-new-year-2025-in-randeur-with-noormahal-palaces-exclusive-packages' && (
              <div className='row'>
                <div className='col-lg-12 p-4'>
                  <div className='container d-flex justify-content-center'>
                    <img
                      src='/assets/images/blog/af.jpg'
                      alt='african-night'
                      className=''
                    />
                  </div>
                </div>
                <div className='col-lg-12 p-4'>
                  <div className='card-body rounded-0'>
                    <div className='container d-flex justify-content-center'>
                      <form
                        id='contact-form'
                        role='form'
                        onSubmit={handleSubmit(onSubmit)}
                        className='form-container'
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
                                  min={new Date().toISOString().split('T')[0]}
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
                                className='book_table_btn w-100 btn-block'
                              >
                                {isLoading ? (
                                  <span>Submitting.. </span>
                                ) : (
                                  <span>
                                    {isSubmitted ? 'SUBMITTED' : 'ENQUIRE NOW'}
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
            )}
            {slug ===
              'indulge-in-luxury-dining-at-noormahal-palace-the-best-romantic-dining-experience' && (
              <div className='row p-4'>
                {/* Image Grid */}
                <div className='col-lg-12'>
                  <div className='container'>
                    <div className='row mb-4'>
                      <div className='col-md-6 p-2 '>
                        <img
                          src='/assets/images/dinings/polo_bar_2.jpg'
                          alt='image1'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className='col-md-6 p-2'>
                        <img
                          src='/assets/images/dinings/brown_sugar.jpg'
                          alt='image2'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className='col-md-6 p-2'>
                        <img
                          src='/assets/images/dinings/cakefactory.jpg'
                          alt='image3'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className='col-md-6 p-2'>
                        <img
                          src='/assets/images/dinings/frontier_mail_1.jpg'
                          alt='image4'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '450px',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <hr />
                <div className='col-lg-12 p-4 mx-auto'>
                  <div className='card-body rounded-0'>
                    <h4 className='text-center'>Book A Table</h4>
                    <div className='container px-5'>
                      <form
                        id='contact-form'
                        role='form'
                        onSubmit={handleSubmit(onSubmitDining)}
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
                                  min={new Date().toISOString().split('T')[0]}
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
            )}
            {slug ===
              'celebrate-holi-in-royal-style-at-noormahal-palace-rang-barse-festival' && (
              <div className='row p-4'>
                {/* Image Grid */}
                <div className='col-lg-12'>
                  <div className='container'>
                    <div className='row mb-4'>
                      <div className='col-md-6 p-2 '>
                        <img
                          src='/assets/images/blog/rang-barse-post2.jpg'
                          alt='image1'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '100%',
                            // objectFit: 'cover',
                          }}
                        />
                      </div>
                      <div className='col-md-6 p-2'>
                        <img
                          src='/assets/images/blog/rang-barse-post1.jpg'
                          alt='image2'
                          className='img-fluid rounded'
                          style={{
                            width: '100%',
                            height: '100%',
                            // objectFit: 'cover',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Booking Form */}
                <hr />
                <div className='col-lg-12 p-4 mx-auto'>
                  <div className='card-body rounded-0'>
                    <h4 className='text-center'>Enquire Now</h4>
                    <div className='container px-5'>
                      <form
                        id='contact-form'
                        role='form'
                        onSubmit={handleSubmit(onSubmitDining)}
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
                                  defaultValue={
                                    new Date().toISOString().split('T')[0]
                                  }
                                  min={new Date().toISOString().split('T')[0]}
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
            )}
          </div>

          {/* Conditional Form Rendering */}
        </section>
      )}
    </div>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const { slug } = context.query;
  console.log(slug, 'Slug');

  // Fetch data for the specific blog post using the slug
  const response = await getSingleBlog(slug);

  // Pass the fetched data as props to the component
  return {
    props: {
      data: response?.data?.data || null,
    },
  };
}
