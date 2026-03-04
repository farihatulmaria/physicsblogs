"use client"
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, Tag, Calendar, Search } from 'lucide-react';
import { blogPosts,categories } from '../lib/data';
import Header from '../components/header';
import Footer from '../components/footer';
import { SingleBlogPage } from './SingleBlogPost';

type BlogPosts = typeof blogPosts[0];

export default function Blogs(){
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBlog, setSelectedBlog] = useState<BlogPosts | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || activeCategory !== 'All');
  
  const handleSelectBlogs = (blog: BlogPosts) => {
    setSelectedBlog(blog);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleBackToBlogs = () => {
    setSelectedBlog(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <div className="min-h-screen bg-stone-50">
      <Header/>
      {/* Hero Section */}
      {selectedBlog ? (
        SingleBlogPage(selectedBlog)
      ):(
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-7xl mx-auto">
            {/* Hero section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <span className="text-xs font-bold tracking-[0.3em] text-stone-400 uppercase">
                Our Journal
              </span>
              <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-sans font-black text-stone-900 uppercase tracking-tight leading-[0.9]">
                Explore The<br />
                <span className="text-emerald-500/90">Universe</span>
              </h1>
              <p className="mt-6 text-lg text-stone-500 max-w-2xl mx-auto font-light">
                Deep dives into the mysteries of physics, from quantum realms to cosmic scales.
              </p>
            </motion.div>

            {/* Search and Filter Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12"
            >
              {/* Search */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white border border-stone-200 rounded-none text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-900 transition-colors"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-emerald-950 text-white'
                        : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Featured Article - Only show when All is selected and no search */}
            {activeCategory === 'All' && !searchQuery && featuredPost && (
              <motion.article
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-20 group cursor-pointer"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] lg:aspect-[16/10]">
                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-4 py-2 bg-amber-400 text-emerald-950 text-xs font-bold tracking-widest uppercase">
                        Featured
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-widest">
                      <span className="text-emerald-700 font-medium">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-stone-600 text-lg leading-relaxed font-light">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-emerald-900 flex items-center justify-center text-white text-sm font-medium">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-stone-900">{featuredPost.author}</p>
                          <p className="text-xs text-stone-500 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {featuredPost.readTime}
                          </p>
                        </div>
                      </div>

                      <span className="flex items-center gap-2 text-sm font-medium text-emerald-900 group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Article Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group cursor-pointer bg-white"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-[4/3] mb-6">
                    <div className="absolute inset-0 bg-emerald-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20">
                      <span className="px-3 py-1.5 bg-white/90 backdrop-blur-sm text-emerald-900 text-xs font-medium tracking-wider uppercase">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-stone-400 uppercase tracking-wider">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-stone-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-stone-100">
                      <span className="text-xs font-medium text-stone-900">{post.author}</span>
                        <span onClick={() => handleSelectBlogs(post)} className="flex items-center gap-1 text-xs font-medium text-emerald-700 group-hover:gap-2 transition-all">
                          Read
                          <ArrowRight className="w-3 h-3" />
                        </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Empty State */}
            {regularPosts.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <p className="text-stone-500 text-lg">No articles found matching your criteria.</p>
                <button
                  onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
                  className="mt-4 text-emerald-700 font-medium hover:text-emerald-900 transition-colors"
                >
                  Clear filters
                </button>
              </motion.div>
            )}

            {/* Load More Button */}
          {/* {regularPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-16"
              >
                <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-emerald-950 text-emerald-950 font-medium tracking-widest uppercase text-sm hover:bg-emerald-950 hover:text-white transition-all duration-300">
                  Load More Articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            )}
          */}
          </div>
        </section>
      )}
      <Footer/>
    </div>
  );
};

