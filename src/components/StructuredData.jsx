import Script from 'next/script';

// https://www.codeconcisely.com/posts/nextjs-structured-data/
// https://prismic.io/docs/schema-org-nextjs

const structuredSchema = {
  '@context': 'https://schema.org',
  '@type': 'Corporation',
  name: 'Noor Mahal Palace',
  alternateName: 'NOOR MAHAL,KARNAL',
  url: 'https://www.noormahalpalace.com/',
  logo: 'https://www.noormahalpalace.com/',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91 9996787891',
    contactType: 'reservations',
    areaServed: 'IN',
    availableLanguage: ['en', 'Hindi'],
  },
  sameAs: [
    'https://www.facebook.com/noormahalhotel/',
    'https://www.instagram.com/noormahalpalace/',
    'https://www.youtube.com/channel/UCmKdGeiT1FPsucM0dfzX33g',
    'https://in.linkedin.com/company/hotel-noor-mahal',
  ],
};

// Google Tag Manager
export const StructuredData = () => {
  return (
    <>
      <Script
        key='structured-data'
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
      />
    </>
  );
};
