"use client"
import BackTop from "./components/BackToTop";
import BlogPageCompo from "./components/BlogPageCompo";
import Footer from "./components/footer";
import Header from "./components/header";
import Link from "next/link";

export default function App() {
  return (
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
        {/* Hero / Home */}
        <section className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div className="space-y-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-500">
              Modern Physics, Softly Told
            </p>
            <div className="space-y-4">
              <h1
                className="font-serif text-3xl leading-tight text-stone-900 sm:text-4xl lg:text-5xl"
                style={{ fontFamily: "'Playfair Display', ui-serif" }}
              >
                Chic field notes on the
                <span className="relative inline-block px-2">
                  <span className="absolute inset-x-0 bottom-1 h-2 rounded-full bg-emerald-100" />
                  <span className="relative">calm side of physics.</span>
                </span>
              </h1>
              <p
                className="max-w-xl text-sm leading-relaxed text-stone-600 sm:text-base"
                style={{ fontFamily: "'DM Sans', system-ui, -apple-system, sansSerif" }}
              >
                Aurora Physics is a modern journal for people who care about soft
                spaces and sharp ideas. We pair elegant visuals with mindful
                explanations of the universe&mdash;from quantum quiet to the
                geometry of your morning coffee.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href={'/blog'}
                className="group inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-50 shadow-[0_16px_40px_rgba(15,23,42,0.26)] transition hover:-translate-y-0.5 hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Start reading
                <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
              <Link
                href={'/blog'}
                className="inline-flex items-center justify-center rounded-full border border-stone-300/80 bg-white/60 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-stone-700 shadow-sm transition hover:border-emerald-300 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              >
                Our Story
              </Link>
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-3 text-[11px] text-stone-600 sm:gap-6 sm:text-xs">
              <div>
                <dt className="uppercase tracking-[0.24em] text-[10px] text-stone-500">
                  Issues
                </dt>
                <dd className="mt-1 text-lg font-semibold text-stone-900 sm:text-xl">
                  62
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.24em] text-[10px] text-stone-500">
                  Readers
                </dt>
                <dd className="mt-1 text-lg font-semibold text-stone-900 sm:text-xl">
                  4B+
                </dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.24em] text-[10px] text-stone-500">
                  Calm rate
                </dt>
                <dd className="mt-1 text-lg font-semibold text-stone-900 sm:text-xl">
                  99%
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative mt-2 flex justify-center lg:mt-0">
            <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-emerald-50 shadow-[0_22px_60px_rgba(15,23,42,0.18)]">
              <div className="border-b border-stone-100/90 bg-stone-50/80 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                    Live Notebook
                  </span>
                  <span className="h-6 w-14 rounded-full bg-stone-100/90" />
                </div>
              </div>

              <div className="space-y-6 px-5 pb-5 pt-6">
                <div className="space-y-1">
                  <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-emerald-500">
                    Thought of the day
                  </p>
                  <p className="text-sm font-medium text-stone-900">
                    "Physics is less about answers, more about a softer way of
                    noticing the world." 
                  </p>
                </div>

                <div className="rounded-2xl border border-stone-200/80 bg-white/60 p-4">
                  <div className="flex items-center justify-between text-[11px] text-stone-500">
                    <span>Energy moodboard</span>
                    <span>t → ∞</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        Potential
                      </span>
                      <p className="font-medium text-sm text-stone-900">Quiet growth</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        Field
                      </span>
                      <p className="font-medium text-sm text-stone-900">Soft focus</p>
                    </div>
                    <div className="space-y-2">
                      <span className="text-[10px] uppercase tracking-[0.22em] text-stone-500">
                        State
                      </span>
                      <p className="font-medium text-sm text-stone-900">Unbothered</p>
                    </div>
                  </div>
                  <div className="mt-4 h-[3px] w-full rounded-full bg-stone-100">
                    <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-stone-500">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-[12px] text-emerald-700">
                      ħ
                    </span>
                    <span>New: A guide to quantum breathing spaces</span>
                  </div>
                  <button className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-emerald-700 hover:bg-emerald-100">
                    Read
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="mt-20 scroll-mt-32 rounded-3xl border border-stone-200/80 bg-white/80 px-5 py-10 shadow-[0_20px_55px_rgba(15,23,42,0.12)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-stone-500">
                About the journal
              </p>
              <h2
                className="font-serif text-2xl leading-tight text-stone-900 sm:text-3xl"
                style={{ fontFamily: "'Playfair Display', ui-serif" }}
              >
                Designed for people who like their equations minimal and their
                spaces mindful.
              </h2>
              <div className="space-y-3 text-sm leading-relaxed text-stone-600 sm:text-base">
                <p>
                  Aurora Physics was created for readers who care as much about
                  atmosphere as they do about accuracy. We write in plain
                  language, favor soft neutrals over harsh diagrams, and let the
                  math appear only when it truly clarifies the story.
                </p>
                <p>
                  You&apos;ll find pieces on quantum mechanics, cosmology, and the
                  physics of everyday rituals&mdash;each grounded in rigorous
                  science, filtered through a calm, design-forward lens.
                </p>
              </div>

              <dl className="mt-4 grid gap-5 text-sm text-stone-700 sm:grid-cols-3">
                <div className="space-y-1">
                  <dt className="text-[11px] uppercase tracking-[0.26em] text-stone-500">
                    Tone
                  </dt>
                  <dd>Chic, precise, gently curious.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-[11px] uppercase tracking-[0.26em] text-stone-500">
                    Format
                  </dt>
                  <dd>Weekly essays, visual explainers, &amp; audio notes.</dd>
                </div>
                <div className="space-y-1">
                  <dt className="text-[11px] uppercase tracking-[0.26em] text-stone-500">
                    Promise
                  </dt>
                  <dd>No chaos, no clickbait, just luminous ideas.</dd>
                </div>
              </dl>
            </div>

            <div className="space-y-4 rounded-3xl border border-emerald-100 bg-gradient-to-b from-emerald-50/80 via-white to-emerald-50/60 p-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.26em] text-emerald-600">
                Our physics values
              </h3>
              <ul className="space-y-4 text-sm text-stone-700">
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-500/10 text-center text-[11px] font-semibold text-emerald-700">
                    01
                  </span>
                  <div>
                    <p className="font-medium text-stone-900">Clarity over noise.</p>
                    <p className="mt-1 text-xs text-stone-600">
                      Each article is crafted to feel like a deep breath, not an
                      exam.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-500/10 text-center text-[11px] font-semibold text-emerald-700">
                    02
                  </span>
                  <div>
                    <p className="font-medium text-stone-900">Beauty with rigor.</p>
                    <p className="mt-1 text-xs text-stone-600">
                      Soft palettes and clean typography holding deeply accurate
                      science.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 h-5 w-5 flex-shrink-0 rounded-full bg-emerald-500/10 text-center text-[11px] font-semibold text-emerald-700">
                    03
                  </span>
                  <div>
                    <p className="font-medium text-stone-900">Halal &amp; holistic.</p>
                    <p className="mt-1 text-xs text-stone-600">
                      Respectful, mindful, and nourishing for the body, mind,
                      and soul.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Blog */}
        <BlogPageCompo/>

      </main>
      
      <Footer/>
      <BackTop/>
    </div>
  );
}
