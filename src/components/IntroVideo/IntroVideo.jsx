import React, { useEffect, useState } from 'react';
// import intro from '../../../public/assets/videos/intro.mp4'
import Image from 'next/image';
import useWindowSize from '../Hook/windowSize';

function IntroVideo(props) {
  // const [videoFinish, setVideoFinish] = useState(false);
  const [IntroFinish, setIntroFinish] = useState(false);
  const windowSize = useWindowSize();


  // useEffect(() => {
  //   // attemptPlay();
  //   setTimeout(() => {
  //     setVideoFinish(true);
  //     props.setVideoFinish(true);
  //   }, 4000);

  //   setTimeout(() => {
  //     props.handleShowContent(true);
  //   }, 1500);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setIntroFinish(true);
      props.handleIntroFinish(true);
    }, 3000);

    setTimeout(() => {
      props.handleShowContent(true);
    }, 1000);
  }, [props]);

  return (
    // <div className={IntroFinish == true ? 'vh-100' : ''}>
    <div className={IntroFinish ? 'd-none' : ' intro-web'}>
      {/* <video
          muted
          autoPlay
          controls=""
          className={videoFinish ? "d-none" : "w-100 h-100"}
          alt="Intro"
          src={intro}
        >
          <source src={intro} type="video/mp4"/>
        </video> */}
      {windowSize.width < 992 && (
        <img
          src='/assets/videos/5mb.gif'
          alt='intro-gif'
          className='intro-gif'
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      )}
      {windowSize.width >= 992 && (
        <img
          src='/assets/videos/intro.gif'
          alt='intro-gif'
          className='intro-gif'
          style={{ height: '100vh', width: '100%', objectFit: 'cover' }}
        />
      )}
    </div>
    // </div>
  );
}

export default IntroVideo;
