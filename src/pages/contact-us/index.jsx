import { postContact } from '@/utils/API';
import Head from 'next/head';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { BiMinus, BiPlus } from 'react-icons/bi';

function index() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toggledTrain, setToggledTrain] = useState(false);
  const [toggledAir, setToggledAir] = useState(false);
  const [toggledRoad, setToggledRoad] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleToggle = (value) => {
    // setToggledAir(false);
    // setToggledRoad(false);

    if (value == 'train') {
      setToggledTrain(!toggledTrain);
    } else {
      setToggledTrain(false);
    }

    if (value == 'air') {
      setToggledAir(!toggledAir);
    } else {
      setToggledAir(false);
    }

    if (value == 'road') {
      setToggledRoad(!toggledRoad);
    } else {
      setToggledRoad(false);
    }
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      data.title = 'contact';
      data.type = 'contact';
      const response = await postContact(data);
      setIsLoading(false);
      if (response.status == 200 || response.status == 200) {
        console.log('Form data submitted successfully!');
        setIsSubmitted(true);
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
        <title>Contact Us | Noormahal Palace</title>
        <meta
          name='keywords'
          content='wedding venues in chandigarh,
                wedding destination near delhi,
                Luxury 5 Star Hotels in Karnal,'
        />
        <meta
          name='description'
          content='Contact Noormahal Palace for reservations, inquiries, and assistance. Our dedicated team is here to help you plan your perfect getaway, event, or dining experience.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='contact_wrapper default_section_gap pt-5'>
        <div className='header_area text-center mx-auto'>
          <h2 className='story_title yellow-color-c2'>
            HOW CAN YOU
            <br />
            <span className='black-color-0c'>REACH US </span>
          </h2>
          <div className='shape2'>
            <img src='assets/images/shape/place_shape.png' alt='place shape' />
          </div>
          <p className='pt-2 pb-1'>
            In case of any confusion or to get further clarifications, write to
            us at the email ID given below. We will get back to you as soon as
            possible. Alternatively, you may contact our office on the number
            given below.
          </p>
        </div>
        <div className='contact_area'>
          <div
            className='address_dropdown_area d-flex-between'
            id='contactAccordion'
          >
            <h4>REACHING KARNAL</h4>
            <div className='button_list d-flex align-items-center flex-wrap'>
              <div
                className={`address_item ${
                  toggledTrain ? 'address_active' : ''
                }`}
              >
                <button
                  type='button'
                  className='dropdonw_btn  d-flex-between '
                  onClick={() => {
                    // setToggledTrain(!toggledTrain);
                    handleToggle('train');
                  }}
                >
                  <span>BY TRAIN </span>
                  <div className='icon'>
                    {toggledTrain ? <BiMinus /> : <BiPlus />}
                  </div>
                </button>
                <div className='address_area '>
                  <h4>BY TRAIN</h4>
                  <p>
                    The vintage historical Karnal railway station is situated 7
                    KM away from the main Delhi-Panipat-Karnal-Ambala-Kalka line
                    also called DUK route.
                  </p>
                </div>
              </div>
              <div
                className={`address_item ${toggledAir ? 'address_active' : ''}`}
              >
                <button
                  type='button'
                  className='dropdonw_btn  d-flex-between '
                  onClick={() => {
                    // setToggledAir(!toggledAir);
                    handleToggle('air');
                  }}
                >
                  <span>BY AIR </span>
                  <div className='icon'>
                    {toggledAir ? <BiMinus /> : <BiPlus />}
                  </div>
                </button>
                <div className='address_area '>
                  <h4>BY AIR</h4>
                  <p>
                    The vintage historical Karnal railway station is situated 7
                    KM away from the main Delhi-Panipat-Karnal-Ambala-Kalka line
                    also called DUK route.
                  </p>
                  <ul>
                    <li>
                      <b> Delhi Airport:</b> 142 KM |
                    </li>
                    <li>
                      <b>Karnal Airport:</b> 3 KM
                    </li>
                    <li>
                      <b>Chandigarh:</b> 132 KM.
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`address_item ${
                  toggledRoad ? 'address_active' : ''
                }`}
              >
                <button
                  type='button'
                  className='dropdonw_btn  d-flex-between '
                  onClick={() => {
                    handleToggle('road');
                  }}
                >
                  <span>BY ROAD</span>
                  <div className='icon'>
                    {toggledRoad ? <BiMinus /> : <BiPlus />}
                  </div>
                </button>
                <div className='address_area '>
                  <h4>BY ROAD</h4>
                  <p>
                    Noormahal Palace is connected by roads and national highways
                    connecting major cities like
                  </p>
                  <ul>
                    <li>
                      <b>Delhi : </b> 122 KM
                    </li>
                    <li>
                      <b>Chandigarh:</b> 127 KM
                    </li>
                    <li>
                      <b>Karnal:</b> 6 KM.
                    </li>
                    <li>
                      <b>Punjab:</b> 262 KM.
                    </li>
                  </ul>
                  <p>
                    Visitors can also avail state roadways and air conditioned
                    private buses and ordinary bus services from
                    Noormahal Palace.
                  </p>
                </div>
              </div>
            </div>
            <div className='overlay' id='dropdwonOverlay'></div>
          </div>
          <div className='map_area container'>
            {/*  style='border: 0' */}
            {/* <iframe
                  src='https://www.google.com/maps/embed?'
                  allowfullscreen=''
                  loading='lazy'
                  referrerpolicy='no-referrer-when-downgrade'
                ></iframe> */}
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13862.98310637001!2d77.0304025!3d29.6981494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e65572f52f80b%3A0xfdf50a402caa8cd2!2sNoormahal%20Palace%20Hotel!5e0!3m2!1sen!2sin!4v1688563762636!5m2!1sen!2sin'
              allowfullscreen=''
              loading='lazy'
              style={{ border: 0 }}
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='guest-container mx-auto'>
            <div className='contact_grid container'>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='book_form_area needs-validation'
                novalidate
              >
                <div>
                  <h3 className='luxurious_title black-color-0c py-2'>
                    Contact
                  </h3>
                </div>
                <div className='form_grid'>
                  <div className='input_row'>
                    <input
                      type='text'
                      placeholder='Your Name'
                      required
                      name='name'
                      {...register('name', {})}
                    />
                    <div className='invalid-feedback'>Name is required</div>
                  </div>
                  <div className='input_row'>
                    <input
                      type='email'
                      placeholder='Email'
                      required
                      name='email'
                      {...register('email', {})}
                    />
                    <div className='invalid-feedback'>Email is required</div>
                  </div>
                </div>
                <div className='form_grid'>
                  <div className='input_row'>
                    <input
                      type='tel'
                      name='phone'
                      placeholder='Phone Number'
                      required
                      {...register('phone', {})}
                    />
                    <div className='invalid-feedback'>
                      Phone Number is required
                    </div>
                  </div>
                </div>

                <div className='input_row  '>
                  <textarea
                    name='message'
                    id=''
                    rows='2'
                    className='w-100 border-0'
                    placeholder='Write Message'
                    required
                    {...register('message', {})}
                  ></textarea>
                  <div className='invalid-feedback'>Message is required</div>
                </div>
                <div className='input_row'>
                  <button type='submit' className='view_more_btn'>
                    <span> SUBMIT</span>
                  </button>
                </div>
                {isSubmitted && (
                  <div
                    className='d-flex justify-content-start align-items-start flex-column pt-4 px-4 m-2'
                    style={{
                      backgroundColor: '#faf4ea',
                      transition: 'all ease-in-out 0.2s ',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: '#c29a5c',
                      }}
                    >
                      Thanks For Contacting us!
                    </p>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: '400',
                        color: '#c29a5c',
                      }}
                    >
                      We appreciate that you have taken the time to write us.{' '}
                      <br />I will respond very soon.
                    </p>
                  </div>
                )}
              </form>
              {/* Noormahal Palace, Nirmal Kutia Chowk ,NH1 Sector-32, Karnal-Delhi (NCR) INDIA */}
              <div className='contact_info p-4 m-2'>
                <h3>Karnal Office</h3>
                <p> Noormahal Palace, Nirmal Kutia Chowk </p>
                <p> Sector-32, Karnal-Delhi (NCR), INDIA</p>
                <p> Tel:+91 9996787891/92/93/97/904</p>
                <p> Email :sales@noormahal.in /salesbqts@noormahal.in</p>
              </div>
            </div>
            <div className='contact_grid mt-5 container'>
              <div className='location_area'>
                <h3 className='luxurious_title black-color-0c'>
                  ROOM / MICE SALES DIVISION
                </h3>
                <ul className='location_list'>
                  <li>
                    <b>Karnal Office :</b> Noormahal Palace, Nirmal Kutia Chowk
                  </li>
                  <li>
                    <p>Sector-32, Karnal-Delhi (NCR), INDIA</p>
                  </li>
                  <li>
                    Tel:
                    <a href='tel:+91 9996787891'>+91 9996787891/92/93/97/904</a>
                  </li>
                  <li>
                    Email :
                    <a href='mailto:sales@noormahal.in '>
                      sales@noormahal.in /
                    </a>
                    <a href='mailto:salesbqts@noormahal.in'>
                      salesbqts@noormahal.in
                    </a>
                  </li>
                </ul>
                <ul className='location_list'>
                  <li>Chander Shekhar Puri</li>
                  <li>Corporate General Manager</li>
                  <li>
                    Mobile :<a href='tel:+919996787881'> +91 9996787881</a>
                  </li>
                  <li>
                    Email :
                    <a href='mailto:cgm@noormahal.in'>cgm@noormahal.in</a>
                  </li>
                </ul>
              </div>
              <div className='location_area'>
                <h3 className='luxurious_title black-color-0c'>
                  NOORMAHAL PALACE
                </h3>
                <ul className='location_list'>
                  <li>Noormahal Palace, Nirmal Kutia Chowk</li>
                  <li>
                    <p>Sector-32, Karnal-Delhi (NCR) INDIA.</p>
                  </li>
                  <li>
                    Tel:
                    <a href='tel:+91 9996787891'>+91 9996787891/92/93/97/904</a>
                  </li>
                  <li>
                    Email :
                    <a href='mailto:info@noormahal.in'>info@noormahal.in</a>
                  </li>
                </ul>
                <ul className='location_list'>
                  <li>Jewel Classic Hotels Private Limited</li>
                  <li>Jewels Hotel, Near NDRI Gate, Kunjpura Road,</li>
                  <li>Karnal, Karnal</li>
                  <li>Haryana, 132001</li>
                  <li>GST Registration Number : 06AAACJ7678J1Z4</li>
                </ul>
              </div>
            </div>
          </div>
          {/* <img
            src='assets/images/shape/left_flowerbg_top.png'
            alt='flower shape'
            className='left_shape'
          />
          <img
            src='assets/images/shape/right_flowerbg_botom.png'
            alt='flower shape'
            className='right_shape'
          /> */}
        </div>
      </section>
    </div>
  );
}

export default index;
