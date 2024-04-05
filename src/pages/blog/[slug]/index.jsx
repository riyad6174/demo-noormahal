import { getSingleBlog } from '@/utils/API';
import { BlogMain } from '@/utils/Contents/blog';
import parse from 'html-react-parser';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

function index({ data }) {
  const router = useRouter();
  // const { slug } = router.query;

  // console.log(slug, 'slug');
  // const [data, setData] = useState([]);

  // const fetchData = useCallback(async () => {
  //   const response = await getSingleBlog(slug);
  //   if (response && response.status) {
  //     if (response.data.data) {
  //       setData(response.data.data);
  //       console.log(response.data, 'blog list');
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);

  // console.log(data);

  return (
    <div>
      <Head>
        <title>
          {data && data.title
            ? data.title
            : ' Weekend Getaways near Delhi NCR & Chandigarh - Hotel NoorMahal Palace'}
        </title>
        <meta
          name='keywords'
          content={
            data && data.keyWords
              ? data.keyWords
              : ' Luxury 5 Star Hotels in Karnal, Panipat, Kurukshetra Haryana - Hotel NoorMahal Palace, Karnal'
          }
        />
        <meta
          name='description'
          content={
            data && data.subTitle
              ? data.subTitle
              : ' An ideal weekend getaway near Delhi NCR and Chandigarh, Hotel NoorMahal Palace offers luxury hotel accommodations in Karnal. Book online and get the best deals on official website.'
          }
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data && (
        <section className='blog_details_wrapper default_section_gap pt-5'>
          <div className='instagram-container mx-auto'>
            <div className='blog_details_content mx-auto'>
              <h3 className='blog_title'>{data?.title}</h3>
              <div className='blog_footer d-flex align-items-center flex-wrap'>
                {data.image?.path && (
                  <div className='user_grid'>
                    <a href='#'>
                      <img
                        src={`https://api.noormahalpalace.com/${data.image?.path}`}
                        alt='user image'
                      />
                    </a>
                    <a href='#'>{data?.author}</a>
                  </div>
                )}

                <a href='#'>{data?.publishedDate}</a>
              </div>
            </div>
            {data.image && (
              <div className='blog_details_img text-center'>
                <img
                  src={`https://api.noormahalpalace.com/${data.image?.path}`}
                  alt='user image'
                />
              </div>
            )}

            <div className='blog_details_content mx-auto'>
              <div
                className='content_item'
                dangerouslySetInnerHTML={{ __html: data?.description }}
              >
                {}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default index;

export async function getServerSideProps(context) {
  const { slug } = context.query;

  // Fetch data for the specific blog post using the slug
  const response = await getSingleBlog(slug);

  // Pass the fetched data as props to the component
  return {
    props: {
      data: response?.data?.data || null,
    },
  };
}
