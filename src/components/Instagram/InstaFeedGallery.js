import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

import useWindowSize from '../Hook/windowSize';
import FeedGallery from './FeedGallery';

// import "./InstaFeedGallery.css";

const InstaFeedGallery = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([]);
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token);
  tokenProp.current = token;

  const windowSize = useWindowSize();

  const [perPageLimit, setPerPageLimit] = useState(0);

  // useEffect(() => {
  //   // this is to avoid memory leaks
  //   const abortController = new AbortController();

  //   async function fetchInstagramPost() {
  //     try {
  //       axios
  //         .get(
  //           `https://graph.instagram.com/me/media?fields=id,media_type,like_count,media_url,caption&limit=${props.limit}&access_token=${tokenProp.current}`,
  //         )
  //         .then((resp) => {
  //           setFeedsData(resp.data.data);
  //         });
  //     } catch (err) {
  //       console.log("error", err);
  //     }
  //   }

  //   // manually call the fecth function
  //   fetchInstagramPost();

  //   return () => {
  //     // cancel pending fetch request on component unmount
  //     abortController.abort();
  //   };
  // }, [props.limit]);

  const fetchPosts = (per_page_limit) => {
    try {
      axios
        .get(
          `https://graph.instagram.com/me/media?fields=id,media_type,media_url,thumbnail_url,caption&limit=${per_page_limit}&access_token=${tokenProp.current}`
        )
        .then((resp) => {
          setFeedsData(resp.data.data);
        });
    } catch (err) {
      console.log('error', err);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) {
      setPerPageLimit(6);
      fetchPosts(6);
    } else {
      setPerPageLimit(3);
      fetchPosts(3);
    }
  }, []);

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   const handleResize = () => {
    //     setWindowSize({
    //       width: window.innerWidth,

    fetchPosts(perPageLimit);
  }, [perPageLimit]);

  return (
    <div className=' px-4 container insta-container'>
      {/* <div className="row no-gutters"> */}
      <div className='row feeds-gallery-container no-gutters mb-4 py-2 '>
        <section className='instagram_gallery_wrapper '>
          <div className='instagram-container mx-auto '>
            <div className='user_area'>
              <div className='user_grid mx-auto'>
                <img
                  src='assets/images/logos/instalogo.jpeg'
                  alt='user image'
                />
                <div>
                  <a
                    href='https://www.instagram.com/noormahalpalace/'
                    target='_blank'
                    className='name'
                  >
                    Noormahal Palace Karnal
                  </a>
                  <a
                    href='https://www.instagram.com/noormahalpalace/'
                    target='_blank'
                    className='link'
                  >
                    {' '}
                    @noormahalkarnal
                  </a>
                </div>
              </div>
              <div className='text-center pt-4 '>
                {/* <p className='text-dark fw-semibold'>
                Wanderlust Chronicles: Captivating Destinations and Experiences
              </p> */}
              </div>
            </div>
          </div>
        </section>
        {feeds.map((feed) => (
          <div className='col-4 col-md-4 p-0 m-0' key={feed.id}>
            <FeedGallery feed={feed} />
          </div>
        ))}

        <div className=' p-0 m-0 d-flex justify-content-center align-items-center'>
          {/* <div className=" col-8 col-md-2 mt-3  "> */}

          <button
            type='button'
            className='load_more_btn'
            onClick={() => {
              setPerPageLimit(perPageLimit + 3);
            }}
          >
            <span>Load more</span>
          </button>

          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default InstaFeedGallery;
