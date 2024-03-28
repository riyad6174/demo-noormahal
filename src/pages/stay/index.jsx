import StayBanner from '@/components/organisms/Banners/StayPageBanner';
import Head from 'next/head';
import React from 'react';

import RoomFacilities from '@/components/pageComponents/StayPage/RoomFacilities';

import Rooms from '@/components/pageComponents/StayPage/Rooms';
import { getStayRooms } from '@/utils/API';

function page({ roomData }) {
  return (
    <div>
      <Head>
        <title>
          Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace
        </title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
        />
        <meta
          name='description'
          content='An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* banner */}
        <StayBanner />
        {/* <!-- Luxurious Section  --> */}
        <section className='luxurious_wrapper'>
          <div className='header_area text-center mx-auto'>
            <h2 className='story_title yellow-color-c2'>
              OUR <br />
              LUXURIOUS STAY
            </h2>
            <p className='pt-2 pb-1'>
              At Noormahal Palace, Karnal, we have an inventory of 125 elegant
              rooms and suites, furnished with premium furniture and upholstery.
              Despite being styled after traditional Indian architecture, no
              modern comforts have been compromised with. Immerse yourself in
              the splendour of the Indian Royalty at Noormahal Palace, ‘The
              Jewel of Karnal’.
            </p>
            <p>
              Please note that the pool at our hotel will be closed for
              maintenance from March 16th to March 24th, 2024.
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

    if (!responseRoom || !responseRoom.data) {
      throw new Error('Invalid STAY API response');
    }
    const roomData = responseRoom.data.data || [];
    return { props: { roomData } };
  } catch (error) {
    console.log(error);
    return { props: { roomData: [] } };
  }
}
