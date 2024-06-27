import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function SpaBookForm() {
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
      const response = await fetch('/api/submitEvents', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'experience' }), // Change the sheet name as per your requirement
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

  // const onSubmit = async (data) => {
  //   try {
  //     setIsLoading(true);
  //     const response = await fetch('/api/submitPromotion', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ ...data, sheetName: 'promotions' }), // Change the sheet name as per your requirement
  //     });
  //     setIsLoading(false);
  //     if (response.ok) {
  //       console.log('Form data submitted successfully!');
  //       setIsSubmitted(true);
  //     } else {
  //       console.error('Failed to submit form data.');
  //     }
  //   } catch (error) {
  //     console.error('Error submitting form data:', error);
  //   }

  //   // Reset the form after submission
  //   reset();
  // };
  return (
    <div>
      <section className='spa_book_wrapper'>
        <div className='spa-price-container mx-auto'>
          <div className='book_gird'>
            <div className='book_content right_border'>
              {/* <h6>Wellness</h6> */}
              <h4 className='story_title yellow-color-c2'>WORKING HOURS</h4>
              <div className='time_item'>
                <h4 className='time_text'>
                  Monday – Sunday <br /> 11:00 Hours – 20:00 Hours
                </h4>
              </div>

              <h4 className='story_title yellow-color-c2 py-2'>
                Contact Details
              </h4>
              <div className='time_item'>
                <h4>
                  Tel :<a href='tel:+91-184-71733-361'> +91-184-71733-361 | </a>
                  <a href='tel:+91-999-678-7890'> +91-999-678-7890 </a>
                </h4>

                <h4>
                  Email:{' '}
                  <a href='mailto:healthclub@noormahal.in'>
                    healthclub@noormahal.in
                  </a>{' '}
                  <br />
                  Web :{' '}
                  <a href='https://www.noormahalpalace.com/' target='_blank'>
                    www.noormahal.com
                  </a>{' '}
                </h4>
              </div>
            </div>
            <div className='book_form_wrapper right_border text-center'>
              <h5>Reservation</h5>
              <h3 className='story_title'>BOOK A TREATMENT</h3>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='book_form_area needs-validation'
                role='form'
                noValidate
              >
                <div className='input_row'>
                  <input
                    type='text'
                    placeholder='Your Name'
                    required
                    name='name'
                    {...register('name', {
                      required: 'Name is required!',
                    })}
                  />
                  <div className='invalid-feedback'>Name is required</div>
                </div>
                <div className='input_row'>
                  <input
                    type='email'
                    placeholder='Email'
                    required
                    name='email'
                    {...register('email', {
                      required: 'Email is required!',
                    })}
                  />
                  <div className='invalid-feedback'>Email is required</div>
                </div>
                <div className='input_row'>
                  <input
                    type='number'
                    placeholder='Phone Number'
                    required
                    name='phone'
                    {...register('phone', {
                      required: 'Phone is required!',
                    })}
                  />
                  <div className='invalid-feedback'>
                    Phone Number is required
                  </div>
                </div>
                <div className='input_row'>
                  <button type='submit' className='view_more_btn w-100'>
                    <span>BOOK NOW</span>
                  </button>
                </div>
                {isSubmitted && (
                  <div>
                    <p>
                      Thank you for reaching out to us. We will get back to you
                      at earliest.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpaBookForm;
