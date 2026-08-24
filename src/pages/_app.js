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

  // Determine if the current path is the root URL
  const isRootUrl = router.pathname === '/';

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

  // Add intro-finished class to body when intro completes
  useEffect(() => {
    if (typeof document !== 'undefined' && isIntroFinished) {
      document.body.classList.add('intro-finished');
    }
  }, [isIntroFinished]);

  const handleIntroFinishChanged = (value) => {
    setIsIntroFinished(value);
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

  return (
    <>
      {/* IntroVideo only on root */}
      {isRootUrl && (
        <IntroVideo
          isIntroFinished={isIntroFinished}
          handleIntroFinish={handleIntroFinishChanged}
        />
      )}

      {/* ALWAYS render for SSR: Full HTML with Head/content */}
      {/* Apply class on root page to hide content initially via CSS */}
      <div className={isRootUrl ? 'app-content app-content-root-initial' : 'app-content'}>
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
