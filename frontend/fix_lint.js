import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const dirFile = path.join(dir, file);
    if (fs.statSync(dirFile).isDirectory()) {
      filelist = walkSync(dirFile, filelist);
    } else {
      if (dirFile.endsWith('.jsx') || dirFile.endsWith('.tsx') || dirFile.endsWith('.js')) {
        filelist.push(dirFile);
      }
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;

  // Remove `import React from 'react';` or `import React from "react";`
  content = content.replace(/^import React from ['"]react['"];?\r?\n/gm, '');
  
  // Replace `import React, { ... } from 'react';` with `import { ... } from 'react';`
  content = content.replace(/^import React,\s*\{/gm, 'import {');

  // Specific unused imports removal
  if (file.endsWith('HealthyLivingPage.jsx')) {
    content = content.replace(/import HealthyLivingHero from ".*?";\r?\n/, '');
    content = content.replace(/import ExploreByTopic from ".*?";\r?\n/, '');
    content = content.replace(/import EditorsPicks from ".*?";\r?\n/, '');
    content = content.replace(/import LatestInsights from ".*?";\r?\n/, '');
  }
  if (file.endsWith('JoinMovementCTA.jsx')) {
    content = content.replace(/ChevronRight,\s*/, '');
  }
  if (file.endsWith('LatestInsights.jsx')) {
    content = content.replace(/Book,\s*/, '');
    content = content.replace(/GiOpenBook,\s*/, '');
    content = content.replace(/const CATEGORY_ICONS = \{[\s\S]*?\};\r?\n\r?\n/, '');
  }
  if (file.endsWith('BridgingGap.jsx')) {
    content = content.replace(/Droplets,\s*/, '');
  }
  if (file.endsWith('MoreThanName.jsx')) {
    content = content.replace(/ShieldCheck,\s*/, '');
    content = content.replace(/Quote,\s*/, '');
  }
  if (file.endsWith('ProductFamilies.jsx')) {
    content = content.replace(/ChevronRight,\s*/, '');
  }
  if (file.endsWith('ingredients.jsx')) {
    content = content.replace(/import LeafDivider from ".*?";\r?\n/, '');
  }
  if (file.endsWith('single product.jsx')) {
    content = content.replace(/Check,\s*/, '');
    content = content.replace(/Shield,\s*/, '');
    content = content.replace(/import FSSAI from ".*?";\r?\n/, '');
  }

  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
