import { baseURL } from '@/utils/API';
import { format } from 'date-fns';
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
        ipaddress: ipAddress,
        date: formattedDate,
        time: formattedTime,
        message: data.message,
        title: 'Query Form - Contact',
        type: 'contact',
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
        <title>Contact Us | Noor Mahal</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
        />
        <meta name='robots' content='index, follow' />
        <meta
          name='description'
          content='Contact Noor Mahal for reservations, inquiries, and assistance. Our dedicated team is here to help you plan your perfect getaway, event, or dining experience.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <section className='contact_wrapper default_section_gap pt-5'>
        <div className='header_area text-center mx-auto'>
          <h1 className='story_title yellow-color-c2'>
            HOW CAN YOU
            <br />
            <span className='black-color-0c'>REACH US </span>
          </h1>
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
                    Noor Mahal is connected by roads and national highways
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
                    private buses and ordinary bus services from Noor Mahal,
                    Autograph Collection, Marriott International Hotel.
                  </p>
                </div>
              </div>
            </div>
            <div className='overlay' id='dropdwonOverlay'></div>
          </div>
          <div className='map_area container'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13862.98310637001!2d77.0304025!3d29.6981494!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e65572f52f80b%3A0xfdf50a402caa8cd2!2sNoormahal%20Palace%20Hotel!5e0!3m2!1sen!2sin!4v1688563762636!5m2!1sen!2sin'
              allowfullscreen=''
              loading='lazy'
              style={{ border: 0 }}
              referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
          </div>
          <div className='guest-container mx-auto'>
            <div className=''>
              <p style={{ fontSize: '12px' }}>
                Latitude & Longitude : @29.6981494,77.0304025
              </p>
            </div>
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
                <div className='input_row'>
                  <textarea
                    name='message'
                    id=''
                    rows='4'
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
              </form>
              <div className='contact_info p-4 m-2'>
                <h3>Karnal Office</h3>
                <p>
                  {' '}
                  Noor Mahal By Marriott International NH-44, Sector-32,
                  Karnal.(Haryana)
                </p>
                {/* <p> Sector-32, Delhi (NCR) INDIA</p> */}
                <p> Tel : +919996787904, 999678792/93/97</p>
                <p style={{ textDecoration: 'none' }}>
                  <a href='mailto:Teena.Nichani@marriott.com'>
                    Teena.Nichani@marriott.com
                  </a>{' '}
                  <br />
                  {/* <a href='mailto:salesbqts@noormahal.in'>
                    salesbqts@noormahal.in
                  </a> */}
                </p>
              </div>
            </div>
            <div className='contact_grid mt-5 container'>
              <div className='location_area'>
                <h3 className='luxurious_title black-color-0c'>
                  ROOM / MICE SALES DIVISION
                </h3>
                <ul className='location_list'>
                  <li>
                    <b>Karnal Office :</b> Noor Mahal Autograph Collection
                    Hotels, Nirmal Kutia Chowk
                  </li>
                  <li>
                    <p>Sector-32, Delhi (NCR) INDIA</p>
                  </li>
                  <li>
                    Tel :{' '}
                    <a href='tel:+91 9996787891'>
                      {' '}
                      +91 9996787891/92/93/97/904
                    </a>
                  </li>
                  <li>
                    Email :{' '}
                    <a href='mailto:sales@noormahal.in '>
                      sales@noormahal.in /
                    </a>
                    <a href='mailto:salesbqts@noormahal.in'>
                      salesbqts@noormahal.in
                    </a>
                  </li>
                </ul>
                <ul className='location_list'>
                  <li>Director of Sales & Marketing</li>
                  <li>
                    Mobile : <a href='tel: +919996787904'> +91 9996787904</a>
                  </li>
                  <li>
                    Email :{' '}
                    <a href='mailto:dsm@noormahal.in'> dsm@noormahal.in</a>
                  </li>
                </ul>
                <ul className='location_list'>
                  <li>Mahesh Singh Jasrotia</li>
                  <li>Corporate General Manager</li>
                  {/* <li>
                    Mobile : <a href='tel:+919996787881'> +91 9996787881</a>
                  </li> */}
                  <li>
                    Email :{' '}
                    <a href='mailto:cgm@noormahal.in'> gm@noormahal.in</a>
                  </li>
                </ul>
              </div>
              <div className='location_area'>
                <h3 className='luxurious_title black-color-0c'>NOOR MAHAL</h3>
                <ul className='location_list'>
                  <li>
                    Noor Mahal Autograph Collection Hotels, Nirmal Kutia Chowk
                  </li>
                  <li>
                    <p>Sector-32, Delhi (NCR) INDIA</p>
                  </li>
                  <li>
                    Tel :{' '}
                    <a href='tel:+91 9996787891'>
                      {' '}
                      +91 9996787891/92/93/97/904
                    </a>
                  </li>
                  <li>
                    Email :{' '}
                    <a href='mailto:info@noormahal.in'> info@noormahal.in</a>
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
        </div>
      </section>
    </div>
  );
}

export default index;
