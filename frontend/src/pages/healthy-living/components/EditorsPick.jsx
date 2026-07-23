'use client';

import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';

const ARTICLE_CARDS = [
  {
    id: 'nutrition',
    image: "/images/natural-living.png",
    category: 'NUTRITION',
    readTime: '5 min read',
    title: 'Why Daily Nutrition Matters',
    description: 'Discover how consistent, balanced nutrition every day can improve energy, immunity, and overall well-being.',
    link: '#',
  },
  {
    id: 'antioxidants',
    image: "/images/natural-living.png",
    category: 'NATURAL LIVING',
    readTime: '6 min read',
    title: 'Understanding Antioxidants',
    description: 'A simple guide to antioxidants, their benefits, and natural sources you can include in your diet.',
    link: '#',
  },
  {
    id: 'lifestyle',
    image: "/images/natural-living.png",
    category: 'LIFESTYLE',
    readTime: '4 min read',
    title: 'Small Daily Habits That Improve Wellness',
    description: 'Small changes, big impact. Simple daily habits that support a healthier body and calmer mind.',
    link: '#',
  },
  {
    id: 'kids',
    image: "/images/natural-living.png",
    category: 'KIDS WELLNESS',
    readTime: '5 min read',
    title: 'Helping Kids Develop Healthy Food Habits',
    description: 'Practical tips to encourage kids to eat better, enjoy meals, and build healthy habits for life.',
    link: '#',
  },
];

export default function EditorsPicks() {
  return (
    <section className="w-full bg-[#faf7f1] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#4d8745]">
            <span className="inline-flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              Editor&apos;s Picks
            </span>
          </p>
          <h2 className="text-4xl  md:text-5xl font-serif text-[#1c3e1e] mb-2">
            Editor&apos;s Picks
          </h2>
          <div className="mx-auto mb-4 h-1 w-12 bg-gradient-to-r from-transparent via-[#4d8745] to-transparent" />
          <p className="mx-auto max-w-2xl text-lg text-gray-700">
            Handpicked articles by our wellness experts to inspire better choices and healthier living.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ARTICLE_CARDS.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-900 uppercase tracking-wide">
                  {article.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Read Time */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="text-lg">⏱️</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif text-[#1c3e1e] mb-3 line-clamp-3">
                  {article.title}
                </h3>        <div className="my-2 h-[2px] w-7 bg-[#c2a45c] lg:my-4 lg:w-10" />


                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {article.description}
                </p>

                {/* Read More Link */}
                <a
                  href={article.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 text-[#1c3e1e] hover:text-[#4d8745] transition-colors group"
                >
                  Read More
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="flex gap-6 items-start md:items-center">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-[#1c3e1e] rounded-full flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-serif text-[#1c3e1e] mb-2">
                Knowledge is the first step to wellness.
              </h3>
              <p className="text-gray-700 text-sm md:text-base">
                Our articles are backed by research, written by experts, and designed for real families.
              </p>
            </div>
          </div>
          <a
            href="#insights"
            className="inline-flex items-center gap-2 bg-[#1c3e1e] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5028] transition-colors whitespace-nowrap"
          >
            View All Articles
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
