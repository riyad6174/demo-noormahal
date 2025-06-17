import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
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
  const [data, setData] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showIntro, setShowIntro] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    AOS.init({ duration: 800, once: true });

    if (typeof document !== 'undefined') {
      require('bootstrap/dist/js/bootstrap');
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getSettings();
      if (response?.status && response.data?.data) {
        setData(response.data.data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const introSeen = sessionStorage.getItem('introSeen');
    const isRootPath = router.pathname === '/';

    if (isRootPath && !introSeen) {
      setShowIntro(true);
    } else {
      setShowContent(true);
    }
  }, [router.pathname, isMounted]);

  const handleIntroFinish = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
    setShowContent(true);
  };

  return (
    <>
      {isMounted && showIntro && (
        <IntroVideo
          isIntroFinished={false}
          handleIntroFinish={handleIntroFinish}
          handleShowContent={setShowContent}
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
