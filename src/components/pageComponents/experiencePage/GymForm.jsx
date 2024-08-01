import { postEnquire } from '@/utils/API';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function GymForm() {
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

    // try {
    //   setIsLoading(true);
    //   data.title = "Gym";
    //   data.type = "enquire";
    //   const response = await postEnquire(data);
    //   setIsLoading(false);
    //   if (response.status == 200 || response.status == 200) {
    //     console.log("Form data submitted successfully!");
    //     setIsSubmitted(true);

    //   } else {
    //     console.error('Failed to submit form data.');
    //   }
    // } catch (error) {
    //   console.error('Error submitting form data:', error);
    // }

    // Reset the form after submission
    reset();
  };
  return (
    <div>
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
                      Thank you for reaching out to us. We will get back to you
                      at earliest.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GymForm;
