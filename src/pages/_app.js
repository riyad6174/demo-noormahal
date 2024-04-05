import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';

import '@/styles/globals.scss';
//import bootstap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCallback, useEffect, useState } from 'react';
import ScrollToTop from '@/components/atoms/ScrollToTop';
import IntroVideo from '@/components/IntroVideo/IntroVideo';
import BookNowButton from '@/components/atoms/BookNowButton';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';

// 3rd party css
import 'react-image-gallery/styles/css/image-gallery.css';
import { getSettings } from '@/utils/API';
import { StructuredData } from '@/components/StructuredData';

export default function App({ Component, pageProps }) {
  const [data, setData] = useState([]);

  const [isIntroFinished, setisIntroFinished] = useState(true); //NOTE: later make it false
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require('bootstrap/dist/js/bootstrap')
      : null;
  }, []);

  const handleIntroFinishChanged = (value) => {
    setisIntroFinished(value);
  };

  const handleShowContentChanged = (value) => {
    setShowContent(value);
  };

  const fetchData = useCallback(async () => {
    const response = await getSettings();
    if (response && response.status) {
      if (response?.data && Object.keys(response?.data?.data).length > 0) {
        setData(response?.data?.data);
        console.log(response?.data?.data, 'settings list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <IntroVideo
        isIntroFinished={isIntroFinished}
        handleIntroFinish={handleIntroFinishChanged}
        handleShowContent={handleShowContentChanged}
      />{' '}
      {showContent && (
        <>
          <GoogleAnalytics />
          <StructuredData />

          <Navbar data={data} />
          <Component {...pageProps} />
          <Footer data={data} />
          <BookNowButton />
          <ScrollToTop />
        </>
      )}
    </>
  );
}
