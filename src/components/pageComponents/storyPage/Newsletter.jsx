import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function Newsletter() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      //   setIsLoading(true);
      const response = await fetch('/api/submitNewsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, sheetName: 'newsletter' }), // Change the sheet name as per your requirement
      });
      //   setIsLoading(false);
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
    <section className='newsletter_wrapper container '>
      <div className='instagram-container mx-auto px-2'>
        <div className='newletter_grid '>
          <h3>
            SPECIAL OFFERS <span>into your inbox</span>
          </h3>

          <form action='' onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              placeholder='YOUR EMAIL ADDRESS'
              name='email'
              {...register('email', {})}
            />
            <button type='submit'>-SIGN UP</button>
          </form>
        </div>
        {isSubmitted && (
          <div>
            <p>
              Thank you for reaching out to us. We will get back to you at
              earliest.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
