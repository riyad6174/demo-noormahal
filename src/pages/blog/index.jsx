import { getBlog } from '@/utils/API';
import { BlogMain } from '@/utils/Contents/blog';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

function page() {
  const [slicedIndex, setSlicedIndex] = useState(6);
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getBlog();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data);
        console.log(response.data?.data, 'blog list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <section className='blog_wrapper pt-4 default_section_gap'>
        <div className='blog-container mx-auto'>
          <div className='blog_grid'>
            {data.length > 0 &&
              data.slice(0, slicedIndex).map((item, index) => {
                return (
                  <div className='blog_item' data-aos='fade-up'>
                    <Link href={`/blog/${item.slug}`} className='title'>
                      <Image
                        height={250}
                        width={500}
                        src={`https://api.noormahalpalace.com/${item.image?.path}`}
                        alt='blog image'
                      />
                    </Link>

                    <div className='content'>
                      {/* <ul className='tag_list d-flex align-items-center flex-wrap g-sm'>
                        <li>
                          <a href='#' target='_blank'>
                            {' '}
                            FOOD{' '}
                          </a>
                        </li>
                      </ul> */}
                      <Link href={`/blog/${item.slug}`} className='title'>
                        {item.title}
                      </Link>
                      <div className='blog-content'>
                        <p>{item?.subTitle}</p>
                      </div>
                      <div className='blog_footer d-flex-between'>
                        <div className='user_grid'>
                          {/* <img
                          src='assets/images/blog/writer_img1.png'
                          alt='user image'
                        /> */}
                          <h4>{item.author}</h4>
                        </div>
                        <a href='#'>{item.publishedDate.split('T')[0]}</a>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className='text-center mt-4'>
            <button
              onClick={() => {
                setSlicedIndex(slicedIndex + 3);
              }}
              type='button'
              className='load_more_btn'
            >
              <span>Load more</span>
            </button>
          </div>
          {/* <div className='text-center mt-4 pt-5'>
            <img src='assets/images/blog/o-ads-space.png' alt='ads image' />
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default page;
