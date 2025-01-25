import Link from 'next/link';
import React from 'react';
import { MdClose } from 'react-icons/md';
import image from '../../../../public/assets/images/popup/republic.jpg';
import Image from 'next/image';
function Popup({ showPopUp, setShowPopUp }) {
  // const handleClick = () =>{
  //   setShowPopUp(!showPopUp)
  // }

  return (
    <div
      className={`d-flex align-items-center justify-content-center ${
        showPopUp ? '_show-modal' : '_hide-modal'
      }  `}
      onClick={() => setShowPopUp(!showPopUp)}
    >
      <div className='position-relative'>
        {/* <Link href={'/promotions'}> */}
        <Image
          src={image}
          quality={75}
          alt='independence-image'
          className='shadow popup-image object-fit-cover'
          style={{ border: '8px solid #FFFAF0' }}
        />
        {/* </Link> */}
        <div
          className=' position-absolute z-3 p-1 shadow  '
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
            onClick={() => setShowPopUp(!showPopUp)}
          />
        </div>
      </div>
    </div>
  );
}

export default Popup;
