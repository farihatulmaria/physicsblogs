"use client"
import Header from "../components/header";
import Footer from "../components/footer";
import BlogPageCompo from "../components/BlogPageCompo";
import BackTop from "../components/BackToTop";

export default function About(){
    
    return(
        <div  className="min-h-screen bg-gradient-to-b from-stone-50 via-white to-stone-100 text-stone-900">
            <Header/>
             <main className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8 lg:pt-16">
                {/* About */}
                <section className="relative">
                {/* Gray Background for Bottom Half */}
                    <div className="absolute bottom-0 left-0 right-0 top-[30%] -z-10 rounded-3xl bg-stone-100/80" />

                    <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-0">
                        {/* Left Content Column */}
                        <div className="flex flex-col">
                        {/* Top Area (White background visually) */}
                        <div className="px-4 pb-16 pt-8 sm:px-8 lg:pr-12">
                            <h2
                            className="text-5xl font-black uppercase leading-[0.85] tracking-tighter text-stone-900 sm:text-6xl lg:text-8xl"
                            style={{ fontFamily: "'Archivo', sans-serif" }}
                            >
                            We Really
                            <br />
                            Love To
                            <br />
                            Talk
                            <br />
                            Physics
                            </h2>
                            <div className="mt-6 sm:mt-8 ml-2">
                                <span
                                    className="inline-block -rotate-3 text-4xl text-emerald-700 sm:text-5xl"
                                    style={{ fontFamily: "'Caveat', cursive" }}
                                >
                                    Aurora Team
                                </span>
                            </div>
                        </div>

                        {/* Bottom Area (Gray background visually) */}
                        <div className="grid gap-10 px-6 pb-12 sm:grid-cols-2 sm:px-10 lg:grid-cols-[auto_1fr] lg:gap-8 lg:pl-8 lg:pr-12">
                            {/* Social Links */}
                            <div className="space-y-6 lg:w-32">
                            <h3 className="border-b border-stone-300 pb-2 text-xs font-bold uppercase tracking-widest text-stone-900">
                                Follow Us
                            </h3>
                            <div className="flex flex-col gap-3 text-sm font-medium text-stone-600">
                                <a
                                href="#"
                                className="group flex items-center justify-between hover:text-emerald-700"
                                >
                                Instagram
                                <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    ↗
                                </span>
                                </a>
                                <a
                                href="#"
                                className="group flex items-center justify-between hover:text-emerald-700"
                                >
                                YouTube
                                <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    ↗
                                </span>
                                </a>
                                <a
                                href="#"
                                className="group flex items-center justify-between hover:text-emerald-700"
                                >
                                Twitter
                                <span className="text-xs transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                                    ↗
                                </span>
                                </a>
                            </div>
                            </div>

                            {/* Text & Testimonial */}
                            <div className="space-y-8">
                            <div className="prose prose-stone text-sm leading-relaxed text-stone-600">
                                <p>
                                <span className="float-left mr-3 mt-[-6px] font-serif text-5xl text-stone-900">
                                    W
                                </span>
                                e believe physics isn&apos;t just about equations on a blackboard;
                                it&apos;s the underlying rhythm of our daily lives. From the way
                                light scatters in your morning coffee to the gravity that
                                grounds your favorite chair, there&apos;s a quiet beauty in
                                understanding how the world works.
                                </p>
                            </div>

                            {/* Testimonial */}
                            <div className="border-l-2 border-stone-300 pl-5">
                                <blockquote className="text-sm italic text-stone-700">
                                "Finally, a physics blog that feels like a lifestyle
                                magazine. I come for the science, but I stay for the calm."
                                </blockquote>
                                <div className="mt-3 flex items-center gap-3">
                                <div className="h-8 w-8 overflow-hidden rounded-full bg-stone-300">
                                    <img
                                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=64&q=80"
                                    alt="Avatar"
                                    className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-stone-900">
                                    Cynthia Summer
                                    </p>
                                    <p className="text-[10px] uppercase tracking-wider text-stone-500">
                                    Reader
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative h-full min-h-[400px] lg:min-h-0 lg:pt-10">
                        <div className="sticky top-24 h-full w-full overflow-hidden rounded-3xl shadow-xl lg:rounded-none lg:rounded-tl-[4rem] lg:rounded-br-[4rem]">
                            <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Portrait of a physicist"
                            className="h-full w-full object-cover object-center grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
                            />
                        </div>
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

