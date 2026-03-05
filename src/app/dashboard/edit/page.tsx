"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Image as ImageIcon,
  Send,
  Save,
  ChevronLeft,
  Trash
} from 'lucide-react';
import Link from 'next/link';
import { blogPosts, categories } from '@/app/lib/data';

export default function Edit(post: { id: number; category: string; title: string; excerpt: string; image: string; author: string; date: string; content: string ,readTime:string}) {
    
  const [formData, setFormData] = useState({
    id: 0,
    title: '',
    category: '',
    excerpt: '',
    image: '',
    author: '',
    date: '',
    readTime: '',
    content:'',
    featured: false,
    status: '',
  });
  const handleSave = (e: React.FormEvent) => {
    blogPosts.forEach(obj => {
      if (obj.id === post.id) {
        obj.title = formData.title;
        obj.category = formData.category;
        obj.excerpt = formData.excerpt;
        obj.image = formData.image;
        obj.author = formData.author;
        obj.date = formData.date;
        obj.readTime = formData.readTime;
        obj.content = formData.content;
      }
      console.log(blogPosts)
    });
    setFormData({...formData, status: 'Published'});
    e.preventDefault();
    // Simulate save
    blogPosts.push(formData);
  };
  return (
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-stone-200 px-8 py-4 sticky top-0 z-10">
          <div className="flex justify-between items-center max-w-5xl mx-auto">
            <div className="flex items-center space-x-4">
              <Link 
                href={'dashboard'}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors"
              >
                <ChevronLeft size={20} className="text-stone-600" />
              </Link>
              <h1 className="font-bold  text-emerald-950">Edit Article</h1>
            </div>
            <div className="flex items-center space-x-3">
              <Link 
                href={'/'}
                className="px-4 py-2 text-stone-600 hover:text-emerald-950 font-medium transition-colors"
              >
                <Trash size={20} />
              </Link>
              <button 
                onClick={handleSave}
                className="flex items-center space-x-2 px-6 py-2 bg-emerald-950 text-white rounded-lg hover:bg-emerald-900 transition-colors shadow-sm"
              >
                <Send size={18} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Editor Area */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm space-y-6">
                {/* title */}
                <div className='mb-4'>
                  <label className="block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">Title</label>
                  <input
                    type="text"
                    placeholder="Enter article title..."
                    className="w-full text-xl p-2 font-bold border border-stone-200 focus:ring-0 placeholder:text-stone-300 text-emerald-950"
                    value={post.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    required
                  />
                </div>
                {/* expect */}
                <div className='mb-4'>
                  <label className="block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">Excerpt</label>
                  <textarea
                    rows={3}
                    placeholder="Brief summary of the article..."
                    className="w-full border border-stone-200 p-2 focus:ring-0 placeholder:text-stone-300 p-0 resize-none text-stone-600"
                    value={post.excerpt}
                    onChange={(e) => setFormData({...formData, excerpt: e.target.value})}
                    required
                  />
                </div>
                {/* Date */}
                <div className='mb-4'>
                  <label className="block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="date"
                    className="w-full text-sm p-2 border border-stone-200 focus:ring-0 placeholder:text-stone-300 p-0 text-emerald-950"
                    value={post.date}
                    onChange={(e) => setFormData({...formData, date: String(e.target.value)})}
                    required
                  />
                </div>
                {/* read time */}
                <div className='mb-4'>
                  <label className="block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-2">Read Time</label>
                  <input
                    type="text"
                    placeholder="Enter read time..."
                    className="w-full text-sm p-2 border border-stone-200 focus:ring-0 placeholder:text-stone-300 p-0 text-emerald-950"
                    value={post.readTime}
                    onChange={(e) => setFormData({...formData, readTime: e.target.value})}
                    required
                  />
                </div>
                {/* content */}
                <div className="border-t border-stone-100 pt-3">
                  <label className="block text-sm font-semibold text-stone-500 uppercase tracking-wider mb-4">Content</label>
                  <div className="min-h-[400px]">
                    <textarea
                      placeholder="Begin your scientific exploration(in html)..."
                      className="w-full h-full min-h-[400px] border border-stone-200 p-2 focus:ring-0 placeholder:text-stone-300 p-0 resize-none text-stone-800 leading-relaxed"
                      value={post.content}
                      onChange={(e) => setFormData({...formData, content: e.target.value})}
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Settings */}
            <div className="space-y-6">
              {/* Author */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-widest mb-4">Author</h3>
                <input
                    type="text"
                    placeholder="Enter author's name..."
                    className="w-full text-sm p-2 border border-stone-200 focus:ring-0 placeholder:text-stone-300 p-0 text-emerald-950"
                    value={post.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    required
                  />
              </div>
              {/* Featured Image */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-widest mb-4">Featured Image</h3>
                <input
                    type="text"
                    placeholder="Enter image link..."
                    className="w-full text-sm p-2 border border-stone-200 focus:ring-0 placeholder:text-stone-300 p-0 text-emerald-950"
                    value={post.image}
                    onChange={(e) => setFormData({...formData, image: String(e.target.value)})}
                    required
                  />
              </div>
              {/* Category Selection */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                <h3 className="text-sm font-bold text-emerald-950 uppercase tracking-widest mb-4">Category</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setFormData({...formData, category: String(cat)})}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        post.category === cat 
                          ? 'bg-emerald-50 text-emerald-900 font-medium border border-emerald-100' 
                          : 'text-stone-600 hover:bg-stone-50 border border-transparent'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
  );
}
