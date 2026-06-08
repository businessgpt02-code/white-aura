import { Helmet } from 'react-helmet-async';

/**
 * SEO component — injects all head meta for a page.
 *
 * Props:
 *   title        – page-level title (appended to site name)
 *   description  – page meta description (150-160 chars ideal)
 *   keywords     – additional comma-separated keywords string
 *   canonical    – canonical URL for this page
 *   ogImage      – absolute URL for OG / Twitter card image
 *   schema       – additional JSON-LD object(s) to merge
 *   noIndex      – if true, adds noindex,nofollow
 */
const SEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  schema,
  noIndex = false,
}) => {
  const SITE_NAME   = 'White Aura Laundry Services';
  const BASE_URL    = 'https://www.whiteaura.ae'; // update when live
  const DEFAULT_IMG = `${BASE_URL}/logo1.png`;

  const siteTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} — Premium Dry Cleaning & Laundry Pickup Dubai`;

  const defaultDesc =
    'White Aura offers premium laundry, dry cleaning & garment care with free pickup and delivery in Dubai. Eco-friendly, fast turnaround, 2,000+ happy customers.';

  const metaDesc   = description || defaultDesc;
  const metaImage  = ogImage    || DEFAULT_IMG;
  const metaCanon  = canonical  || BASE_URL;

  const baseKeywords =
    'laundry service Dubai, dry cleaning Dubai, garment care, laundry pickup delivery, eco laundry, premium dry cleaning, White Aura laundry, same day laundry Dubai, wedding dress cleaning';

  const allKeywords = keywords
    ? `${baseKeywords}, ${keywords}`
    : baseKeywords;

  // ── LocalBusiness JSON-LD ─────────────────────────────────────────────────
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: SITE_NAME,
    description: metaDesc,
    url: BASE_URL,
    logo: DEFAULT_IMG,
    image: [DEFAULT_IMG],
    telephone: '+971502524034',
    priceRange: '$$',
    currenciesAccepted: 'AED',
    paymentAccepted: 'Cash, Credit Card',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dubai',
      addressCountry: 'AE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '25.2048',
      longitude: '55.2708',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '08:00',
        closes: '22:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2000',
      bestRating: '5',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Laundry & Dry Cleaning Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dry Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Laundry Pickup & Delivery' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Premium Garment Care' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wedding Dress Cleaning' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Express 24-Hour Service' } },
      ],
    },
    sameAs: [
      'https://www.instagram.com/whiteaura',
      'https://www.facebook.com/whiteaura',
    ],
  };

  // ── Website / SearchAction JSON-LD ────────────────────────────────────────
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: SITE_NAME,
    url: BASE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${BASE_URL}/services?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };

  const extraSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const schemas = [localBusinessSchema, websiteSchema, ...extraSchemas];

  return (
    <Helmet>
      {/* ── Core ────────────────────────────────────────────────────────── */}
      <html lang="en" />
      <title>{siteTitle}</title>
      <meta name="description"         content={metaDesc} />
      <meta name="keywords"            content={allKeywords} />
      <link rel="canonical"            href={metaCanon} />
      {noIndex && <meta name="robots"  content="noindex,nofollow" />}
      {!noIndex && <meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1" />}

      {/* ── Geo (local SEO) ─────────────────────────────────────────────── */}
      <meta name="geo.region"          content="AE-DU" />
      <meta name="geo.placename"       content="Dubai, United Arab Emirates" />
      <meta name="geo.position"        content="25.2048;55.2708" />
      <meta name="ICBM"                content="25.2048, 55.2708" />

      {/* ── Open Graph ──────────────────────────────────────────────────── */}
      <meta property="og:type"         content="website" />
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:title"        content={siteTitle} />
      <meta property="og:description"  content={metaDesc} />
      <meta property="og:url"          content={metaCanon} />
      <meta property="og:image"        content={metaImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"       content="en_AE" />

      {/* ── Twitter Card ────────────────────────────────────────────────── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@whiteaura" />
      <meta name="twitter:title"       content={siteTitle} />
      <meta name="twitter:description" content={metaDesc} />
      <meta name="twitter:image"       content={metaImage} />

      {/* ── JSON-LD Structured Data ─────────────────────────────────────── */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
