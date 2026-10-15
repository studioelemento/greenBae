import { useParams } from 'react-router-dom';
import SingleProduct from '../pages/products/components/single product';
import SingleArticle from '../pages/article/SingleArticle';
import articlesData from '../data/articles.js';

const PRODUCT_SLUGS = [
  'veggie-vitals-daily-nutrition-blend',
  'nutri-mix-fiber-rich-nutrition',
  'veggie-vitals',
  'nutri-mix'
];

const DynamicSlugRoute = () => {
  const { slug } = useParams();

  // 1. If it matches a known product slug, render SingleProduct
  if (PRODUCT_SLUGS.includes(slug)) {
    return <SingleProduct />;
  }

  // 2. If it matches an article (by slug or numeric id), render SingleArticle
  const isArticle = articlesData.some(
    (a) => a.slug === slug || a.id === slug
  );
  if (isArticle) {
    return <SingleArticle />;
  }

  // 3. Fallback to SingleArticle (which displays a styled "Article Not Found" if unmatched)
  return <SingleArticle />;
};

export default DynamicSlugRoute;
