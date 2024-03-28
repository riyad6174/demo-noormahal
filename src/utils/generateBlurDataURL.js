import lqip from 'lqip';
export async function generateBlurDataURL(imagePath) {
  const result = await lqip.base64(imagePath);

  // Replace the deprecated Buffer constructor with Buffer.from
  result.metadata.data = Buffer.from(result.metadata.data, 'base64');

  return result;
}
