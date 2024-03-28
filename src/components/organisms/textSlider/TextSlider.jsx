import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../../../public/assets/images/experience/chef1.jpg';
import slider2 from '../../../../public/assets/images/experience/chef2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import Link from 'next/link';

function NewsSlider() {
  const breakpoints = {
    // when window width is <= 499px
    499: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },

    1450: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
  };
  return (
    <div className='newsswiper-container ' style={{ height: '100%' }}>
      <section
        className='container swiper-wrapper swiper-section'
        style={{ height: '100%' }}
      >
        <Swiper
          centeredSlides={true}
          // breakpoints={breakpoints}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            watchOverflow: true,
          }}
          speed='9000'
          effect='fade'
          freeMode='true'
          //   pagination={{
          //     clickable: true,
          //   }}
          modules={[Autoplay, Pagination]}
          className='mySwipe  swiper-slide d-flex justfy-content-center'
        >
          <SwiperSlide className='swiper-slide news-swiper '>
            {/* <Link href='https://www.architecturaldigest.in/content/this-palace-hotel-in-karnal-haryana-has-possibly-more-antiques-and-artworks-than-any-museum-in-the-world/'>
              <div className='news-contents d-flex align-items-center justify-content-center'>
                <div className='news-image'>
                  <img src='/assets/images/news/news1.svg' alt='ad-news' />
                </div>
                <p className='news-text'>
                  This palace hotel in Karnal, Haryana has possibly more
                  antiques and artworks than any other museum in the world
                </p>
              </div>
            </Link> */}
            <Link
         
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{ textDecoration: 'none' }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press2.webp'
                    alt='ad-news style={{objectFit:"cover,height:"100,width:"100%"%""}}'
                  />
                </div>
                <p className='news-text pt-2 d-inline-block'>
                  Noormahal Palace In Karnal Invites You To Enjoy A Regal Stay,
                  This Long Weekend
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide news-swiper '>
            {/* <Link href='https://www.luxurytravelmagazine.com/news-articles/enjoy-lavish-celebrations-at-indias-incredible-palace-hotel-noor-mahal'>
              <div className='news-contents  d-flex align-items-center justify-content-center'>
                <div className='news-image'>
                  <img src='/assets/images/news/press3.png' alt='ad-news' />
                </div>
                <p className='news-text'>
                  Enjoy Lavish Celebrations at India's Incredible Palace Hotel,
                  Noor Mahal
                </p>
              </div>
            </Link> */}
            <Link
            
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{ textDecoration: 'none' }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press2.webp'
                    alt='ad-news style={{objectFit:"cover,height:"100,width:"100%"%""}}'
                  />
                </div>
                <p className='news-text pt-2 d-inline-block'>
                  Noormahal Palace In Karnal Invites You To Enjoy A Regal Stay,
                  This Long Weekend
                </p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide className='swiper-slide news-swiper '>
            {/* <Link href='https://thedailyguardian.com/roop-partap-choudhary-recreating-old-wines-in-new-bottles/'>
              <div className='news-contents  d-flex align-items-center justify-content-center '>
                <div className='news-image'>
                  <img src='/assets/images/news/press4.png' alt='ad-news' />
                </div>
                <p className='news-text'>
                  Roop Pratap Choudhary: Recreating old wines in new bottle
                </p>
              </div>
            </Link> */}
            <Link
        
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{ textDecoration: 'none' }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press2.webp'
                    alt='ad-news style={{objectFit:"cover,height:"100,width:"100%"%""}}'
                  />
                </div>
                <p className='news-text pt-2 d-inline-block'>
                  Noormahal Palace In Karnal Invites You To Enjoy A Regal Stay,
                  This Long Weekend
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide className='swiper-slide news-swiper '>
            {/* <Link href='https://www.luxuryfacts.com/index.php/sections/article/Noor-Mahal-A-Pinnacle-of-Royal-Palace-Life'>
              <div className='news-contents  d-flex align-items-center justify-content-center'>
                <div className='news-image'>
                  <img src='/assets/images/news/press5.png' alt='ad-news' />
                </div>
                <p className='news-text'>
                  Noor Mahal - A Pinnacle of Royal Palace Life
                </p>
              </div>
            </Link> */}
            <Link
     
              href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
              style={{ textDecoration: 'none' }}
            >
              <div className='d-flex align-items-center gap-4 justify-content-center  '>
                <div
                  className=''
                  style={{
                    height: '50px',
                    width: '100px',
                    objectFit: 'contain',
                  }}
                >
                  <img
                    src='/assets/images/news/press2.webp'
                    alt='ad-news style={{objectFit:"cover,height:"100,width:"100%"%""}}'
                  />
                </div>
                <p className='news-text pt-2 d-inline-block'>
                  Noormahal Palace In Karnal Invites You To Enjoy A Regal Stay,
                  This Long Weekend
                </p>
              </div>
            </Link>
          </SwiperSlide>
          <Link>
            <SwiperSlide className='swiper-slide news-swiper '>
              {/* <Link href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'>
                <div className='news-contents  d-flex align-items-center justify-content-center'>
                  <div className='news-image'>
                    <img src='/assets/images/news/press2.webp' alt='ad-news' />
                  </div>
                  <p className='news-text'>
                    Noormahal Palace In Karnal Invites You To Enjoy A Regal
                    Stay, This Long Weekend
                  </p>
                </div>
              </Link> */}
              <Link
             
                href='https://curlytales.com/noormahal-palace-in-karnal-invites-you-to-enjoy-a-regal-stay-this-long-weekend/'
                style={{ textDecoration: 'none' }}
              >
                <div className='d-flex align-items-center gap-4 justify-content-center  '>
                  <div
                    className=''
                    style={{
                      height: '50px',
                      width: '100px',
                      objectFit: 'contain',
                    }}
                  >
                    <img
                      src='/assets/images/news/press2.webp'
                      alt='ad-news style={{objectFit:"cover,height:"100,width:"100%"%""}}'
                    />
                  </div>
                  <p className='news-text pt-2 d-inline-block'>
                    Noormahal Palace In Karnal Invites You To Enjoy A Regal
                    Stay, This Long Weekend
                  </p>
                </div>
              </Link>
            </SwiperSlide>
          </Link>
        </Swiper>
      </section>
    </div>
  );
}

export default NewsSlider;
