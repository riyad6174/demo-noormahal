import { useEffect, useState } from 'react';
import Weeding from './sections/Weeding';

// import diningImageMain from '../../public/assets/images/home/dining-main.jpg';

import Link from 'next/link';
import InstaFeedGallery from './Instagram/InstaFeedGallery';
import AmenitiesSection from './pageComponents/storyPage/AmenitiesSection';
import ExperienceSection from './pageComponents/storyPage/ExperienceSection';
import Popup from './pageComponents/storyPage/Popup';
import RoomsAndSuits from './pageComponents/storyPage/RoomsAndSuits';
// import InstagramEmbed from './EmbededInstagram';

function StorySection({
  newsData,
  amenitiesData,
  experienceData,
  weddingData,
}) {
  const [showPopUp, setShowPopUp] = useState(false);
  const instaToken =
    'IGAASnGZBGM2VZABZAE5nVWRxS2xjdmYzZAlJvS0FTb3VFdEdFVnhKRFFyRG03SWFoVEwxQWhyLWctZAFc1aVV4QV85VnBBOTJkel83VV9kVEx5NlNuR3FFS1B6b1pVaDdYSU1BZAkphVlpDeFZAPeTNLeDNtcnpWaWJQOHp6OTh4YkNSSQZDZD';

  // useEffect(() => {
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, '0');
  //   let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  //   let yyyy = today.getFullYear();

  //   today = dd + '/' + mm + '/' + yyyy;
  //   // window.alert(today);

  //   if (today == '26/01/2025' || today == '27/01/2025') {
  //     setShowPopUp(true);
  //   }

  //   // const hideTimeout = setTimeout(() => {
  //   //   setShowPopUp(false);
  //   // }, 9000); // Hide after 9 seconds

  //   // Clear the timeout when the component unmounts or when showPopUp changes
  //   // return () => clearTimeout(hideTimeout);
  // }, []);

  // ===================================
  // useEffect(() => {
  //   const endTime = new Date('2026-03-28T00:00:00');
  //   if (new Date() < endTime) {
  //     setShowPopUp(true);
  //   }
  // }, []);

  // ===================================
  useEffect(() => {
    setShowPopUp(false);
  }, []);

  //=================================

  // useEffect(() => {
  //   const checkPopupTime = () => {
  //     const currentDate = new Date();
  //     // Set start and end times for the popup display window
  //     const startTime = new Date('2024-09-27T00:00:00'); // Midnight 27th September
  //     const endTime = new Date('2024-09-28T10:00:00'); // 10 AM 27th September

  //     if (currentDate >= startTime && currentDate <= endTime) {
  //       setShowPopUp(true); // Show popup
  //     } else {
  //       setShowPopUp(false); // Hide popup
  //     }
  //   };

  //   // Check popup time immediately when component mounts
  //   checkPopupTime();

  //   // Optionally, re-check every minute if you want real-time updates
  //   const intervalId = setInterval(checkPopupTime, 60 * 1000); // Check every minute

  //   // Clear interval when component unmounts to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, []);

  // useEffect(() => {
  //   const checkPopupTime = () => {
  //     const currentDate = new Date();
  //     // Set start and end times for the popup display window
  //     const startTime = new Date('2025-09-01T00:00:00'); // Start showing on 30th October
  //     const endTime = new Date('2025-09-05T06:00:00'); // Hide at 3 AM on 2nd November

  //     if (currentDate >= startTime && currentDate < endTime) {
  //       setShowPopUp(true); // Show popup
  //     } else {
  //       setShowPopUp(false); // Hide popup
  //     }
  //   };

  //   // Check popup time immediately when component mounts
  //   checkPopupTime();

  //   // Optionally, re-check every minute if you want real-time updates
  //   const intervalId = setInterval(checkPopupTime, 60 * 1000); // Check every minute

  //   // Clear interval when component unmounts to avoid memory leaks
  //   return () => clearInterval(intervalId);
  // }, []);

  return (
    <div>
      <main>
        {/* <!-- Story  Section  --> */}
        <section className='story_wrapper'>
          <div className='story-container mx-auto'>
            <div className='story_grid'>
              <div className='content item_grid' data-aos='fade-up'>
                <h2>
                  <span className='story_title yellow-color-a4'>
                    <span> Story Of</span>
                  </span>

                  <span className='story_title mt-2'>
                    <span>NoorMahal by Marriott International &nbsp; <br/> </span>
                    <span> (Autograph Collection Hotels)</span>
                  </span>
                </h2>

                <p>
                  The Story of Noor Mahal, by Marriott International Hotel
                  Embraces India’s rich heritage and endorses the opulent
                  royalty of the era of Indian maharajas. Flaunting an
                  enchanting fusion of elements inspired from traditional Mughal
                  and Rajputana schools of architecture is a unique mélange of
                  traditional royal essence with modern amenities. Noor Mahal,
                  by Marriott International Hotel in Delhi NCR exudes warmth and
                  comfort for all its guests by preserving the legacy of India’s
                  deep-rooted past heritage. Stunningly set in vast expanse of
                  natural splendor, this Marriott International Hotel is truly a
                  one of its kind Palace in the region right from Lahore to New
                  Delhi.
                </p>
                <img
                  src='assets/marriott-bonvoy-seeklogo.png'
                  alt='Marriott Bonvoy'
                  style={{ width: '200px', height: 'auto', marginTop: '20px' }}
                  data-aos='fade-up'
                />
              </div>
              <div className='story_image_area item_grid'>
                <img
                  src='assets/images/home/story_img1.jpg'
                  alt='story image'
                  data-aos='fade-up'
                />
                <img
                  src='assets/images/home/story_img2.jpg'
                  alt='story image'
                  data-aos='fade-up'
                  data-aos-delay='50'
                />
              </div>
            </div>
          </div>
        </section>

        <ExperienceSection experienceData={experienceData} />
        <RoomsAndSuits />
        <AmenitiesSection amenitiesData={amenitiesData} />
        <Weeding weddingData={weddingData} />
        {/* <section className='instagram_gallery_wrapper '>
          <InstaFeedGallery token={instaToken} limit={6} />
        </section> */}

        {/* <section className='instagram_gallery_wrapper '>
          <InstagramEmbed />
        </section> */}
        {/* <NewsSection newsData={newsData} /> */}
        <div className='marquee-wrapper pt-5'>
          <div className='marquee-content'>
            <Link
              href='https://www.gqindia.com/content/looking-for-a-secluded-valentines-day-getaway-these-places-near-mumbai-and-delhi-would-be-perfect'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    paddingBottom: '10px',
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img src='/assets/images/news/gq.png' alt='ad-news ' />
                </div>
                <p className='news-text pt-4'>
                  Looking for a secluded Valentine's Day getaway? These 11
                  places near Mumbai and Delhi would be perfect
                </p>
              </div>
            </Link>
            <Link
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img src='/assets/images/news/press2.webp' alt='ad-news ' />
                </div>
                <p className='news-text pt-2'>
                  Noor Mahal In Karnal Invites You To Enjoy A Regal Stay, This
                  Long Weekend
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxurytravelmagazine.com/news-articles/enjoy-lavish-celebrations-at-indias-incredible-palace-hotel-noor-mahal'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press3.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Enjoy Lavish Celebrations at India's Incredible Palace Hotel,
                  Noormahal
                </p>
              </div>
            </Link>
            <Link
              href='https://thedailyguardian.com/roop-partap-choudhary-recreating-old-wines-in-new-bottles/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press4.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Roop Pratap Choudhary: Recreating old wines in new bottle
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxuryfacts.com/index.php/sections/article/Noor-Mahal-A-Pinnacle-of-Royal-Palace-Life'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press5.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-3'>
                  Noormahal - A Pinnacle of Royal Palace Life
                </p>
              </div>
            </Link>
            <Link
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img src='/assets/images/news/press2.webp' alt='ad-news ' />
                </div>
                <p className='news-text pt-2'>
                  Noor Mahal In Karnal Invites You To Enjoy A Regal Stay, This
                  Long Weekend
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxurytravelmagazine.com/news-articles/enjoy-lavish-celebrations-at-indias-incredible-palace-hotel-noor-mahal'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press3.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Enjoy Lavish Celebrations at India's Incredible Palace Hotel,
                  Noormahal
                </p>
              </div>
            </Link>
            <Link
              href='https://thedailyguardian.com/roop-partap-choudhary-recreating-old-wines-in-new-bottles/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press4.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Roop Pratap Choudhary: Recreating old wines in new bottle
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxuryfacts.com/index.php/sections/article/Noor-Mahal-A-Pinnacle-of-Royal-Palace-Life'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press5.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-3'>
                  Noormahal - A Pinnacle of Royal Palace Life
                </p>
              </div>
            </Link>
            <Link
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img src='/assets/images/news/press2.webp' alt='ad-news ' />
                </div>
                <p className='news-text pt-2'>
                  Noor Mahal In Karnal Invites You To Enjoy A Regal Stay, This
                  Long Weekend
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxurytravelmagazine.com/news-articles/enjoy-lavish-celebrations-at-indias-incredible-palace-hotel-noor-mahal'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div
                className='d-flex align-items-center gap-4 justify-content-center  text-center '
                style={{}}
              >
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press3.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Enjoy Lavish Celebrations at India's Incredible Palace Hotel,
                  Noormahal
                </p>
              </div>
            </Link>
            <Link
              href='https://thedailyguardian.com/roop-partap-choudhary-recreating-old-wines-in-new-bottles/'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press4.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-2'>
                  Roop Pratap Choudhary: Recreating old wines in new bottle
                </p>
              </div>
            </Link>
            <Link
              href='https://www.luxuryfacts.com/index.php/sections/article/Noor-Mahal-A-Pinnacle-of-Royal-Palace-Life'
              style={{
                textDecoration: 'none',
                padding: '0 30px',
                borderRight: '2px solid gray',
              }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  text-center '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press5.png'
                    alt='ad-news'
                    style={{
                      objectFit: 'contain',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </div>
                <p className='news-text pt-3'>
                  Noormahal - A Pinnacle of Royal Palace Life
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      {/* <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp} /> */}
      <Popup
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        className={` ${showPopUp ? 'show-modal' : 'hide-modal'}  `}
      />
    </div>
  );
}

export default StorySection;
