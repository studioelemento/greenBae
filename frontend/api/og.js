// This serverless function serves the correct OG meta tags for social media crawlers.
// It returns a minimal HTML page with product-specific meta tags that WhatsApp,
// Facebook, Twitter etc. can read without executing JavaScript.

const PRODUCTS_SEO = {
  "veggie-vitals-daily-nutrition-blend": {
    title: "Greenbae Veggie Vitals | Our Natural Vegetable Drink Mix",
    description:
      "Greenbae Veggie Vitals is our thoughtfully crafted blend of vegetables, fruits, herbs and spices, made for a simple and nourishing everyday drink.",
    image: "https://greenbae.in/images/veggie-vitals-social.png",
    url: "https://greenbae.in/veggie-vitals-daily-nutrition-blend",
    type: "product",
  },
  "nutri-mix-fiber-rich-nutrition": {
    title: "Greenbae Nutrimix | Natural Banana, Ragi & Moringa Mix",
    description:
      "At Greenbae, we bring together raw banana, ragi, moringa and cardamom in Nutrimix — a thoughtfully crafted blend for nourishing everyday meals.",
    image: "https://greenbae.in/images/nutri-mix-social.png",
    url: "https://greenbae.in/nutri-mix-fiber-rich-nutrition",
    type: "product",
  },
};

const PAGES_SEO = {
  products: {
    title: "Our Products | Greenbae",
    description:
      "Explore Greenbae's natural product line including Veggie Vitals and Nutri Mix. Wholesome nutrition for the whole family.",
    image: "https://greenbae.in/images/greenbae-social-share.png",
    url: "https://greenbae.in/products",
  },
  "our-story": {
    title: "Our Story | Greenbae",
    description:
      "Learn about Greenbae's journey — a family wellness brand rooted in nature and everyday nutrition.",
    image: "https://greenbae.in/images/greenbae-social-share.png",
    url: "https://greenbae.in/our-story",
  },
  "our-mission": {
    title: "Our Mission | Greenbae",
    description:
      "Greenbae's mission is to make natural, wholesome nutrition accessible to every family.",
    image: "https://greenbae.in/images/greenbae-social-share.png",
    url: "https://greenbae.in/our-mission",
  },
  "healthy-living-hub": {
    title: "Healthy Living Hub | Greenbae",
    description:
      "Explore tips, insights and articles on healthy living, nutrition and wellness from Greenbae.",
    image: "https://greenbae.in/images/greenbae-social-share.png",
    url: "https://greenbae.in/healthy-living-hub",
  },
  contact: {
    title: "Contact Us | Greenbae",
    description:
      "Get in touch with Greenbae. We'd love to hear from you about our products and wellness journey.",
    image: "https://greenbae.in/images/greenbae-social-share.png",
    url: "https://greenbae.in/contact",
  },
};

const DEFAULT_SEO = {
  title: "Greenbae | Natural Wellness & Everyday Nutrition",
  description:
    "Discover Greenbae, a family wellness brand offering thoughtfully made natural food products for everyday nutrition, healthy living and mindful choices.",
  image: "https://greenbae.in/images/greenbae-social-share.png",
  url: "https://greenbae.in/",
};

// Social media crawler User-Agent patterns
const BOT_USER_AGENTS = [
  "facebookexternalhit",
  "Facebot",
  "Twitterbot",
  "WhatsApp",
  "LinkedInBot",
  "Slackbot",
  "TelegramBot",
  "Discordbot",
  "Pinterest",
];

function isCrawler(userAgent) {
  if (!userAgent) return false;
  return BOT_USER_AGENTS.some((bot) =>
    userAgent.toLowerCase().includes(bot.toLowerCase())
  );
}

function buildHtml(seo) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${seo.title}</title>
  <meta name="description" content="${seo.description}" />
  <link rel="canonical" href="${seo.url}" />

  <!-- Open Graph / Facebook / WhatsApp -->
  <meta property="og:type" content="${seo.type || "website"}" />
  <meta property="og:url" content="${seo.url}" />
  <meta property="og:title" content="${seo.title}" />
  <meta property="og:description" content="${seo.description}" />
  <meta property="og:image" content="${seo.image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="Greenbae" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="${seo.url}" />
  <meta name="twitter:title" content="${seo.title}" />
  <meta name="twitter:description" content="${seo.description}" />
  <meta name="twitter:image" content="${seo.image}" />
</head>
<body></body>
</html>`;
}

export default function handler(req, res) {
  const userAgent = req.headers["user-agent"] || "";

  // Only serve meta-tag HTML to social media crawlers
  if (!isCrawler(userAgent)) {
    // For normal users, redirect to the SPA page
    const slug = req.query.slug || "";
    return res.redirect(302, `/${slug}`);
  }

  const slug = req.query.slug || "";

  // Find matching SEO data
  const seo = PRODUCTS_SEO[slug] || PAGES_SEO[slug] || DEFAULT_SEO;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  return res.status(200).send(buildHtml(seo));
}
