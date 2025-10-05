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
  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const [showContent, setShowContent] = useState(true); // Default TRUE to avoid SSR skip

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (typeof document !== undefined) {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  const handleIntroFinishChanged = (value) => {
    setIsIntroFinished(value);
  };

  const handleShowContentChanged = (value) => {
    setShowContent(value);
  };

  const fetchData = useCallback(async () => {
    try {
      const response = await getSettings();
      if (response && response.status) {
        if (response?.data && Object.keys(response?.data?.data).length > 0) {
          setData(response?.data?.data);
          console.log(response?.data?.data, 'settings list');
        }
      }
    } catch (error) {
      console.error('Settings fetch error:', error); // Log without crashing
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Determine if the current path is the root URL
  const isRootUrl = router.pathname === '/';

  // For root: Start hidden, show after intro (client-side)
  // For non-root: Already true, no change
  useEffect(() => {
    if (isRootUrl && !isIntroFinished) {
      setShowContent(false); // Hide until intro ends
    } else {
      setShowContent(true);
    }
  }, [isRootUrl, isIntroFinished]);

  // Client-side only: Add/remove CSS class after mount (avoids hydration mismatch)
  useEffect(() => {
    if (typeof document !== undefined) {
      const appContent = document.querySelector('.app-content');
      if (appContent) {
        appContent.classList.toggle('app-content-hidden', !showContent);
      }
    }
  }, [showContent]);

  return (
    <>
      {/* IntroVideo only on root */}
      {isRootUrl && (
        <IntroVideo
          isIntroFinished={isIntroFinished}
          handleIntroFinish={handleIntroFinishChanged}
          handleShowContent={handleShowContentChanged}
        />
      )}

      {/* ALWAYS render for SSR: Full HTML with Head/content */}
      <div className='app-content'>
        {' '}
        {/* No dynamic class here – toggle via JS */}
        <GoogleAnalytics />
        <StructuredData />
        <Navbar data={data} />
        <main className='main-content'>
          <Component {...pageProps} />
        </main>
        <Footer data={data} />
        <BookNowButton />
        <ScrollToTop />
      </div>
    </>
  );
}
