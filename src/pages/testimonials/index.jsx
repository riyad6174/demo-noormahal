import TestimonialSlider from '@/components/organisms/ImageSlider/TestimonialSlider';
import { getSeo } from '@/utils/API';
import Head from 'next/head';
import React from 'react';

function page({ seoData }) {
  return (
    <div>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
        <meta name='robots' content='index, follow' />

        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* <!-- Testimonial   Section  --> */}
        <section className='testimonial_page_wrapper default_section_gap pt-5'>
          <div className='header_area text-center mx-auto'>
            <h1 className='story_title yellow-color-c2'>
              Some words <br />
              <span className='black-color-0c'>From our Guests</span>
            </h1>
            <div className='shape2'>
              <img
                src='assets/images/shape/place_shape.png'
                alt='place shape'
              />
            </div>
          </div>
          <div className='testimonial_slider_area'>
            <div className='guest-container mx-auto'>
              <div className='position-relative'>
                <TestimonialSlider />
                <div className='testimonial_prev_btn'>
                  <i className='fa-solid fa-arrow-left-long'></i>
                </div>
                <div className='testimonial_next_btn'>
                  <i className='fa-solid fa-arrow-right-long'></i>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseSeo = await getSeo('testimonials');

    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const seoData = responseSeo.data.data || {};
    return { props: { seoData } };
  } catch (error) {
    console.log(error);
    return { props: { seoData: {} } };
  }
}
