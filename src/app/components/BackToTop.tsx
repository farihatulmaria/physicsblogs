"use client"
import { useEffect, useState } from "react";

export default function BackTop(){
  const [srcolled,setScrolled]=useState(false);
  // the srcolling
  useEffect(()=>{
    const handleScroll=()=>{
      setScrolled(window.scrollY >50);
    };
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);

  return(
    <button
      onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
      className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-stone-900 text-white shadow-lg transition-all duration-300 hover:scale-110 bg-black ${
        srcolled ? 'opacity-100 translate-y-0' : 'opacity translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  );
}