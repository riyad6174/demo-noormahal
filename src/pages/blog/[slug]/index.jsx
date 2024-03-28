import { getSingleBlog } from '@/utils/API';
import { BlogMain } from '@/utils/Contents/blog';
import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

function index() {
  const router = useRouter();
  const { slug } = router.query;

  console.log(slug, 'slug');
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getSingleBlog(slug);
    if (response && response.status) {
      if (response.data.data) {
        setData(response.data.data);
        console.log(response.data, 'blog list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  console.log(data);

  return (
    <div>
      {data && (
        <section className='blog_details_wrapper default_section_gap pt-5'>
          <div className='instagram-container mx-auto'>
            <div className='blog_details_content mx-auto'>
              <h3 className='blog_title'>{data?.title}</h3>
              <div className='blog_footer d-flex align-items-center flex-wrap'>
                {data.image?.path && (
                  <div className='user_grid'>
                    <a href='#'>
                      <img
                        src={`https://api.noormahalpalace.com/${data.image?.path}`}
                        alt='user image'
                      />
                    </a>
                    <a href='#'>{data?.author}</a>
                  </div>
                )}

                <a href='#'>{data?.publishedDate}</a>
              </div>
            </div>
            {data.image && (
              <div className='blog_details_img text-center'>
                <img
                  src={`https://api.noormahalpalace.com/${data.image?.path}`}
                  alt='user image'
                />
              </div>
            )}

            <div className='blog_details_content mx-auto'>
              <div
                className='content_item'
                dangerouslySetInnerHTML={{ __html: data?.description }}
              >
                {}
              </div>
            </div>
            {/* <div className='blog_details_img text-center'>
              <img
                src='/assets/images/blog/blog_details_img2.png'
                alt='blog details'
              />
            </div>
            <div className='text-center mt-4'>
              <img src='/assets/images/blog/o-ads-space.png' alt='ads image' />
            </div>
            <div className='blog_details_content mx-auto'>
              <div className='content_item'>
                <h4 className='blog_title'>Pack Lightly and Smartly</h4>
                <p>
                  Packing can be a daunting task, but with some careful planning
                  and smart choices, you can pack light and efficiently. Start
                  by making a packing list and sticking to it, focusing on
                  versatile and comfortable clothing that can be mixed and
                  matched. Invest in quality luggage and packing organizers to
                  maximize space and minimize wrinkles.
                </p>
              </div>
              <div className='content_item'>
                <h4 className='blog_title'>Stay Safe and Healthy</h4>
                <p>
                  Traveling can expose you to new environments and potential
                  health risks, so it's crucial to take precautions to stay safe
                  and healthy. This includes researching any required
                  vaccinations or medications, staying hydrated, washing your
                  hands frequently, and using sunscreen and insect repellent.
                  It's also essential to keep your valuables safe and secure and
                  to be aware of your surroundings at all times.
                </p>
              </div>
              <div className='content_item'>
                <h4 className='blog_title'>
                  Immerse Yourself in the Local Culture
                </h4>
                <p>
                  One of the most rewarding aspects of traveling is immersing
                  yourself in the local culture and customs. This includes
                  trying local cuisine, attending cultural events and festivals,
                  and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections
                  and showing respect.
                </p>
              </div>
              <div className='content_item'>
                <h4 className='blog_title'>Capture Memories</h4>
                <p>
                  Finally, don't forget to capture memories of your journey.
                  Whether it's through photographs, journaling, or souvenirs,
                  preserving the moments and experiences of your travels can
                  bring joy and nostalgia for years to come. However, it's also
                  essential to be present in the moment and not let technology
                  distract you from the beauty of your surroundings.
                </p>
              </div>
              <div className='content_item'>
                <h4 className='blog_title'>Conclusion:</h4>
                <p>
                  Traveling is an art form that requires a blend of planning,
                  preparation, and spontaneity. By following these tips and
                  tricks, you can make the most of your journey and create
                  memories that last a lifetime. So pack your bags, embrace the
                  adventure, and enjoy the ride.
                </p>
              </div>
            </div> */}
          </div>
        </section>
      )}
    </div>
  );
}

export default index;
