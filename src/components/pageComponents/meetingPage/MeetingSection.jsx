import React from 'react';
import HtmlParser from 'react-html-parser';

function MeetingSection({ meetingData }) {
  console.log(meetingData);
  return (
    <div>
      <div className='dining_item_area'>
        {meetingData &&
          meetingData
            .map((meeting, index) => {
              if (index % 2 === 0) {
                return (
                  <div className='dining_grid'>
                    <div
                      className='img'
                      data-aos='fade-right'
                      data-aos-once='true'
                    >
                      <img
                        src={`https://noormahalpalace.com/files/${meeting.images[0].path}`}
                        alt='dinings image'
                      />
                    </div>
                    <div
                      className='content'
                      data-aos='fade-left'
                      data-aos-once='true'
                    >
                      <div className='inner_content_area mx-auto'>
                        <h3 className='heading_title text-center'>
                          {meeting.title}
                        </h3>
                        <span>{HtmlParser(meeting.description)}</span>
                        <div className='d-flex justify-content-center align-items-baseline  gap-3 total-capacity'>
                          <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                            <p className='text-uppercase'>total capacity</p>
                            <p>{meeting.totalCapacity}</p>
                          </div>
                          <div>|</div>
                          <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                            <p className='text-uppercase'>Seating capacity</p>
                            <p>{meeting.seatingCapacity}</p>
                          </div>
                        </div>

                        <div className='text-center'>
                          <button
                            className='book_table_btn'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          >
                            <span>Enquire Now </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className='dining_grid'>
                    <div
                      className='img'
                      data-aos='fade-right'
                      data-aos-once='true'
                    >
                      <img
                        src={`https://noormahalpalace.com/files/${meeting.images[0].path}`}
                        alt='dinings image'
                      />
                    </div>
                    <div
                      className='content'
                      data-aos='fade-left'
                      data-aos-once='true'
                    >
                      <div className='inner_content_area mx-auto'>
                        <h3 className='heading_title text-center'>
                          {meeting.title}
                        </h3>
                        <span>{HtmlParser(meeting.description)}</span>

                        <div className='d-flex justify-content-center align-items-baseline  gap-3 total-capacity'>
                          <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                            <p className='text-uppercase'>total capacity</p>
                            <p>{meeting.totalCapacity}</p>
                          </div>
                          <div>|</div>

                          <div className='d-flex gap-3 flex-column align-items-center justify-content-center'>
                            <p className='text-uppercase'>Seating capacity</p>
                            <p>{meeting.seatingCapacity}</p>
                          </div>
                        </div>

                        <div className='text-center'>
                          <button
                            className='book_table_btn'
                            data-bs-toggle='modal'
                            data-bs-target='#exampleModal'
                          >
                            <span>Enquire Now </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
            .reverse()}
      </div>
    </div>
  );
}

export default MeetingSection;
