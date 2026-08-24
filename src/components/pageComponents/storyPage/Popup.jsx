import Link from 'next/link';
import React from 'react';
import { MdClose } from 'react-icons/md';
import Image from 'next/image';

// Single image (Dec 31, 2025, till 23:59:59)
import currentImage from '../../../../public/assets/images/promotion/wedding-package-1.jpeg';

function Popup({ showPopUp, setShowPopUp }) {
  const handleClose = (e) => {
    e.stopPropagation(); // Prevent outer div click from closing when clicking close button
    setShowPopUp(false);
  };

  const handleOuterClick = () => {
    setShowPopUp(false);
  };

  // const handleLinkClick = (e) => {
  //   e.stopPropagation(); // Prevent outer div from closing when clicking the image/link

  // };

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${
        showPopUp ? '_show-modal' : '_hide-modal'
      }`}
      onClick={handleOuterClick}
    >
      <div className='position-relative'>
        <Link href={'/promotions'}>
          <Image
            src={currentImage}
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
