"use client";

import { useState } from "react";
import { Book, BookOpen, ChevronRight } from "lucide-react";
import { GiOpenBook } from "react-icons/gi";

const ARTICLES = [
  {
    id: "nutrition-energy",
    title: "Plant-Based Nutrition For Everyday Energy",
    description:
      "Simple food choices that nourish your body and mind naturally.",
    category: "Nutrition",
    readTime: 6,
    image: "/images/recipes-habits.png",
  },
  {
    id: "family-routines",
    title: "How To Build Healthy Routines As A Family",
    description: "Small changes at home that create lifelong wellness habits.",
    category: "Family Wellness",
    readTime: 7,
    image: "/images/recipes-habits.png",
  },
  {
    id: "herbal-tea",
    title: "Herbal Teas & Their Everyday Benefits",
    description:
      "Nature's simple remedies for immunity, digestion and relaxation.",
    category: "Natural Living",
    readTime: 5,
    image: "/images/recipes-habits.png",
  },
  {
    id: "kids-immunity",
    title: "Boosting Immunity In Growing Children",
    description: "Natural ways to support immunity through food and lifestyle.",
    category: "Kids Wellness",
    readTime: 6,
    image: "/images/recipes-habits.png",
  },
  {
    id: "healthy-aging",
    title: "Stay Active, Stay Young At Every Age",
    description:
      "Easy daily habits for energy, mobility and mental well-being.",
    category: "Healthy Aging",
    readTime: 6,
    image: "/images/recipes-habits.png",
  },
  {
    id: "breakfast-ideas",
    title: "5 Easy Breakfast Ideas For Busy Mornings",
    description: "Nutritious, quick and delicious to start your day right.",
    category: "Recipes & Habits",
    readTime: 6,
    image: "/images/recipes-habits.png",
  },
];

const CATEGORIES = [
  "All",
  "Nutrition",
  "Family Wellness",
  "Kids Wellness",
  "Healthy Living",
  "Healthy Aging",
  "Recipes & Habits",
  "Natural Living",
];

const CATEGORY_ICONS = {
  All: "⊞",
  Nutrition: "🌿",
  "Family Wellness": "👥",
  "Kids Wellness": "👤",
  "Healthy Living": "🌿",
  "Natural Living": "🌿",
  "Recipes & Habits": "🥗",
  "Healthy Aging": "👥",
};

export default function LatestInsights() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? ARTICLES
      : ARTICLES.filter((article) => article.category === selectedCategory);

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f5f5f0] to-[#efefea] py-12 md:py-16 lg:py-20">
      {/* Decorative foliage */}
      <div className="absolute -top-8 -left-8 opacity-40">
        <svg className="w-32 h-32" viewBox="0 0 100 100" fill="none">
          <path
            d="M20,50 Q30,30 40,40 Q50,25 60,45 Q70,35 80,50"
            stroke="#1c3e1e"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm md:text-base font-semibold text-[#1c3e1e] tracking-wide mb-2">
            🌿 LATEST FROM THE HUB
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1c3e1e] mb-4 text-balance">
            Latest Wellness Insights
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#4d8745] to-transparent" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Fresh perspectives, practical tips, and expert advice — curated to
            help you and your family live better every day.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10 md:mb-14">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#1c3e1e] text-white shadow-md"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-[#1c3e1e] hover:text-[#1c3e1e]"
              }`}
            >
              {/* <span className="text-lg">{CATEGORY_ICONS[category]}</span> */}
              <span className="hidden sm:inline">{category}</span>
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {/* Articles Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredArticles.slice(0, 6).map((article) => (
                <div
                  key={article.id}
                  className="group cursor-pointer border relative  rounded-xl"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-4 h-40 sm:h-48 md:h-56">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Category Badge */}
                  </div>
                  <div className="absolute top-[50%] left-3 text-[#1c3e1e] bg-white text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category.toUpperCase()}
                  </div>
                  <div className="p-4">
                    {/* Content */}
                    <div className="flex items-start gap-2 mb-3">
                      <svg
                        className="w-4 h-4 text-[#4d8745] flex-shrink-0 mt-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <circle
                          cx="10"
                          cy="10"
                          r="8"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {article.readTime} min read
                      </span>
                    </div>

                    <h3 className="text-base md:text-lg font-serif text-[#1c3e1e] mb-2 leading-snug group-hover:text-[#2d5e2e] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Read More Link */}
                    <button className="inline-flex items-center gap-1 text-[#1c3e1e] font-medium text-sm hover:text-[#2d5e2e] transition-colors group/link">
                      Read More
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="lg:sticky h-screen lg:top-20 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="text-center mb-6 ">
                <div className="inline-flex items-center justify-center m-10 p-8 rounded-full  w-30 h-30 bg-[#fffcee]  ">
                  <BookOpen className="text-white w-full h-full text-[#1c3e1e]" color="#1c3e1e"/>
                </div>
                <h3 className="text-lg md:text-4xl leading-15 font-serif text-[#1c3e1e] mb-2">
                  Keep Learning Every Day
                </h3>
              </div>

              <p className="text-gray-600 text-sm mb-6 text-center">
                New insights are added regularly. There&apos;s always something
                new to explore.
              </p>

              <button className="w-full bg-[#1c3e1e] hover:bg-[#0f2813] text-white font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-sm">
                Explore All Articles
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="mt-12 md:mt-16 flex items-start gap-4 md:gap-6 bg-white bg-opacity-60 rounded-lg p-6 md:p-8 border border-gray-100">
          <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-12 h-12 bg-[#1c3e1e] rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 3C6.13 3 3 6.13 3 10s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7z" />
              </svg>
            </div>
          </div>
          <div>
            <h4 className="text-lg md:text-xl font-serif text-[#1c3e1e] mb-2">
              Wellness is a journey, not a destination.
            </h4>
            <p className="text-gray-600 text-sm md:text-base">
              One article at a time, small steps lead to lifelong well-being.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
