import { BsFillGridFill } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import WeddingBanner from './Banners/WeddingPageBanner';

function Navbar() {
  // Attach scroll event listener

  const [scrollY, setScrollY] = useState(0);
  const [navToggled, setNavToggled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <div>
      <header className='header_wrapper' id='headerWrapper'>
        <div
          className={`header-container ${
            scrollY > 200 ? 'navbar-scrolled' : ''
          }`}
        >
          <div className='haeder_flex  g-lg'>
            <nav className='nav_area'>
              <div className='row d-flex align-items-center justify-content-end '>
                <div className='col-5'>
                  <ul className='main_menu_list d-flex align-items-center justify-content-end '>
                    <li className=''>
                      <Link
                        href='/'
                        className={`${
                          router.pathname === '/' ? 'active_menu' : ''
                        }`}
                      >
                        OVERVIEW
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/stay'
                        className={`${
                          router.pathname === '/stay' ? 'active_menu' : ''
                        }`}
                      >
                        Stay
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/dining'
                        className={`${
                          router.pathname === '/dining' ? 'active_menu' : ''
                        }`}
                      >
                        Dining
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/weddingandevents'
                        className={`${
                          router.pathname === '/weddingandevents'
                            ? 'active_menu'
                            : ''
                        }`}
                      >
                        WEDDINGS & events
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='col-2'>
                  <li className='main_menu_list d-flex align-items-center justify-content-center flex-wrap'>
                    <div className='logo'>
                      <Link href='/'>
                        <img src='/assets/logo-updated.png' alt='logo' />
                      </Link>
                    </div>
                  </li>
                </div>
                <div className='col-5 '>
                  <ul className='main_menu_list  d-flex align-items-center text-center justify-content-start'>
                    <li>
                      <Link
                        href='/meeting'
                        className={`${
                          router.pathname === '/meeting' ? 'active_menu' : ''
                        }`}
                      >
                        Meetings & Conferences
                      </Link>
                    </li>

                    <li>
                      <Link
                        href='/promotions'
                        className={`${
                          router.pathname === '/promotions' ? 'active_menu' : ''
                        }`}
                      >
                        Promotions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/experiences'
                        className={`${
                          router.pathname === '/experiences'
                            ? 'active_menu'
                            : ''
                        }`}
                      >
                        Experiences
                      </Link>
                    </li>
                    <li className='relative'>
                      <a
                        href='https://www.marriott.com/en-us/hotels/ixcnm-noormahal-delhi-ncr-karnal-autograph-collection/overview/'
                        target='_blank'
                      >
                        <button href='' className='btn btn-three'>
                          BOOK NOW
                        </button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            {/* for small devices */}
            <div className='d-flex align-items-center justify-content-between mx-3'>
              <div className='mobile_logo'>
                <div className='logo'>
                  <Link href='/'>
                    <img src='/assets/logo-updated.png' alt='logo' />
                  </Link>
                </div>
              </div>

              <div className='header_btn_area  '>
                <button
                  onClick={() => setNavToggled(!navToggled)}
                  type='button'
                  className='menu_toggle_btn'
                  id='menuToggleBtn'
                >
                  <BsFillGridFill className='fs-5 ' />
                </button>
              </div>
            </div>
            {/* 
            <!-- navigation drawaer from left start --> */}
            <div
              className={`mobile_menu_area  ${
                navToggled ? 'navbar_active' : ''
              }`}
            >
              <div
                className='mobile_menu_overlay '
                onClick={() => setNavToggled(!navToggled)}
              ></div>
              <div
                onClick={() => setNavToggled(!navToggled)}
                className='menu_close_icon text-end'
              >
                {/* <i className="fas fa-times close_icon"></i> */}
                <GrClose />
              </div>

              <div className='mobile_language_login_area d-flex align-items-center justify-content-center flex-wrap'>
                {/* header_button_area */}
                <div className='logo'>
                  <Link href='/'>
                    <img src='/assets/logo-updated.png' alt='logo' />
                  </Link>
                </div>
              </div>

              <div
                className='accordion d-flex align-items-center justify-content-center flex-column '
                id='accordionMenu'
              >
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/' ? 'mobile_active_menu' : ''
                      }`}
                    >
                      OVERVIEW
                    </Link>
                  </h2>
                </div>

                <div className='accordion-item '>
                  <h2>
                    <Link
                      href='/stay'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/stay' ? 'mobile_active_menu' : ''
                      }`}
                    >
                      stay
                    </Link>
                  </h2>
                </div>
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/dining'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/dining'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      dining
                    </Link>
                  </h2>
                </div>

                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/weddingandevents'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/weddingandevents'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      WEDDINGS & events
                    </Link>
                  </h2>
                </div>
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/meeting'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/meeting'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      meetings & confereces
                    </Link>
                  </h2>
                </div>
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/promotions'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/promotions'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      promotions
                    </Link>
                  </h2>
                </div>
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/experiences'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/experiences'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      Experiences
                    </Link>
                  </h2>
                </div>
                <div className='accordion-item'>
                  <h2>
                    <Link
                      href='/contact-us'
                      onClick={() => setNavToggled(!navToggled)}
                      className={`${
                        router.pathname === '/contact-us'
                          ? 'mobile_active_menu'
                          : ''
                      }`}
                    >
                      CONTACT DETAILS
                    </Link>
                  </h2>
                </div>
              </div>
              <div className='py-5 d-flex align-items-center justify-content-center '>
                {/* header_btn */}
                <a href='https://www.marriott.com/en-us/hotels/ixcnm-noormahal-delhi-ncr-karnal-autograph-collection/overview/'>
                  <button className='border border-dark '>BOOK NOW</button>
                </a>
              </div>
            </div>
            {/* <!-- navigation drawaer from left end --> */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
