import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import articlesData from '../../data/articles.js';

const SingleArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#fcf6ee] text-[#1c3e1e] px-4">
        <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
        <p className="mb-6">The article you are looking for does not exist.</p>
        <button 
          onClick={() => navigate(-1)}
          className="bg-[#1c3e1e] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2b4c18] transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Split content by double newlines into paragraphs
  const paragraphs = article.content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <div className="bg-[#fcf6ee] min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-[#4d8745] hover:text-[#1c3e1e] font-semibold mb-8 transition-colors group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Articles
        </button>

        {/* Category Tag */}
        <div className="mb-4">
          <span className="inline-block bg-[#eef2e6] text-[#345920] font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border border-[#d1e6d3]">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1c3e1e] mb-6 leading-tight">
          {article.title}
        </h1>

        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-8 border-b border-gray-200 pb-6">
          <div className="flex items-center">
            <Clock size={16} className="mr-1.5 text-[#4d8745]" />
            <span>{article.readTime} min read</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <div className="flex items-center">
            <Calendar size={16} className="mr-1.5 text-[#4d8745]" />
            <span>{article.date}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden mb-10 shadow-md">
          <img 
            src={article.image} 
            alt={article.title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-green max-w-none text-gray-700 space-y-6">
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-[17px] md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
