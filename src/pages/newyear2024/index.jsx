// import Layout from '@/components/Layout';

import Head from 'next/head';
import Gallery from 'react-photo-gallery';
import ImageGallery from 'react-image-gallery';

import React, { useState } from 'react';
import GalleryModal from '@/components/pageComponents/galleryPage/GalleryModal';

function index() {
  const [galleryModal, setGalleryModal] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [sliceIndex, setSlicedIndex] = useState(15);

  const baseImage = {
    category: 'food',
    width: 4,
    height: 4,
  };

  const imageArray = [];

  for (let i = 0; i < 100; i++) {
    const imageNumber = 9789 + i; // Start with 2K0A9768 and increment by 1
    const original = `assets/images/newyearimages/2K0A${imageNumber}.JPG`;

    const imageObject = {
      ...baseImage,
      original,
    };

    imageArray.push(imageObject);
  }

  return (
    <div>
      <Head>
        <title>Gallery 2024 | Noormahal Palace</title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
        />
        <meta
          name='description'
          content=' Explore the visual grandeur of Noormahal Palace through our gallery. View images showcasing the elegant architecture, luxurious interiors, and memorable experiences.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Layout> */}
      <section className='gallery_wrapper pt-5 default_section_gap'>
        <div className='header_area text-center mx-auto'>
          <h2 className='story_title yellow-color-c2'>New Year</h2>
          <h2 className='story_title'>GALLERY</h2>
        </div>
        <div className='gallery-container mx-auto'>
          <div className='tab-content' id='pills-tabContent'>
            <div
              className='tab-pane fade show active'
              id='pills-all'
              role='tabpanel'
              aria-labelledby='pills-all-tab'
              tabindex='0'
            >
              <Gallery
                // photos={filteredImageArray.slice(0, slicedIndex).map(function (item) {
                photos={imageArray.slice(0, sliceIndex).map(function (item) {
                  console.log(item);
                  item.src = item.original;
                  return item;
                })}
                margin={4}
                onClick={(event, { index }) => {
                  setGalleryModal(true);
                  setGalleryIndex(index);
                }}
              />

              {GalleryModal && (
                <GalleryModal
                  show={galleryModal}
                  onHide={() => setGalleryModal(!galleryModal)}
                >
                  <ImageGallery
                    // items={filteredImageArray
                    items={imageArray
                      // .slice(0, slicedIndex)
                      .map(function (item) {
                        return item;
                      })}
                    showFullscreenButton={false}
                    showThumbnails={false}
                    showPlayButton={false}
                    startIndex={galleryIndex}
                  />
                </GalleryModal>
              )}
            </div>
          </div>
        </div>
      </section>
      <div className='text-center mt-4'>
        <button
          onClick={() => {
            setSlicedIndex(sliceIndex + 15);
          }}
          type='button'
          className='load_more_btn'
        >
          <span>Load more</span>
        </button>
      </div>
      {/* </Layout> */}
    </div>
  );
}

export default index;
