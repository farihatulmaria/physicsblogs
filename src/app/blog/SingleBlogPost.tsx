"use client"
import { blogPosts } from "../lib/data";
import Link from "next/link";

export function SingleBlogPage(post: { id: number; category: string; title: string; excerpt: string; image: string; author: string; date: string; content: string }) {
  const postmatched = blogPosts.find((p) => p.id === post.id);
  if (!postmatched) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-stone-50">
        <h2 className="font-serif text-2xl text-stone-900">Post not found</h2>
        <Link
          href={'/blog'}
          className="rounded-full bg-stone-900 px-6 py-2 text-sm text-white"
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
      <main className="min-h-screen bg-stone-50 text-stone-900">
        {/* Split Hero Section */}
        <section className="grid min-h-[60vh] lg:h-[75vh] lg:grid-cols-2">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center bg-stone-50 px-6 py-12 sm:px-12 lg:px-20">
            <div className="max-w-xl">
              <span className="mb-4 block text-xs font-bold uppercase tracking-[0.2em] text-emerald-600">
                {post.category}
              </span>
              <h1
                className="mb-6 font-sans text-4xl font-bold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "'Archivo', sans-serif" }}
              >
                {post.title}
              </h1>
              {/* Optional excerpt in header if desired, or just keep it clean like reference */}
              <p className="text-lg leading-relaxed text-stone-600">
                {post.excerpt}
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative h-64 w-full bg-stone-200 lg:h-full">
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </section>

        {/* Content Section */}
        <section className="relative mx-auto max-w-3xl px-6 pt-[40px] pb-10 sm:px-8">
          {/* Scroll Indicator (Decoration) */}
          <div className="lg:opacity-0 absolute left-6 top-0 -translate-y-1/2 sm:left-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-400 shadow-sm">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* Article Header Info */}
          <div className="mb-10 mt-8 border-b border-stone-200 pb-8">
            <h2 className="mb-6 font-serif text-2xl font-medium leading-relaxed text-stone-900 sm:text-3xl">
              {post.excerpt}
            </h2>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium uppercase tracking-wide text-stone-500">
              <span className="text-stone-900">By: {post.author}</span>
              <span className="hidden h-3 w-[1px] bg-stone-300 sm:block" />
              <span className="text-stone-400">
                Last Updated: {post.date}
              </span>
              <span className="hidden h-3 w-[1px] bg-stone-300 sm:block" />
              <button className="text-emerald-600 hover:text-emerald-700 hover:underline">
                Comment &amp; Questions
              </button>
            </div>
          </div>

          {/* Article Body */}
          <article
            className="prose prose-stone prose-lg max-w-none text-stone-600 prose-headings:font-serif prose-headings:font-medium prose-headings:text-stone-900 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-stone-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </section>
      </main>
  );
}