import InstaFeedGallery from '@/components/Instagram/InstaFeedGallery';
import IntroVideo from '@/components/IntroVideo/IntroVideo';
import React from 'react';

function index() {
  const instaToken =
    'IGQVJYN1hpYnBIZAXRWbVRNUXpEWDA1Um44MmhUR1psbHhaTkZAnTDktaGVaOUJfZAWpNeE9mLWZAnekZAUVEdEVjVLenRnQWRRcXdsS1doUWpyNmxNZAjNJUlBkYXM3UEExUDNQYWVpNUtGZAHpIX0tJYUtMSwZDZD';

  return (
    <div>
      <InstaFeedGallery token={instaToken} limit={6} />
    </div>
  );
}

export default index;
