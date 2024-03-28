import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Navbar from '@/components/organisms/Navbar';
import StorySection from '@/components/StorySection';
import SwiperBanner from '@/components/organisms/Slider';
import { getAmenities, getExperience, getNews } from '@/utils/API';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ newsData, amenitiesData, experienceData }) {
  return (
    <>
      <Head>
        <title>
          Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel
          NoorMahal Palace, Karnal
        </title>
        <meta
          name='keywords'
          content='Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
        />
        <meta
          name='description'
          content='One of the best 5 star luxury business hotels in Karnal, Panipat, Kurukshetra Haryana, NoorMahal Palace is located near IOCL, bus stand and railway station. Book online and get best deals.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <SwiperBanner />
        <StorySection
          newsData={newsData}
          amenitiesData={amenitiesData}
          experienceData={experienceData}
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const newsResponse = await getNews();
    const amenitiesResponse = await getAmenities();
    const experienceRespone = await getExperience();

    if (!newsResponse || !newsResponse.data) {
      throw new Error('Invalid news API response');
    }

    if (!amenitiesResponse || !amenitiesResponse.data) {
      throw new Error('Invalid amenities API response');
    }
    if (!experienceRespone || !experienceRespone.data) {
      throw new Error('Invalid amenities API response');
    }

    const newsData = newsResponse?.data?.data || [];
    const amenitiesData = amenitiesResponse.data.data || [];
    const experienceData = experienceRespone.data.data || [];

    return {
      props: { newsData, amenitiesData, experienceData },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { newsData: [], amenitiesData: [], experienceData: [] },
    };
  }
}
