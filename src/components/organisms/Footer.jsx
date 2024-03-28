import Link from 'next/link';

import { BiLogoTripAdvisor } from 'react-icons/bi';

function Footer({ data }) {
  console.log(data.address, data.email, data.phone, data.social);
  return (
    <div>
      <footer className='footer_wrapper'>
        <div className='footer_conteact_area'>
          <ul className='footer_menu_list d-flex align-items-center justify-content-center flex-wrap'>
            <li>
              <a href='http://manbeerchoudhary.com/'> OUR STORY </a>
            </li>
            <li>
              <Link href='/gallery'> GALLERY </Link>
            </li>
            {/* <li>
              <a href='#'> THINGS TO DO </a>
            </li> */}
            <li>
              <Link href='/spa'> SPA </Link>
            </li>
            <li>
              <Link href='/press'> PRESS </Link>
            </li>
            <li>
              <Link href='/testimonials'> TESTIMONIALS </Link>
            </li>
            <li>
              <Link href='/terms-and-conditions'> TERMS & CONDITIONS </Link>
            </li>
            <li>
              <Link href='/contact-us'> CONTACT US </Link>
            </li>
            <li>
              <Link href='/faq'> FAQ </Link>
            </li>
            <li>
              <Link href='/blog'> BLOG </Link>
            </li>
            <li>
              <Link href='/sitemap'> SITEMAP </Link>
            </li>
          </ul>
          <div className='footer_grid'>
            <div className='address_area'>
              <div className='address_item'>
                <h3>Address :</h3>
                <a href='#' target='_blank' className='location'>
                  {data.address}
                </a>
              </div>
              <div className='address_item'>
                <h3>Contact :</h3>

                <h3>
                  Tel:
                  <a href='tel:+919996787891'>{data.phone}</a>
                </h3>
                <h3>
                  Email :
                  <a href='mailto:sales@noormahal.in '>sales@noormahal.in /</a>
                  <a href='mailto:salesbqts@noormahal.in'>
                    salesbqts@noormahal.in
                  </a>
                </h3>
              </div>
            </div>
            <div className='footer_rigt_area'>
              {/* d-flex align-items-center justify-content-end flex-wrap */}
              <ul className='footer_shape_list d-flex text-center align-items-center justify-content-end flex-wrap gap-4'>
                <li className=''>
                  <a href='https://www.hoteljewels.com/' target='_blank'>
                    <img
                      src='/assets/images/logos/jewels-logo.png'
                      alt='jewels-logo'
                    />
                  </a>
                </li>
                <li className=''>
                  <Link href='/'>
                    <img
                      src='/assets/images/logos/nmlogo.png'
                      alt='noormahal-logo'
                    />
                  </Link>
                </li>

                <li className=''>
                  <a href='https://www.hazuribagh.com/' target='_blank'>
                    <img
                      src='/assets/images/logos/hazuri-Logo.png'
                      alt='hazuri-logo'
                    />
                  </a>
                </li>
                <li className='colonel-saab-image '>
                  <a href='https://colonelsaab.co.uk/' target='_blank'>
                    <img
                      src='/assets/images/logos/cs.png'
                      alt='ColonelSaab-logo'
                      className='colonelsaab-logo'
                      style={{ opacity: '0.6' }}
                    />
                  </a>
                </li>
              </ul>
              <ul className='social_list d-flex align-items-center justify-content-end flex-wrap'>
                {data.social?.map((s, i) => {
                  return (
                    <li key={i}>
                      <a href={s.btnLink} target='_blank'>
                        <img
                          src={`https://api.noormahalpalace.com/${s?.icon?.path}`}
                          alt='social icon'
                        />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className='copyright_area '>
          <p>Copyright@2023 Noormahal Palace. All Right Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
