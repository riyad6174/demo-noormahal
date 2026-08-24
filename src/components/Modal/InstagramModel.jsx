import { Modal } from 'react-bootstrap';
import { AiFillCloseCircle } from 'react-icons/ai';

const InstagramModel = (props) => {
  const { id, caption, like_count = 200, media_type, media_url } = props.feed;
  let post;

  switch (media_type) {
    case 'VIDEO':
      post = (
        <div className=' bg-white'>
          <div className=' d-flex justify-content-center'>
            <video
              src={media_url}
              type='video/mp4'
              controls
              playsInline
            ></video>
          </div>

          <div className='text-container'>
            <div className='text-wrap'>
              <div className='feed-caption'>
                <p>{caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case 'CAROUSEL_ALBUM':
      post = (
        <div className=''>
          <div className='image-container'>
            <a href={media_url} target='_blank' rel='noreferrer'>
              <img id={id} src={media_url} alt={caption} />
            </a>
          </div>
          <div className='text-container'>
            <div className='text-wrap'>
              <div className='div-like-count'>
                <svg className='like-count-icon' viewBox='0 0 24 24'>
                  <path
                    d='M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
                          c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
                          c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
                          c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
                          c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z'
                  ></path>
                </svg>

                {/* <span className="like-count">{like_count}</span> */}
              </div>
              <div className='feed-caption'>
                <p>{caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    default:
      post = (
        <div className=''>
          <div className='image-container'>
            <a href={media_url} target='_blank' rel='noreferrer'>
              <img id={id} src={media_url} alt={caption} />
            </a>
          </div>
          <div className='text-container'>
            <div className='text-wrap'>
              <div className='div-like-count'>
                <svg className='like-count-icon' viewBox='0 0 24 24'>
                  <path
                    d='M17.7,1.5c-2,0-3.3,0.5-4.9,2.1c0,0-0.4,0.4-0.7,0.7c-0.3-0.3-0.7-0.7-0.7-0.7c-1.6-1.6-3-2.1-5-2.1C2.6,1.5,0,4.6,0,8.3
                          c0,4.2,3.4,7.1,8.6,11.5c0.9,0.8,1.9,1.6,2.9,2.5c0.1,0.1,0.3,0.2,0.5,0.2s0.3-0.1,0.5-0.2c1.1-1,2.1-1.8,3.1-2.7
                          c4.8-4.1,8.5-7.1,8.5-11.4C24,4.6,21.4,1.5,17.7,1.5z M14.6,18.6c-0.8,0.7-1.7,1.5-2.6,2.3c-0.9-0.7-1.7-1.4-2.5-2.1
                          c-5-4.2-8.1-6.9-8.1-10.5c0-3.1,2.1-5.5,4.9-5.5c1.5,0,2.6,0.3,3.8,1.5c1,1,1.2,1.2,1.2,1.2C11.6,5.9,11.7,6,12,6.1
                          c0.3,0,0.5-0.2,0.7-0.4c0,0,0.2-0.2,1.2-1.3c1.3-1.3,2.1-1.5,3.8-1.5c2.8,0,4.9,2.4,4.9,5.5C22.6,11.9,19.4,14.6,14.6,18.6z'
                  ></path>
                </svg>

                <span className='like-count'>{like_count}</span>
              </div>
              <div className='feed-caption'>
                <p>{caption}</p>
              </div>
            </div>
          </div>
        </div>
      );
  }

  return (
    <Modal className='h-75 ' show={props.show} centered onHide={props.onHide}>
      <Modal.Header className='border-0 sticky-top bg-white  m-0'>
        <div className='d-flex w-100 '>
          <section className='instagram_gallery_wrapper '>
            <div className='instagram-container mx-auto '>
              <div className='user_area'>
                <div className='user_grid mx-auto'>
                  <img
                    src='assets/images/home/experience_img4.png'
                    alt='user image'
                  />
                  <div>
                    <a href='#' target='_blank' className='name'>
                      Noor Mahal Karnal
                    </a>
                    <a href='#' target='_blank' className='link'>
                      {' '}
                      @noormahalkarnal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className='ms-auto'>
            <button
              type='button'
              className={`btn btn-danger border-0 btn-circle shadow-none custom-cursor`}
              onClick={props.onHide}
            >
              {/* <X size={18} /> */}
              <AiFillCloseCircle />
            </button>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className='px-20 pb-4 pt-0'>
        <div className='row'>
          <div className='col-md-12 instagram-modal'>{post}</div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InstagramModel;
