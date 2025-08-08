import { getNews } from '@/utils/API';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

function NewsSection({ newsData }) {
  return (
    <div className='pt-5'>
      <marquee loop={50} scrollamount='10'>
        <div className='marquee'>
          {newsData?.map((news, index) => {
            return (
              <Link
                key={index}
                href={news.link}
                style={{
                  textDecoration: 'none',
                  padding: '0 30px',
                  borderRight: '2px solid gray',
                }}
              >
                <div
                  className='d-flex align-items-center gap-4 justify-content-center  text-center '
                  style={{}}
                >
                  <div
                    className=''
                    style={{
                      height: '70px',
                      width: '110px',
                      objectFit: 'contain',
                    }}
                  >
                    <img
                      src={`https://noormahalpalace.com/files/${news.image.path}`}
                      alt='ad-news '
                      style={{
                        objectFit: 'fill',
                        height: '87%',
                        width: '100%',
                      }}
                    />
                  </div>
                  <p className='news-text pt-2'>{news.title}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </marquee>
    </div>
  );
}

export default NewsSection;
