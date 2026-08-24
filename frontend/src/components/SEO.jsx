import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogTitle, ogDescription, url, image, type = 'website' }) => {
  const defaultTitle = "Greenbae - Natural Health & Wellness";
  const defaultDescription = "Discover our natural health products, Veggie Vitals and Nutri Mix, for your daily wellness.";
  const defaultImage = "https://greenbae.in/images/greenbae-social-share.jpg";
  const defaultUrl = "https://greenbae.in/";

  const seoTitle = title || defaultTitle;
  const seoDescription = description || defaultDescription;
  
  // Use specific social metadata if provided, otherwise fallback to the standard SEO ones
  const socialTitle = ogTitle || seoTitle;
  const socialDescription = ogDescription || seoDescription;

  const seoImage = image || defaultImage;
  const seoUrl = url || defaultUrl;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={seoUrl} />

      {/* Open Graph / Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:site_name" content="Greenbae" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={seoImage} />
    </Helmet>
  );
};

export default SEO;
