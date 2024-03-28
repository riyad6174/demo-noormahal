import React, { useEffect, useState } from 'react'
import { BsChevronUp } from 'react-icons/bs';

function ScrollToTop() {
    const [scrollY, setScrollY] = useState(0);
    // const [navToTop ,setNavToTop] = useState(false)
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      handleScroll( );
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrollY]);

    const handleScrollToTop = () => {
        window.scrollTo(0, 0)
    }

  return (
    <div>
    <div onClick={handleScrollToTop} className={`scrolltop ${scrollY>200?'scroll_active':''}`} id="scrollTop">
      <BsChevronUp className='text-light fw-bold'/>
    </div>
    </div>
  )
}

export default ScrollToTop