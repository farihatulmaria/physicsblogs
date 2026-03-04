"use client"
import BackTop from "./components/BackToTop";
import BlogPageCompo from "./components/BlogPageCompo";
import Footer from "./components/footer";
import Header from "./components/header";
import Link from "next/link";

export default function App() {
  return(
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-emerald-100/60 blur-3xl" />
        <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-lime-100/40 blur-3xl" />
        <div className="absolute inset-x-0 bottom-[-12rem] h-80 bg-gradient-to-t from-stone-200/60 to-transparent" />
      </div>

      {/* Header */}
     <Header/>
  <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
  </main>
  </div>
  );
}