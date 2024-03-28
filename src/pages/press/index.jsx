import LatestNews from '@/components/pageComponents/pressPage/LatestNews';
import TwentyThree from '@/components/pageComponents/pressPage/TwentyThree';
import TwentyTwo from '@/components/pageComponents/pressPage/TwentyTwo';
import TwentyFour from '@/components/pageComponents/pressPage/TwentyFour'; // Import the component for 2024
import Head from 'next/head';
import React from 'react';
import AwardSlider from '@/components/pageComponents/pressPage/AwardSlider';

function Index() {
  return (
    <div>
      <Head>
        <title>Media Covers | Noormahal Palace</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
        />
        <meta
          name='description'
          content='⦁	Latest news, events, and media coverage of Noormahal Palace - Your gateway to a world of luxury and heritage!'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='media_wrapper default_section_gap pt-5'>
        <AwardSlider />

        <div className='header_area text-center mx-auto'>
          <h2 className='story_title yellow-color-c2'>
            OUR <br />
            <span className='black-color-0c'> LATEST NEWS</span>
          </h2>
          <p className='pt-2 pb-1'>
            One of the most preferred destinations for a big fat Indian wedding
            or for a leisurely weekend getaway, Hotel Noormahal Palace has been
            the receiver of many accolades. To learn more about us, explore
            these news bites.
          </p>
        </div>
        <div className='instagram-container mx-auto px-3'>
          <LatestNews />
          <div className='default_section_gap'>
            <div className='header_area text-center mx-auto'>
              <h2 className='story_title yellow-color-c2'>
                OUR &nbsp;
                <span className='black-color-0c'> NEWS</span>
              </h2>
            </div>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-contact-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-contact'
                  type='button'
                  role='tab'
                  aria-controls='pills-contact'
                  aria-selected='false'
                >
                  2024
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link '
                  id='pills-profile-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-profile'
                  type='button'
                  role='tab'
                  aria-controls='pills-profile'
                  aria-selected='false'
                >
                  2023
                </button>
              </li>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  2022
                </button>
              </li>
              {/* New tab for 2024 */}
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade '
                id='pills-profile'
                role='tabpanel'
                aria-labelledby='pills-profile-tab'
                tabIndex='0'
              >
                <TwentyThree />
              </div>
              <div
                className='tab-pane fade'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
                tabIndex='1'
              >
                <TwentyTwo />
              </div>
              {/* Content for 2024 tab */}
              <div
                className='tab-pane fade show active'
                id='pills-contact'
                role='tabpanel'
                aria-labelledby='pills-contact-tab'
                tabIndex='2'
              >
                <TwentyFour />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
