import { useEffect, useState } from 'react';
import Weeding from './sections/Weeding';

import Link from 'next/link';
import InstaFeedGallery from './Instagram/InstaFeedGallery';
import AmenitiesSection from './pageComponents/storyPage/AmenitiesSection';
import ExperienceSection from './pageComponents/storyPage/ExperienceSection';
import Popup from './pageComponents/storyPage/Popup';
import RoomsAndSuits from './pageComponents/storyPage/RoomsAndSuits';

function StorySection({
  newsData,
  amenitiesData,
  experienceData,
  weddingData,
}) {
  const [showPopUp, setShowPopUp] = useState(false);

  // ===================================
  // TEMPORARY: Always show popup (for current promo period)
  useEffect(() => {
    setShowPopUp(true);
  }, []);

  // ===================================
  // COMMENTED: Initial single-image popup logic (uncomment to revert)
  // useEffect(() => {
  //   let today = new Date();
  //   let dd = String(today.getDate()).padStart(2, '0');
  //   let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  //   let yyyy = today.getFullYear();

  //   today = dd + '/' + mm + '/' + yyyy;

  //   if (today == '26/01/2025' || today == '27/01/2025') {
  //     setShowPopUp(true);
  //   }
  // }, []);

  // ===================================
  // COMMENTED: Example date-range popup logic (uncomment and adjust for future use)
  // useEffect(() => {
  //   const checkPopupTime = () => {
  //     const currentDate = new Date();
  //     const startTime = new Date('2025-09-01T00:00:00');
  //     const endTime = new Date('2025-09-05T06:00:00');

  //     if (currentDate >= startTime && currentDate < endTime) {
  //       setShowPopUp(true);
  //     } else {
  //       setShowPopUp(false);
  //     }
  //   };

  //   checkPopupTime();
  //   const intervalId = setInterval(checkPopupTime, 60 * 1000);
  //   return () => clearInterval(intervalId);
  // }, []);

  // Improved marquee data: Define unique news items as an array to avoid duplication
  const newsItems = [
    {
      href: 'https://www.gqindia.com/content/looking-for-a-secluded-valentines-day-getaway-these-places-near-mumbai-and-delhi-would-be-perfect',
      imgSrc: '/assets/images/news/gq.png',
      text: "Looking for a secluded Valentine's Day getaway? These 11 places near Mumbai and Delhi would be perfect",
      imgStyle: {
        paddingBottom: '10px',
        height: '50px',
        width: '100px',
        objectFit: 'contain',
      },
      textStyle: { paddingTop: '16px' }, // pt-4 equivalent
    },
    {
      href: 'https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/',
      imgSrc: '/assets/images/news/press2.webp',
      text: 'Noormahal Palace In Karnal Invites You To Enjoy A Regal Stay, This Long Weekend',
      imgStyle: { height: '50px', width: '100px', objectFit: 'contain' },
      textStyle: { paddingTop: '8px' }, // pt-2 equivalent
    },
    {
      href: 'https://www.luxurytravelmagazine.com/news-articles/enjoy-lavish-celebrations-at-indias-incredible-palace-hotel-noor-mahal',
      imgSrc: '/assets/images/news/press3.png',
      text: "Enjoy Lavish Celebrations at India's Incredible Palace Hotel, Noormahal",
      imgStyle: { height: '50px', width: '100px', objectFit: 'contain' },
      textStyle: { paddingTop: '8px' }, // pt-2 equivalent
    },
    {
      href: 'https://thedailyguardian.com/roop-partap-choudhary-recreating-old-wines-in-new-bottles/',
      imgSrc: '/assets/images/news/press4.png',
      text: 'Roop Pratap Choudhary: Recreating old wines in new bottle',
      imgStyle: { height: '50px', width: '100px', objectFit: 'contain' },
      textStyle: { paddingTop: '8px' }, // pt-2 equivalent
    },
    {
      href: 'https://www.luxuryfacts.com/index.php/sections/article/Noor-Mahal-A-Pinnacle-of-Royal-Palace-Life',
      imgSrc: '/assets/images/news/press5.png',
      text: 'Noormahal - A Pinnacle of Royal Palace Life',
      imgStyle: { height: '50px', width: '100px', objectFit: 'contain' },
      textStyle: { paddingTop: '12px' }, // pt-3 equivalent
    },
  ];

  return (
    <div>
      <main>
        {/* Story Section */}
        <section className='story_wrapper'>
          <div className='story-container mx-auto'>
            <div className='story_grid'>
              <div className='content item_grid' data-aos='fade-up'>
                <h2>
                  <span className='story_title yellow-color-a4'>
                    <span>Story Of</span>
                  </span>
                  <span className='story_title mt-2'>
                    <span>Noormahal Palace, &nbsp;</span>
                    <span>karnal</span>
                  </span>
                </h2>
                <p>
                  Embracing India’s rich heritage, Noormahal Palace endorses the
                  opulent royalty of the era of Indian maharajas, flaunting an
                  enchanting fusion of elements inspired from traditional Mughal
                  and Rajputana schools of architecture. A unique mélange of
                  traditional royal essence with modern amenities, Noormahal
                  Palace Hotel in Karnal exudes warmth and comfort for all its
                  guests by preserving the legacy of India’s deep-rooted past
                  heritage. Stunningly set in vast expanse of natural splendour,
                  Noormahal Palace is truly a one of its kind Palace in the
                  region; an epitome of grandiose.
                </p>
              </div>
              <div className='story_image_area item_grid'>
                <img
                  src='assets/images/home/story_img1.jpg'
                  alt='Story of Noormahal Palace'
                  data-aos='fade-up'
                />
                <img
                  src='assets/images/home/story_img2.jpg'
                  alt='Story of Noormahal Palace'
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

        {/* Improved Marquee: Map over unique items for better maintainability and no duplication */}
        <marquee loop={30} scrollamount='10'>
          <div className='marquee pt-5'>
            {newsItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                style={{
                  textDecoration: 'none',
                  padding: '0 30px',
                  borderRight:
                    index < newsItems.length - 1 ? '2px solid gray' : 'none', // No border on last item
                }}
              >
                <div className='d-flex align-items-center gap-4 justify-content-center text-center'>
                  <div style={item.imgStyle}>
                    <img
                      src={item.imgSrc}
                      alt='News logo'
                      style={{
                        ...item.imgStyle,
                        objectFit: 'contain',
                        height: '100%',
                        width: '100%',
                      }}
                    />
                  </div>
                  <p className='news-text' style={item.textStyle}>
                    {item.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </marquee>
      </main>

      {/* Popup: Pass showPopUp and setShowPopUp */}
      <Popup
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        className={` ${showPopUp ? '_show-modal' : '_hide-modal'} `}
      />
    </div>
  );
}

export default StorySection;
