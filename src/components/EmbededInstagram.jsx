import Script from 'next/script';
import { useEffect } from 'react';

const InstagramEmbed = () => {
  useEffect(() => {
    // Wait for Instagram script to load and then apply custom CSS
    const interval = setInterval(() => {
      const profileSection = document.querySelector('.instagram-media');
      if (profileSection) {
        profileSection.style.display = 'flex';
        profileSection.style.flexDirection = 'column';
        profileSection.style.alignItems = 'center';
        profileSection.style.textAlign = 'center';
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Wrapper to control alignment */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        {/* Instagram Embed Container */}
        <blockquote
          className='instagram-media'
          data-instgrm-permalink='https://www.instagram.com/noormahalpalace'
          data-instgrm-version='12'
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow:
              '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            // maxWidth: '540px',
            // minWidth: '326px',
            padding: '0',
            width: '100%',
          }}
        />
      </div>

      {/* Instagram Embed Script */}
      <Script src='https://www.instagram.com/embed.js' strategy='lazyOnload' />
    </>
  );
};

export default InstagramEmbed;
