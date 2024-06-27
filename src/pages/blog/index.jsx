import { getBlog, getSeo } from '@/utils/API';
import { BlogMain } from '@/utils/Contents/blog';
import moment from 'moment';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

function page({ seoData }) {
  const [slicedIndex, setSlicedIndex] = useState(6);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getBlog();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'blog list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <Head>
        <title>
          {seoData && seoData.metaTitle
            ? seoData.metaTitle
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
        <meta name='robots' content='index, follow' />

        <meta
          name='keywords'
          content={
            seoData && seoData.keyWords
              ? seoData.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          }
        />
        <meta
          name='description'
          content={
            seoData && seoData.metaDescription
              ? seoData.metaDescription
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <section className='blog_wrapper pt-4 default_section_gap'>
        <div className='blog-container mx-auto'>
          <div className='blog_grid'>
            {data.length > 0 &&
              data.slice(0, slicedIndex).map((item, index) => {
                return (
                  <div className='blog_item' data-aos='fade-up'>
                    <Link href={`/blog/${item.slug}`} className='title'>
                      <img
                        src={`https://api.noormahalpalace.com/${item.image?.path}`}
                        alt='blog image'
                        // style={{ height: '100%', width: '100%' }}
                        className='w-full h-full object-fit-cover'
                      />
                    </Link>

                    <div className='content'>
                      {/* <ul className='tag_list d-flex align-items-center flex-wrap g-sm'>
                        <li>
                          <a href='#' target='_blank'>
                            {' '}
                            FOOD{' '}
                          </a>
                        </li>
                      </ul> */}
                      <Link href={`/blog/${item.slug}`} className='title'>
                        {item.title}
                      </Link>
                      <div className='blog-content'>
                        <p>{item?.subTitle}</p>
                      </div>
                      <div className='blog_footer d-flex-between'>
                        <div className='user_grid'>
                          {/* <img
                          src='assets/images/blog/writer_img1.png'
                          alt='user image'
                        /> */}
                          <h4>{item.author}</h4>
                        </div>
                        <a href='#'>
                          {moment(item.publishedDate).format('MMM D, YYYY')}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='text-center mt-4'>
            <button
              onClick={() => {
                setSlicedIndex(slicedIndex + 3);
              }}
              type='button'
              className='load_more_btn'
            >
              <span>Load more</span>
            </button>
          </div>
          {/* <div className='text-center mt-4 pt-5'>
            <img src='assets/images/blog/o-ads-space.png' alt='ads image' />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default page;

export async function getServerSideProps() {
  try {
    const responseSeo = await getSeo('blog');

    if (!responseSeo || !responseSeo.data) {
      throw new Error('Invalid Seo API response');
    }
    const seoData = responseSeo.data.data || {};
    return { props: { seoData } };
  } catch (error) {
    console.log(error);
    return { props: { seoData: {} } };
  }
}
