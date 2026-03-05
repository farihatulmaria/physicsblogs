"use client"
import SideBarItems from "@/app/components/SideBarItems";
import { blogPosts } from "@/app/lib/data";
import { Pen, TrashIcon } from "lucide-react";
import { useState } from "react";
import Edit from "../edit/page";

export default function article(){
    const [edit,setEdit]=useState<{ id: number; category: string; title: string; excerpt: string; image: string; author: string; date: string; content: string; readTime:string; } | null>(null);
    const handlePostDelete=()=>{
        console.log('delete')
    }
    return(
        <div className="flex min-h-screen bg-stone-50 font-sans text-stone-900">
            <SideBarItems/>
            {edit ? (
                <Edit {...edit} />
            ) : (
            <main className="flex-1 p-4 lg:p-10 max-w-7xl mx-auto w-full">
                <div className="lg:col-span-2 bg-white rounded-2xl border border-stone-100 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-stone-50 flex justify-between items-center">
                <h2 className="text-lg font-bold">Recent Articles</h2>
                </div>
                <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-stone-50/50">
                            <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Title</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Status</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Date</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Edit</th>
                            <th className="text-left py-4 px-6 text-xs font-bold text-stone-400 uppercase tracking-wider">Delete</th>
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
                                <td className="py-4 px-6 text-stone-500">
                                    <button
                                      onClick={()=>setEdit(post)}
                                    >
                                        <Pen/>
                                    </button>
                                </td>
                                <td className="py-4 px-6 text-stone-500">
                                    <button className="text-red-500" onClick={handlePostDelete}><TrashIcon/></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
            </div>
            </main>
            )}
        </div>
    );
}



