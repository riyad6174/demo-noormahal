import StayBanner from '@/components/organisms/Banners/StayPageBanner';
import Image from 'next/image';
import React, { useCallback, useEffect, useState } from 'react';
import faqImage from '../../../public/assets/images/faq/lobby.jpg';
import { getFaq } from '@/utils/API';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
function index() {
  const [faqData, setFaqData] = useState([]);

  const fetchGalleryData = useCallback(async () => {
    const response = await getFaq();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setFaqData(response.data?.data[0]);
        console.log(response.data.data, 'faq data');
      }
    }
  }, []);

  useEffect(() => {
    fetchGalleryData();
  }, [fetchGalleryData]);

  console.log(faqData);

  return (
    <div>
      <Head>
        <title>Frequently Asked Questions | Noor Mahal</title>
        <meta
          name='keywords'
          content='wedding venues in chandigarh,
                wedding destination near delhi,
                Luxury 5 Star Hotels in Karnal,'
        />
        <meta name='robots' content='index, follow' />

        <meta
          name='description'
          content='Find answers to commonly asked questions about Noor Mahal, including accommodations, amenities, dining, events, and more.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div id='custom-swiper-bottom'>
        <StayBanner />
      </div>
      <main>
        {/* <!-- Faq  Section  --> */}
        <section className='faq_wrapper default_section_gap'>
          <div className='header_area text-center mx-auto'>
            <h1 className='story_title yellow-color-c2'>FAQ</h1>
            <div className='shape2'>
              <img
                src='assets/images/shape/place_shape.png'
                alt='place shape'
              />
            </div>
            {/* <p className='pt-2 pb-1'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Provident eum fugiat architecto, odio eveniet impedit voluptates,
              ut amet sapiente quia tempora odit labore suscipit iste, adipisci
              fugit id porro! Tempore.
            </p> */}
          </div>
          <div className='guest-container mx-auto'>
            <div className='faq_grid'>
              <div className='faq_content_area'>
                {/* defaultActiveKey='0' */}
                <Accordion>
                  {faqData?.faq?.map((singleFAQ, index) => (
                    <Accordion.Item eventKey={index.toString()}>
                      <Accordion.Header> {singleFAQ.question}</Accordion.Header>
                      <Accordion.Body>
                        <p>{singleFAQ.answer}</p>
                      </Accordion.Body>
                    </Accordion.Item>
                  ))}
                </Accordion>
              </div>
              <div className=''>
                <Image
                  src={`https://noormahalpalace.com/files/${faqData.image?.path}`}
                  width={1400}
                  height={500}
                  className='faq_img'
                  alt='faq_image'
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default index;
