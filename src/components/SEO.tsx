import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown>;
  noindex?: boolean;
}

const SITE_NAME = "Juan Reyes Portfolio";
const DEFAULT_TITLE = "Juan Reyes | Senior Frontend Developer";
const DEFAULT_DESCRIPTION =
  "Senior Frontend Developer with 7+ years experience building enterprise-scale React and Vue.js applications. Expert in design systems, performance optimization, and technical leadership.";
const BASE_URL = "https://juanreyes.dev";
const DEFAULT_OG_IMAGE = "https://lovable.dev/opengraph-image-p98pqg.png";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  jsonLd,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title ? `${title} | Juan Reyes` : DEFAULT_TITLE;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};

export default SEO;
