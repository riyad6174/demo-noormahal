import PromotionBanner from '@/components/organisms/Banners/PromotionBanner';
import knowMoreFile from '../../../public/assets/images/promotion/summer_staycations_offers.jpg';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function page() {
  return (
    <div>
      <Head>
        <title>Sitemap | Noormahal Palace</title>
        <meta
          name='keywords'
          content='wedding venues in chandigarh,
                wedding destination near delhi,
                Luxury 5 Star Hotels in Karnal,'
        />
        <meta name='robots' content='index, follow' />

        <meta
          name='description'
          content='Navigate through the Noormahal Palace website using our sitemap. Find links to all important pages, helping you discover the richness of our offerings.'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PromotionBanner />
      <main>
        <section className='promotion_wrapper default_section_gap'>
          <div className='header_area text-center mx-auto'>
            <h1 className='story_title yellow-color-c2'>SITE MAP</h1>
          </div>

          <div className='room-facilities pt-5 '>
            <div className='row'>
              <div className='col-md-4 px-5'>
                <div className='d-flex flex-column'>
                  <Link href='/' className='text-uppercase'>
                    <p> overview</p>
                  </Link>
                  <Link href='/stay' className='text-uppercase'>
                    <p> stay </p>
                  </Link>
                  <Link href='/dining' className='text-uppercase'>
                    <p> dining </p>
                  </Link>

                  <Link href='/weddingandevents' className='text-uppercase'>
                    <p> wedding and events</p>
                  </Link>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='d-flex flex-column'>
                  <Link href='/meeting' className='text-uppercase'>
                    <p>meeting and conference</p>
                  </Link>
                  <Link href='/promotions' className='text-uppercase'>
                    <p>promotions</p>
                  </Link>
                  <Link href='/experiences' className='text-uppercase'>
                    <p> Experiences</p>
                  </Link>
                  <Link href='/gallery' className='text-uppercase'>
                    <p>gallery</p>
                  </Link>
                  <Link
                    href='https://www.manbeerchoudhary.com/'
                    className='text-uppercase'
                  >
                    <p>our story</p>
                  </Link>
                </div>
              </div>
              <div className='col-md-4'>
                <div className='d-flex flex-column'>
                  <Link href='/press' className='text-uppercase'>
                    <p>press</p>
                  </Link>
                  <Link href='/testimonials' className='text-uppercase'>
                    <p>testimonials</p>
                  </Link>
                  <Link href='terms-and-conditions' className='text-uppercase'>
                    <p>terms and conditions</p>
                  </Link>
                  <Link href='/contact-us' className='text-uppercase'>
                    <p>contact</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
