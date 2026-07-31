const fs = require('fs');
const files = {
  'src/components/layout/Navbar.jsx': content => content.replace(/ShoppingBag,\s*/, ''),
  'src/pages/article/SingleArticle.jsx': content => content.replace(/Link,\s*/, ''),
  'src/pages/healthy-living/HealthyLivingPage.jsx': content => content.replace(/import HealthyLivingHero.*?\n/g, '').replace(/import ExploreByTopic.*?\n/g, '').replace(/import EditorsPicks.*?\n/g, '').replace(/import LatestInsights.*?\n/g, ''),
  'src/pages/healthy-living/components/LatestInsights.jsx': content => content.replace(/GiOpenBook,\s*/, ''),
  'src/pages/home/components/Story.jsx': content => "import React from 'react';\n" + content,
  'src/pages/ourstory/components/MoreThanName.jsx': content => content.replace(/Quote,\s*/, ''),
  'src/pages/products/components/ingredients.jsx': content => content.replace(/import LeafDivider.*?\n/g, ''),
  'src/pages/products/components/single product.jsx': content => content.replace(/import FSSAI.*?\n/g, '')
};
for (const [file, replacer] of Object.entries(files)) {
  const path = require('path').join('e:/Company-Project/StudioElementoProject/greenBae/frontend', file);
  if(fs.existsSync(path)) {
    const content = fs.readFileSync(path, 'utf8');
    fs.writeFileSync(path, replacer(content), 'utf8');
    console.log('Fixed ' + file);
  }
}
