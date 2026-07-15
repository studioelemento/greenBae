"use client";

import { useState } from "react";
import {
  Search,
  ChevronRight,
  MoreHorizontal,
  Leaf,
  Users,
  ArrowRight,
  Mail,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", name: "All Articles", count: 72, icon: "⊞" },
  { id: "nutrition", name: "Nutrition", count: 18, icon: "🌿" },
  { id: "family", name: "Family Wellness", count: 12, icon: "👥" },
  { id: "kids", name: "Kids Wellness", count: 8, icon: "👤" },
  { id: "aging", name: "Healthy Aging", count: 10, icon: "💚" },
  { id: "natural", name: "Natural Living", count: 15, icon: "🌱" },
  { id: "recipes", name: "Recipes & Habits", count: 9, icon: "🥘" },
];

const ARTICLES = [
  {
    id: "1",
    image: "/images/insight-nutrition.png",
    category: "NUTRITION",
    readTime: 5,
    date: "May 20, 2024",
    title: "Why Daily Nutrition Matters",
    description:
      "Discover how consistent, balanced nutrition every day can improve energy, immunity, and overall well-being.",
  },
  {
    id: "2",
    image: "/images/insight-family.png",
    category: "FAMILY WELLNESS",
    readTime: 6,
    date: "May 18, 2024",
    title: "Building Healthy Family Routines",
    description:
      "Small changes at home that bring your family closer and support lifelong wellness.",
  },
  {
    id: "3",
    image: "/images/insight-kids.png",
    category: "KIDS WELLNESS",
    readTime: 3,
    date: "May 16, 2024",
    title: "Helping Kids Develop Healthy Habits",
    description:
      "Practical tips to help children build better eating, activity, and sleep habits naturally.",
  },
  {
    id: "4",
    image: "/images/insight-aging.png",
    category: "HEALTHY AGING",
    readTime: 6,
    date: "May 14, 2024",
    title: "Stay Active, Stay Young At Every Age",
    description:
      "Simple lifestyle choices that support energy, mobility, and mental well-being as you age.",
  },
  {
    id: "5",
    image: "/images/insight-tea.png",
    category: "NATURAL LIVING",
    readTime: 5,
    date: "May 20, 2024",
    title: "Herbal Teas & Their Everyday Benefits",
    description:
      "Nature's simple remedies for immunity, digestion, and relaxation.",
  },
  {
    id: "6",
    image: "/images/insight-breakfast.png",
    category: "RECIPES & HABITS",
    readTime: 4,
    date: "May 10, 2024",
    title: "5 Morning Habits That Transform Your Day",
    description:
      "Start your day right with these simple habits for better focus and wellness.",
  },
  {
    id: "7",
    image: "/images/insight-tea.png",
    category: "NATURAL LIVING",
    readTime: 6,
    date: "May 05, 2024",
    title: "Living Closer To Nature For Better Well-being",
    description:
      "How spending time in nature can reduce stress and improve health.",
  },
  {
    id: "8",
    image: "/images/insight-breakfast.png",
    category: "RECIPES & HABITS",
    readTime: 5,
    date: "May 08, 2024",
    title: "Quick & Healthy Breakfast Ideas",
    description: "Easy, nutritious breakfast ideas to fuel your body and mind.",
  },
];

export default function HealthyLivingInsights() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const [displayCount, setDisplayCount] = useState(8);

  const filteredArticles = ARTICLES.slice(0, displayCount).filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      article.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#f5f1ed] md:py-16 lg:py-20">
      <div className="max-w-full mx-auto  sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12 lg:mb-16"></div>

        <div className="  ">
          <div className="relative px-4 overflow-hidden  bg-[#faf8f4] shadow-xl">
            {/* Right Background Image */}
            <div className="h-max relative">
              <div
                className="hidden lg:block absolute top-0 right-0 w-full md:w-[48%] h-[full] xl:h-full"
                style={{
                  backgroundImage: "url('/images/cta-hero.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Fade image into content */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to right, #faf8f4 0%, rgba(250,248,244,.95) 18%, rgba(250,248,244,.65) 45%, transparent 75%)",
                  }}
                />
              </div>

              <div className="relative z-10 px-5 sm:px-8 lg:px-16 py-10 sm:py-14">
                {" "}
                {/* Heading */}
                <div className="lg:col-span-1 md:w-1/3 text-center md:text-left mb-6 lg:mb-0">
                  <p className="text-xs md:text-sm font-semibold tracking-widest text-[#4d8745] mb-3 md:mb-4">
                    ⚡ HEALTHY LIVING INSIGHTS
                  </p>
                  <h2 className="text-3xl md:text-4xl font-semibold font-serif text-[#1c3e1e] mb-3 md:mb-4">
                    Healthy Living Insights
                  </h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-[#d4a574] to-transparent mb-4 md:mb-6"></div>
                  <p className="text-sm md:text-base text-gray-700 mb-6 md:mb-8">
                    Explore practical wellness knowledge, family health
                    guidance, nutrition insights, and nature-inspired habits
                    designed for healthier everyday living.
                  </p>

                  {/* Search Bar */}
                  <div className="mb-6 md:mb-8">
                    <div className="flex gap-2">
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search articles, topics or keywords..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 md:py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8745] focus:border-transparent"
                        />
                      </div>
                      <button className="bg-[#1c3e1e] hover:bg-[#0f2813] text-white font-semibold px-4 md:px-6 py-2 md:py-3 rounded-lg transition-colors text-sm whitespace-nowrap">
                        Search
                      </button>
                    </div>
                  </div>

                  {/* Articles Count */}
                  <div className="flex items-center gap-2 text-sm md:text-base text-[#1c3e1e] font-semibold">
                    <span className="text-lg">📊</span>
                    <span>{ARTICLES.length} Articles and growing</span>
                  </div>
                </div>
                {/* Newsletter */}
                {/* Social */}
              </div>

              {/* Decorative Leaves */}
              <img
                src="/images/leaves-left.png"
                className="hidden lg:block absolute left-0 bottom-0 w-48 opacity-40 pointer-events-none"
                alt=""
              />

              <img
                src="/images/leaves-right.png"
                className="hidden lg:block absolute right-0 bottom-0 w-52 opacity-40 pointer-events-none"
                alt=""
              />
            </div>
            <div>
              {/* Browse by Topic - Desktop */}
              <div className="mb-8 md:mb-12 hidden md:block">
                <p className="text-center text-xs md:text-sm font-semibold tracking-widest text-[#4d8745] mb-4 md:mb-6">
                  🌿 BROWSE BY TOPIC
                </p>
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex flex-col items-center gap-1 px-4 md:px-5 py-3 md:py-4 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? "border"
                          : "bg- border border-0 text-[#1c3e1e] text-[#1c3e1e] hover:border-[#4d8745]"
                      }`}
                    >
                      <span className="text-xl md:text-2xl">{cat.icon}</span>
                      <span className="text-xs md:text-sm font-semibold">
                        {cat.name}
                      </span>
                      <span className="text-xs opacity-75">
                        {cat.count} Articles
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              {/* Browse by Topic - Mobile */}
              <div className="mb-8 md:hidden">
                <p className="text-center text-xs font-semibold tracking-widest text-[#4d8745] mb-4">
                  🌿 BROWSE BY TOPIC
                </p>
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                  {CATEGORIES.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all flex-shrink-0 ${
                        selectedCategory === cat.id
                          ? "  border"
                          : "bg- border border-0 text-[#1c3e1e]"
                      }`}
                    >
                      <span className="text-lg bg-[#d9e7d8] p-2 rounded-full">
                        {cat.icon}
                      </span>
                      <span className="text-xs font-semibold text-center">
                        {cat.name.split(" ")[0]}
                      </span>
                    </button>
                  ))}
                  <button className="flex items-center justify-center px-3 py-2 rounded-lg bg-white border border-gray-300 text-[#1c3e1e] flex-shrink-0">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
              {/* Article Library Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-4 mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl self ms-auto font-semibold text-[#1c3e1e]">
                  ARTICLE LIBRARY
                </h3>
                <div className="flex items-center gap-2 ms-auto">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-1 md:py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#4d8745]"
                  >
                    <option value="latest">Latest</option>
                    <option value="popular">Popular</option>
                    <option value="oldest">Oldest</option>
                  </select>
                </div>
              </div>
              {/* Articles Grid - Desktop */}
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 md:mb-12">
                {filteredArticles.map((article) => (
                  <div key={article.id} className="group cursor-pointer">
                    {/* Image */}
                    <div className="relative  rounded-lg mb-4 h-40 md:h-48">
                      <div className="overflow-hidden h-full rounded-lg">
                        <img
                          src={"/family_generation.png "}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="absolute -bottom-3 left-3 text-[#1c3e1e] bg-white text-xs font-semibold px-2 py-1 rounded">
                        {article.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex items-center gap-2 mb-2 text-xs text-gray-600">
                      <span>⏱ {article.readTime} min read</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>
                    <h4 className="font-serif text-base md:text-lg text-[#1c3e1e] mb-2 line-clamp-2 group-hover:text-[#2d5e2e] transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                      {article.description}
                    </p>
                    {/* <button className="inline-flex items-center gap-1 text-[#1c3e1e] font-medium text-sm hover:text-[#2d5e2e] transition-colors">
                      Read More
                      <ChevronRight className="w-4 h-4" />
                    </button> */}
                  </div>
                ))}
              </div>
              {/* Articles List - Mobile */}
              <div className="md:hidden space-y-4 mb-8">
                {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex items-center gap-3 bg-white rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                      <img
                        src="/family_generation.png"
                        alt={article.title}
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="inline-block px-2 py-1 mb-2 text-[10px] sm:text-xs font-semibold text-[#1c3e1e] bg-[#f0f0f0] rounded">
                        {article.category}
                      </div>

                      <h4 className="font-serif text-sm sm:text-base text-[#1c3e1e] line-clamp-2">
                        {article.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-1 mt-2 text-[11px] sm:text-xs text-gray-600">
                        <span>⏱ {article.readTime} min read</span>
                        <span>•</span>
                        <span>{article.date}</span>
                      </div>
                    </div>

                    {/* Chevron */}
                    <ChevronRight className="w-5 h-5 text-[#4d8745] flex-shrink-0" />
                  </div>
                ))}
              </div>
              {/* Load More Button */}
              <div className="flex justify-center">
                <button
                  onClick={() => setDisplayCount(displayCount + 4)}
                  className="inline-flex items-center gap-2 px-10 py-2 border-2 border-[#1c3e1e] text-[#1c3e1e] font-semibold rounded-full hover:bg-[#1c3e1e] hover:text-white transition-colors text-sm"
                >
                  Load More Articles
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
            </div>
          </div>
          <section className="relative overflow-hidden rounded-2xl bg-[#0F4A1D] px-4 py-4 md:px-6 md:py-5">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
              {/* Left */}
              <div className="flex flex-row items-center sm:items-start gap-4 flex-1">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#0F4A1D]">
                  <Users size={22} />
                </div>

                <div className="text-left sm:text-left">
                  <h2 className="font-serif text-xl md:text-3xl font-semibold leading-tight text-white">
                    Learn Today. Live Better Tomorrow.
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-5 text-white/80">
                    Healthy living begins with small daily choices. Join the
                    Greenbae community for wellness insights, family health
                    tips, and future innovations.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex text-nowrap flex-col lg:flex-row gap-3 w-full lg:w-auto">
                <button className="flex h-10 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[#0F4A1D] hover:bg-gray-100 transition">
                  Join The Healthy Living Movement
                  <ArrowRight size={16} />
                </button>

                <button className="flex h-10 items-center justify-center gap-2 rounded-lg border border-white/40 px-5 text-sm font-semibold text-white hover:bg-white/10 transition">
                  <Mail size={16} />
                  Subscribe To Updates
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </section>

          {/* Mobile Image */}
          <div className="lg:hidden mt-8">
            {/* <img
            src="/images/cta-hero.png"
            className="rounded-2xl w-full"
            alt=""
          /> */}
          </div>
        </div>
      </div>
    </section>
  );
}
