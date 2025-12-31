import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

// Current image (Dec 31, 2025, till 23:59:59)
import currentImage from '../../../../public/assets/images/promotion/new-year.jpg';
// Second image (Jan 1, 2026, 00:00:00 onwards) - Replace with actual path
import secondImage from '../../../../public/assets/images/popup/newyear.jpeg'; // Placeholder; update as needed

function Popup({ showPopUp, setShowPopUp }) {
  const [currentSrc, setCurrentSrc] = useState(currentImage);

  // TEMPORARY LOGIC: Switch image at midnight Dec 31, 2025 / Jan 1, 2026
  useEffect(() => {
    const cutoffDate = new Date('2025-12-31T23:59:59.999'); // Till end of Dec 31
    const now = new Date();

    if (now > cutoffDate) {
      setCurrentSrc(secondImage);
    } else {
      setCurrentSrc(currentImage);
    }

    // Re-check every minute for edge cases (e.g., page refresh near midnight)
    const intervalId = setInterval(() => {
      const updatedNow = new Date();
      if (updatedNow > cutoffDate) {
        setCurrentSrc(secondImage);
      }
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  // COMMENTED: Initial single-image version (uncomment to revert, comment out date logic above)
  // const [currentSrc, setCurrentSrc] = useState(currentImage); // No useEffect needed

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent outer div click from closing when clicking close button
    setShowPopUp(false);
  };

  const handleOuterClick = () => {
    setShowPopUp(false);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation(); // Prevent outer div from closing when clicking the image/link
  };

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${
        showPopUp ? '_show-modal' : '_hide-modal'
      }`}
      onClick={handleOuterClick}
    >
      <div className='position-relative' onClick={handleLinkClick}>
        <Link href='/promotions'>
          <Image
            src={currentSrc}
            quality={75}
            alt='New Year promotion'
            className='shadow popup-image object-fit-cover'
            style={{ border: '8px solid #FFFAF0' }}
          />
        </Link>
        <div
          className='position-absolute z-3 p-1 shadow'
          style={{
            top: '20px',
            right: '20px',
            borderRadius: '50%',
            backgroundColor: '#FFFAF0',
            cursor: 'pointer',
          }}
        >
          <MdClose
            className='close-button'
            style={{
              width: '24px',
              height: '24px',
              fontWeight: '900',
              color: '#DC143C',
            }}
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
