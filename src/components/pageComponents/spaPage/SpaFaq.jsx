import { getSpaFaq } from '@/utils/API';
import React, { useCallback, useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import 'bootstrap/dist/css/bootstrap.min.css';

function SpaFaq() {
  const [data, setData] = useState([]);

  const fetchData = useCallback(async () => {
    const response = await getSpaFaq();
    if (response && response.status) {
      if (response.data && Object.keys(response.data.data).length > 0) {
        setData(response.data?.data[0]);
        console.log(response.data?.data[0], 'faq list');
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <section className='spa_faq_wrapper default_section_gap'>
        <div className='spa-price-container mx-auto'>
          <div className='text-center'>
            <h3 className='story_title'>
              FREQUENTLY ASKED <br />
              QUESTIONS
            </h3>
          </div>
          <div className='spa_faq_grid'>
            <div className='spa_faq_img_area text-center'>
              <img
                src={`https://api.noormahalpalace.com/${data.image?.path}`}
                alt='spa faq image'
                className='faqq_image'
              />
            </div>
            <div className='faq_content_area'>
              <Accordion>
                {data?.faq?.map((singleFAQ, index) => (
                  <Accordion.Item eventKey={index.toString()}>
                    <Accordion.Header> {singleFAQ.question}</Accordion.Header>
                    <Accordion.Body>
                      <p>{singleFAQ.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SpaFaq;
