
'use client'
import { navItems } from "../lib/data";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from "react";

export default function Header(){
  const [menuOpen, setMenuOpen] = useState(false);
  const location = usePathname();

  const isActive = (path: string) => location === path;
    return(
         <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <button
              className="mr-1 flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-800 shadow-sm shadow-emerald-100/60 ring-1 ring-emerald-100/80 hover:border-emerald-200 hover:text-emerald-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 sm:hidden"
              aria-label="Toggle navigation menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="block h-[2px] w-4 rounded bg-stone-900" />
              <span className="ml-1 block h-[2px] w-3 rounded bg-stone-900" />
            </button>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-800 text-white shadow-[0_12px_30px_rgba(16,185,129,0.35)]">
                <span className="text-xl font-semibold tracking-tight">Φ</span>
              </div>
              <div className="leading-tight">
                <div className="font-semibold tracking-[0.18em] text-[10px] uppercase text-stone-500">
                  Aurora Physics
                </div>
                <div className="font-serif text-lg font-medium tracking-tight text-stone-900">
                  Field Notes
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-stone-600 sm:flex">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`relative transition-colors hover:text-emerald-800 ${
                  isActive(item.link) ? "text-emerald-900" : ""
                }`}
              >
                <span>{item.label}</span>
                {isActive(item.link) && (
                  <span className="absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600" />
                )}
              </Link>
            ))}
          </nav>

          <div className="ml-4 hidden items-center gap-3 sm:flex">
            <div className="relative">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-stone-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M5 11a6 6 0 1112 0 6 6 0 01-12 0z"
                  />
                </svg>
              </span>
              <input
                type="search"
                placeholder="Search articles"
                className="h-9 w-44 rounded-full border border-stone-200 bg-white/80 pl-9 pr-3 text-xs text-stone-700 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100 lg:w-52"
              />
            </div>
            <Link
              href={'/support'}
              className="rounded-full border border-emerald-200 bg-emerald-500/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-50 shadow-sm shadow-emerald-200 transition hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            >
              Subscribe
            </Link>
          </div>
        </div>
                {/* Mobile nav */}
        {menuOpen && (
          <div className="border-t border-stone-200/70 bg-white/95 px-4 pb-4 pt-2 shadow-sm sm:hidden">
            <nav className="flex flex-col gap-1 text-sm font-medium text-stone-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className={`flex items-center justify-between rounded-full px-3 py-2 text-left transition hover:bg-stone-50 ${
                    isActive(item.link) ? "bg-emerald-50 text-emerald-900" : ""
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive(item.link) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
    );
}