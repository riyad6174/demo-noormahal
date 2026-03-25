import StayBanner from '@/components/organisms/Banners/StayPageBanner';
import Head from 'next/head';
import React from 'react';

import RoomFacilities from '@/components/pageComponents/StayPage/RoomFacilities';

import Rooms from '@/components/pageComponents/StayPage/Rooms';
import { getSeo, getStayRooms } from '@/utils/API';

function page({ roomData, seoData }) {
  console.log(seoData, 'seo data');
  return (
    <div>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel Noor Mahal'}
        </title>
        <meta name='robots' content='index, follow' />

        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel Noor Mahal offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* banner */}
        <div id='custom-swiper-bottom'>
          <StayBanner />
        </div>
        {/* <!-- Luxurious Section  --> */}
        <section className='luxurious_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              OUR <br />
              LUXURIOUS STAY
            </h2>
            <p className='pt-2 pb-1'>
              At Noor Mahal, Karnal, we have an inventory of 176 elegant rooms and suites, furnished with premium furniture and upholstery. Despite being styled after traditional Indian architecture, no modern comforts have been compromised with. Immerse yourself in the splendour of the Indian Royalty at Noor Mahal, ‘The Jewel of Karnal’
            </p>
            <p>
              {' '}
              Note: Dear Guest, our rooftop is undergoing soft refurbishment to enhance your future experience; we apologize for any inconvenience and appreciate your patience.
            </p>

            <div className='shape2'>
              <img
                src='assets/images/shape/experience_shape.png'
                alt='place shape'
              />
            </div>
          </div>
          {/* rooms section */}
          <Rooms roomData={roomData} />
        </section>
        <RoomFacilities />
      </main>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseRoom = await getStayRooms();
    const responseSeo = await getSeo('stay');

    if (!responseRoom || !responseRoom.data) {
      throw new Error('Invalid STAY API response');
    }
    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const roomData = responseRoom.data.data || [];
    const seoData = responseSeo.data.data || {};
    return { props: { roomData, seoData } };
  } catch (error) {
    console.log(error);
    return { props: { roomData: [], seoData: {} } };
  }
}
