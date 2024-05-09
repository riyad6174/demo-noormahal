import React, { useEffect, useState } from 'react';
import Weeding from './sections/Weeding';
import homeImage from '../../public/assets/images/home/story_img1.jpg';

// import diningImageMain from '../../public/assets/images/home/dining-main.jpg';

import Link from 'next/link';
import DiningSlider from './organisms/ImageSlider/DiningImageSlider';
import ExperienceSlider from './organisms/ImageSlider/ExperienceImageSlider';
import SpaSlider from './organisms/ImageSlider/SpaImageSlider';
import InstaFeedGallery from './Instagram/InstaFeedGallery';
import Popup from './pageComponents/storyPage/Popup';
import ExperienceSection from './pageComponents/storyPage/ExperienceSection';
import RoomsAndSuits from './pageComponents/storyPage/RoomsAndSuits';
import AmenitiesSection from './pageComponents/storyPage/AmenitiesSection';
import NewsSection from './pageComponents/storyPage/NewsSection';
import { getNews } from '@/utils/API';
import Image from 'next/image';

function StorySection({
  newsData,
  amenitiesData,
  experienceData,
  weddingData,
}) {
  const [showPopUp, setShowPopUp] = useState(false);
  const instaToken =
    'IGQWRNY0tVMGRqTGpKSWs1U3lJcW92ZAUZAoQzFQbmQ0WlBudVBBVE5vR1pWUE4xU2ZAOUDI1RElWbTB5R1IzLXc0WjFnSUlPbEk5dUZA0Q2JRRmVHcDZApb08wTU1TakIyelpUTFY1OHhuZAHd4QVZAVQXdJTFBSUERla28ZD';

  useEffect(() => {
    setShowPopUp(true);
  }, []);
  return (
    <div>
      <main>
        {/* <!-- Story  Section  --> */}
        <section className='story_wrapper'>
          <div className='story-container mx-auto'>
            <div className='story_grid'>
              <div className='content item_grid' data-aos='fade-up'>
                <h2 className='story_title yellow-color-a4'>
                  <span> Story Of</span>
                </h2>

                <h2 className='story_title mt-2'>
                  <span>Noormahal Palace, &nbsp; </span>
                  <span> karnal</span>
                </h2>

                <p>
                  {' '}
                  Embracing India’s rich heritage, Noormahal Palace endorses the
                  opulent royalty of the era of Indian maharajas, flaunting an
                  enchanting fusion of elements inspired from traditional Mughal
                  and Rajputana schools of architecture. A unique mélange of
                  traditional royal essence with modern amenities, Noormahal
                  Palace Hotel in Karnal exudes warmth and comfort for all its
                  guests by preserving the legacy of India’s deep-rooted past
                  heritage. Stunningly set in vast expanse of natural splendour,
                  Noormahal Palace is truly a one of its kind Palace in the
                  region; an epitome of grandiose.
                </p>
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
        <section className='instagram_gallery_wrapper '>
          <InstaFeedGallery token={instaToken} limit={6} />
        </section>

        <NewsSection newsData={newsData} />
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
