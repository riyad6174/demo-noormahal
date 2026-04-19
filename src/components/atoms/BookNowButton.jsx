import Link from 'next/link';
import React from 'react';

function BookNowButton() {
  return (
    <a
      href='https://www.marriott.com/en-us/hotels/ixcnm-noormahal-delhi-ncr-karnal-autograph-collection/overview/'
      target='_blank'
      className='d-block'
    >
      <footer className='position-fixed bottom-0 w-100 book-now-footer d-md-none d-sm-block'>
        {/* <div className='col-12 col-sm-12 d-none d-sm-flex align-items-center justify-content-center justify-content-sm-end'> */}
        <button
          type='button'
          className='btn w-100 rounded-0 text-light custom-cursor book-now-footer'
          style={{
            backgroundColor: '#c29a5c',
          }}
          // onMouseOver={(e) => {
          //   e.target.classList.add(
          //     'bg-transparent',
          //     'border',
          //     'border-1',
          //     'border-warning'
          //   );
          // }}
          // onMouseOut={(e) => {
          //   e.target.classList.remove(
          //     'bg-transparent',
          //     'border',
          //     'border-1',
          //     'border-warning'
          //   );
          // }}
          // onClick={() => {
          //   setBookingModal(true);
          // }}
        >
          {/* <Image
        className="img-fluid me-2"
        src={Reception}
        alt="Reception"
        width={20}
      /> */}
          Book Now
        </button>

        {/* </div> */}
      </footer>
    </a>
  );
}

export default BookNowButton;
