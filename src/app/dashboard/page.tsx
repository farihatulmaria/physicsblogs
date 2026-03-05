"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import {  
  FileText, 
  Plus,
  TrendingUp,
  Eye,
  ChevronRight
} from 'lucide-react';
import { blogPosts } from '../lib/data';
import SideBarItems from '../components/SideBarItems';
import { useState } from 'react';


const StatCard = ({ icon: Icon, label, value, trend, color }: { icon: any, label: string, value: string, trend: string, color: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white p-6 rounded-2xl border border-stone-100 shadow-sm"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl ${color}`}>
        <Icon size={24} className="text-white" />
      </div>
      <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1">
        <TrendingUp size={16} />
        {trend}
      </span>
    </div>
    <h3 className="text-stone-400 text-sm font-medium uppercase tracking-wider">{label}</h3>
    <p className="text-3xl font-bold text-stone-900 mt-1">{value}</p>
  </motion.div>
);

export default function Dashboard(){
  const [logged,setlogged]=useState(false);
  
  return (
    <div className="flex min-h-screen bg-stone-50 font-sans text-stone-900">
      <SideBarItems/>
      {/* Main Content */}
      <main className="flex-1 p-4 lg:p-10 max-w-7xl mx-auto w-full">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-900">Welcome back, Editor</h1>
            <p className="text-stone-500 mt-1">Here's what's happening with your physics blog today.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href={'/dashboard/newpost'} className="flex items-center gap-2 bg-emerald-950 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-950/20">
              <Plus size={20} />
              <span>New Post</span>
            </Link>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <StatCard icon={Eye} label="Total Views" value="124.8k" trend="+12.5%" color="bg-emerald-600" />
          <StatCard icon={FileText} label="Articles" value={String(blogPosts.length)} trend="+2.4%" color="bg-amber-500" />
        </div>

          {/* Recent Articles */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-stone-50 flex justify-between items-center">
              <h2 className="text-lg font-bold">Recent Articles</h2>
              <Link href={'/dashboard/article'} className="text-emerald-700 text-sm font-bold flex items-center gap-1 hover:underline">
                View All <ChevronRight size={16} />
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-stone-50/50">
                    <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Title</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Status</th>
                    <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-50">
                  {blogPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-stone-50/30 transition-colors">
                      <td className="py-4 px-6 font-medium text-stone-800">{post.title}</td>
                      <td className="py-4 px-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          post.status === 'Published' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-stone-500">{post.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
      </main>
    </div>
  );
};