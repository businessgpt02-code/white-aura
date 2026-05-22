import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, name, type, url }) => {
  const siteTitle = title ? `${title} | White Aura Laundry Services` : 'White Aura Laundry Services - Premium Care for Your Garments';
  const defaultDesc = 'Premium laundry, dry cleaning, and garment care services. Experience the freshest, most reliable laundry service with White Aura.';
  
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{siteTitle}</title>
      <meta name='description' content={description || defaultDesc} />
      
      {/* OpenGraph tags */}
      <meta property="og:type" content={type || 'website'} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description || defaultDesc} />
      <meta property="og:site_name" content="White Aura Laundry Services" />
      {url && <meta property="og:url" content={url} />}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name || 'White Aura'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description || defaultDesc} />
    </Helmet>
  );
};

export default SEO;
