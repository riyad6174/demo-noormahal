import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from 'date-fns';
import { baseURL } from '@/utils/API';

function RecreationForm() {
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
        ipaddress: ipAddress,

        message: data.message,
        date: formattedDate,
        time: formattedTime,
        title: 'Query Form - Recreational',
        type: 'experience',
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
          'Form data submitted successfully to both spreadsheet and backend!'
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
                      <div className='form-group'>
                        <input
                          id='form_name'
                          type='text'
                          name='name'
                          className='form-control rounded-0'
                          placeholder='Name'
                          required='required'
                          data-error='Name is required.'
                          {...register('name', {
                            required: 'Name is required!',
                          })}
                        />
                        {errors.name && (
                          <span className='text-sm text-red-500'>
                            {errors.name?.message}
                          </span>
                        )}
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
                          data-error='Email is required.'
                          {...register('email', {
                            required: 'Email is required!',
                          })}
                        />
                        {errors.email && (
                          <span className='text-sm text-red-500'>
                            {errors.email?.message}
                          </span>
                        )}
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
                          data-error='Phone is required.'
                          {...register('phone', {
                            required: 'Phone is required!',
                          })}
                        />
                        {errors.phone && (
                          <span className='text-sm text-red-500'>
                            {errors.phone?.message}
                          </span>
                        )}
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
                          data-error='Message is required.'
                          {...register('message', {
                            required: 'Message is required!',
                          })}
                        ></textarea>
                        {errors.message && (
                          <span className='text-sm text-red-500'>
                            {errors.message?.message}
                          </span>
                        )}
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
                          <span>{isSubmitted ? 'SUBMITTED' : 'SUBMIT'}</span>
                        )}
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

export default RecreationForm;
