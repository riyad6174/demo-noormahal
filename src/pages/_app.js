import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useCallback, useEffect, useState } from 'react';
import ScrollToTop from '@/components/atoms/ScrollToTop';
import IntroVideo from '@/components/IntroVideo/IntroVideo';
import BookNowButton from '@/components/atoms/BookNowButton';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { getSettings } from '@/utils/API';
import { StructuredData } from '@/components/StructuredData';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [isIntroFinished, setIsIntroFinished] = useState(false); // Set to false to enable intro video by default
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
    setIsIntroFinished(value);
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

  // Determine if the current path is the root URL
  const isRootUrl = router.pathname === '/';

  // Show content immediately for non-root URLs
  useEffect(() => {
    if (!isRootUrl) {
      setShowContent(true);
    }
  }, [isRootUrl]);

  return (
    <>
      {isRootUrl && (
        <IntroVideo
          isIntroFinished={isIntroFinished}
          handleIntroFinish={handleIntroFinishChanged}
          handleShowContent={handleShowContentChanged}
        />
      )}
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
