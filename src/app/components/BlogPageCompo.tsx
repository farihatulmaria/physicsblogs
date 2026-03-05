"use client"
import Link from "next/link";
import { blogPosts } from "../lib/data";

export default function BlogPageCompo(){
  const featuredBlog = blogPosts.slice(0, 3);
    return(
        <section id="blog" className="mt-20 scroll-mt-32">
          <header className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="space-y-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-500">
                Latest entries
              </p>
              <h2
                className="font-serif text-2xl leading-tight text-stone-900 sm:text-3xl"
                style={{ fontFamily: "'Playfair Display', ui-serif" }}
              >
                Essays, explainers, and quiet experiments.
              </h2>
              <p className="max-w-xl text-sm text-stone-600 sm:text-base">
                Curated pieces exploring the physics of light, time, and energy
                through a self-care lens. Pour a cup of something warm and let
                your curiosity unwind.
              </p>
            </div>
            <Link
              href={'/blog'}
              className="self-start rounded-full border border-stone-300/80 bg-white/60 px-5 py-2 text-xs font-medium uppercase tracking-[0.18em] text-stone-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              View all posts
            </Link>
          </header>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredBlog.map((post) => (
              <article
                key={post.title}
                className="group flex flex-col justify-between rounded-3xl border border-stone-200/80 bg-white/80 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(15,23,42,0.16)]"
              >
                <div className="space-y-3">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-500">
                    {post.category}
                  </p>
                  <h3 className="text-[15px] font-semibold leading-snug text-stone-900 group-hover:text-emerald-900">
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-stone-600">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between text-[11px] text-stone-500">
                  <span>{post.readTime}</span>
                  <Link href={'/blog'} className="inline-flex items-center gap-1 rounded-full bg-stone-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-50 transition group-hover:bg-stone-800">
                    Read
                    <span className="text-[11px] group-hover:translate-x-0.5">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
    );
}
