import React, { useEffect, useState } from 'react';
import { getPlaiceholder } from 'plaiceholder';
import Image from 'next/image';

async function generateBlurDataURL(src) {
  const response = await fetch(src);
  const buffer = Buffer.from(await response.arrayBuffer());
  const { base64 } = await getPlaiceholder(buffer);
  return base64;
}

function CustomImage({ src }) {
  const [blurDataURL, setBlurDataURL] = useState('');

  useEffect(() => {
    generateBlurDataURL(src)
      .then((dataURL) => setBlurDataURL(dataURL))
      .catch((error) =>
        console.error('Error generating blur data URL:', error)
      );
  }, [src]);

  return (
    <Image
      src={src}
      alt='dinings image'
      height={600}
      width={1000}
      // placeholder='blur'
      blurDataURL={blurDataURL}
    />
  );
}

export default CustomImage;
