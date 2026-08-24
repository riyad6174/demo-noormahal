import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@/components/organisms/Navbar';
import StorySection from '@/components/StorySection';
import SwiperBanner from '@/components/organisms/Slider';
import { getAmenities, getExperience, getNews, getSeo } from '@/utils/API';

export default function Home({
  newsData,
  amenitiesData,
  experienceData,
  seoData,
}) {
  return (
    <>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : '  Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'}
        </title>
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel Noor Mahal, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel Noor Mahal offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
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
    const responseSeo = await getSeo('overview');

    if (!newsResponse || !newsResponse.data) {
      throw new Error('Invalid news API response');
    }

    if (!amenitiesResponse || !amenitiesResponse.data) {
      throw new Error('Invalid amenities API response');
    }
    if (!experienceRespone || !experienceRespone.data) {
      throw new Error('Invalid amenities API response');
    }
    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }

    const newsData = newsResponse?.data?.data || [];
    const amenitiesData = amenitiesResponse.data.data || [];
    const experienceData = experienceRespone.data.data || [];
    const seoData = responseSeo.data.data || {};

    return {
      props: { newsData, amenitiesData, experienceData, seoData },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        newsData: [],
        amenitiesData: [],
        experienceData: [],
        seoData: {},
      },
    };
  }
}
