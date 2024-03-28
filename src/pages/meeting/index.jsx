import MeetingBanner from '@/components/organisms/Banners/MeetingBanner';
import MeetingSlider from '@/components/organisms/MeetingSlider';
import MeetingSection from '@/components/pageComponents/meetingPage/MeetingSection';
import { getMeeting } from '@/utils/API';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function page({ meetingData }) {
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
      const response = await fetch('/api/submitMeeting', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'meetingAndConference' }), // Change the sheet name as per your requirement
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
      <main>
        <MeetingBanner />
        {/* <!-- Dinner   Section  --> */}

        <section className='dining_wrapper facilities_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              MEETINGS <br />
              <span className='black-color-0c'> FOR FLAWLESS PLANNING</span>
            </h2>
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
        <MeetingSlider />
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
                  ENQUIRY FORM
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
                                  data-error='Firstname is required.'
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
                                  data-error='Lastname is required.'
                                  {...register('email', {})}
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
                                  data-error='Valid email is required.'
                                  {...register('phone', {})}
                                />
                              </div>
                            </div>
                            <div className='col-md-6 pt-2'>
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

export default page;

export async function getServerSideProps() {
  try {
    const responseMeeting = await getMeeting();

    if (!responseMeeting || !responseMeeting.data) {
      throw new Error('Invalid Dinning API response');
    }
    const meetingData = responseMeeting.data.data || [];
    return { props: { meetingData } };
  } catch (error) {
    console.log(error);
    return { props: { meetingData: [] } };
  }
}
