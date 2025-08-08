// import React, { useCallback, useEffect, useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// // import slider1 from '../../../../public/assets/images/home/2.ExperiencesExperiences1Main.jpg';
// // import slider2 from '../../../../public/assets/images/home/2.ExperiencesExperiences2.jpg';
// // import slider3 from '../../../../public/assets/images/home/Experiences3.jpg';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// // import required modules
// import { Autoplay, Pagination } from 'swiper';
// import Image from 'next/image';
// import { BiSolidQuoteLeft } from 'react-icons/bi';
// import { getTestimonial } from '@/utils/API';
// import HtmlParser from 'react-html-parser';

// function TestimonialSlider() {
//   const [data, setData] = useState([]);

//   const fetchData = useCallback(async () => {
//     const response = await getTestimonial();
//     if (response && response.status) {
//       if (response.data && Object.keys(response.data.data).length > 0) {
//         setData(response.data?.data.reverse());
//         console.log(response.data?.data, 'blog list');
//       }
//     }
//   }, []);

//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   // Responsive breakpoints

//   const breakpoints = {
//     // when window width is <= 499px
//     499: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 10,
//     },
//     // when window width is <= 999px
//     999: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 10,
//     },

//     1450: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 10,
//     },
//     2000: {
//       slidesPerView: 2,
//       spaceBetweenSlides: 10,
//     },
//   };
//   return (
//     <div className='swiper' style={{ height: '100%', width: '100%' }}>
//       <div className='row'>
//         {data &&
//           data.map((testimonial) => {
//             return (
//               <div className='col-md-4'>
//                 <div
//                   className='testimonial '
//                   style={{ height: '100%', width: '100%' }}
//                 >
//                   <div className='pic'>
//                     <img
//                       src={`https://noormahalpalace.com/files/${testimonial?.image?.path}`}
//                     />
//                   </div>
//                   {HtmlParser(testimonial.message)}
//                   <div className='testimonial-profile'>
//                     <h3 className='title'>{testimonial.name}</h3> <br />
//                     <span className='post'>{testimonial.profession}</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default TestimonialSlider;

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import slider1 from '../../../../public/assets/images/home/2.ExperiencesExperiences1Main.jpg';
// import slider2 from '../../../../public/assets/images/home/2.ExperiencesExperiences2.jpg';
// import slider3 from '../../../../public/assets/images/home/Experiences3.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination } from 'swiper';
import Image from 'next/image';
import { BiSolidQuoteLeft } from 'react-icons/bi';

function TestimonialSlider() {
  // Responsive breakpoints
  const breakpoints = {
    // when window width is <= 499px
    499: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    // when window width is <= 999px
    999: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },

    1450: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
    2000: {
      slidesPerView: 2,
      spaceBetweenSlides: 10,
    },
  };
  return (
    <div className='swiper' style={{ height: '100%', width: '100%' }}>
      {/* <section className="swiper_wrapper" style={{ height: "100%" ,width:"100%"}}>
        <Swiper
          loop={true}
          centeredSlides={true}
      
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            watchOverflow: true,
          }}
          speed="1500"
          effect="fade"
      
          modules={[Autoplay, Pagination]}
          className="  swiper-slide "
        >
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial " style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img1.png" />
              </div>
              <p className="description">
                Thank you for everything!!! My stay was comfortable & staff was
                great. The arrangements and the services have all been
                excellent.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">Parineeti Chopra</h3> <br />
                <span className="post">Bollywood Actress.</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" }}>
            <div className="testimonial" style={{ height: "100%" }}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img2.png" />
              </div>
              <p className="description">
                Delicious food, Great variety of authentic Indian Cuisines,
                Great experience in the real Jewel of Haryana!!! All the very
                best, wishing you lots of luck & success.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">MR. SAMEER GEHLAUT</h3> <br />
                <span className="post">Chairman India Bulls.</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img3.png" />
              </div>
              <p className="description">
                Great Service and hospitality!!! Food & Housekeeping are all
                excellent…!!! We enjoyed our stay, thanks everyone for the
                warmth.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">HIS ROYAL HIGHNESS, OSEI TUTU II</h3> <br />
                <span className="post">King of Ghana</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img4.png" />
              </div>
              <p className="description">
                We relished our lovely high tea experience. We are very much
                impressed with the palace. I hope you do very well..!! Best
                Wishes.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">CAPT. AMRINDER SINGH</h3> <br />
                <span className="post">Hon'ble Chief Minister of Punjab</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img5.png" />
              </div>
              <p className="description">
                It was my second visit to the hotel and as expected it was
                Excellent, Thanks for the hospitality and services.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">HEMA MALINI</h3> <br />
                <span className="post">Bollywood actress.</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img6.png" />
              </div>
              <p className="description">
                Thank you for your warm Hospitality and making our stay so
                comfortable. Our best wishes to the hotel, Staff and their
                families
              </p>
              <div className="testimonial-profile">
                <h3 className="title">GIRISH LUTHRA</h3> <br />
                <span className="post">
                  Flag officer commanding –In –chief western Naval Command
                  Indian Navy
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img7.png" />
              </div>
              <p className="description">
                Thank you for a very comfortable stay. Everything was flawless.
                I would like to thank all associated with this Hotel.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">MR. L K ADVANI</h3> <br />
                <span className="post">
                  Indian Politician, Former Minister of Home Affairs.
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img8.png" />
              </div>
              <p className="description">
                A 7 Star experience in the middle of the country Side. An
                absolute treat to be staying there for a month. It retains the
                charm of Haryana which provides a real royal experience.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">RANDEEP HOODA</h3> <br />
                <span className="post">Indian Actor & Producer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img9.png" />
              </div>
              <p className="description">
                Too good a hotel which is a pride of Haryana.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">PANDIT JASRAJ</h3> <br />
                <span className="post">Indian classical Maestro.</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial d-flex flex-column" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img10.png" />
              </div>
              <p className="description">
                I am really impressed by the architecture and grace of the
                hotel. I must congratulate Col. Manbir & his wife for this gift
                to karnal.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">BHUPINDER SINGH HOODA</h3>
                <span className="post">Hon'ble Chief Minister of Haryana</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial d-flex flex-column" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img11.png" />
              </div>
              <p className="description">
                A very decent place and I wish the management the best of luck.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">ABHINAV BINDRA</h3>
                <span className="post">Olympic Gold Medalist Shooting</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial d-flex flex-column" style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img12.png" />
              </div>
              <p className="description">
                Noormahal Palace is a jewel in the crown of Haryana.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">JAGJIT SINGH</h3>
                <span className="post">Ghazal Singer</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" style={{ height: "100%" ,width:"100%"}}>
            <div className="testimonial"style={{ height: "100%" ,width:"100%"}}>
              <div className="pic">
                <img src="/assets/images/guest/guest_img13.png" />
              </div>
              <p className="description">
                Thank you for the delicious lunch which we all enjoyed very
                much.
              </p>
              <div className="testimonial-profile">
                <h3 className="title">PRINCE HANS ADAM II OF LIECHTENSTEIN</h3>
        
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </section> */}
      <div className='row'>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial '
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/sohail_khan.jpg' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  This is the first time I've fallen in love with the place
                  and the people ❤
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>Sohail Khan</h3> <br />
                  <span className='post'>Bollywood Actor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial '
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/neeru.jpeg' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Thank you to the whole team !! Amazing place, and hospitality.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>Neeru Bajwa</h3> <br />
                  <span className='post'>Bollywood Actress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial '
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img1.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Thank you for everything!!! My stay was comfortable & staff
                  was great. The arrangements and the services have all been
                  excellent.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>Parineeti Chopra</h3> <br />
                  <span className='post'>Bollywood Actress.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img8.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  A 7 Star experience in the middle of the country Side. An
                  absolute treat to be staying there for a month. It retains the
                  charm of Haryana which provides a real royal experience.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>RANDEEP HOODA</h3> <br />
                  <span className='post'>Indian Actor & Producer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img3.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Great Service and hospitality!!! Food & Housekeeping are all
                  excellent…!!! We enjoyed our stay, thanks everyone for the
                  warmth.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>HIS ROYAL HIGHNESS, OSEI TUTU II</h3>{' '}
                  <br />
                  <span className='post'>King of Ghana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div className='testimonial' style={{ height: '100%' }}>
              <div className='pic'>
                <img src='/assets/images/guest/guest_img2.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Delicious food, Great variety of authentic Indian Cuisines,
                  Great experience in the real Jewel of Haryana!!! All the very
                  best, wishing you lots of luck & success.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>MR. SAMEER GEHLAUT</h3> <br />
                  <span className='post'>Chairman India Bulls.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img13.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Thank you for the delicious lunch which we all enjoyed very
                  much.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>
                    PRINCE HANS ADAM II OF LIECHTENSTEIN
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img5.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  It was my second visit to the hotel and as expected it was
                  Excellent, Thanks for the hospitality and services.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>HEMA MALINI</h3> <br />
                  <span className='post'>Bollywood actress.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img7.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Thank you for a very comfortable stay. Everything was
                  flawless. I would like to thank all associated with this
                  Hotel.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>MR. L K ADVANI</h3> <br />
                  <span className='post'>
                    Indian Politician, Former Minister of Home Affairs.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img6.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Thank you for your warm Hospitality and making our stay so
                  comfortable. Our best wishes to the hotel, Staff and their
                  families
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>GIRISH LUTHRA</h3> <br />
                  <span className='post'>
                    Flag officer commanding –In –chief western Naval Command
                    Indian Navy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img9.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  Too good a hotel which is a pride of Haryana.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>PANDIT JASRAJ</h3> <br />
                  <span className='post'>Indian classical Maestro.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial d-flex flex-column'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img11.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  A very decent place and I wish the management the best of
                  luck.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>ABHINAV BINDRA</h3>
                  <span className='post'>Olympic Gold Medalist Shooting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div>
            <div
              className='testimonial d-flex flex-column'
              style={{ height: '100%', width: '100%' }}
            >
              <div className='pic'>
                <img src='/assets/images/guest/guest_img10.png' />
              </div>
              <div className='d-flex flex-column justify-content-between'>
                <p className='description'>
                  I am really impressed by the architecture and grace of the
                  hotel. I must congratulate Col. Manbir & his wife for this
                  gift to karnal.
                </p>
                <div className='testimonial-profile'>
                  <h3 className='title'>BHUPINDER SINGH HOODA</h3>
                  <span className='post'>
                    Hon'ble Chief Minister of Haryana
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialSlider;
