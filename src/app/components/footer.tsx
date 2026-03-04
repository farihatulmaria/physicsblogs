export default function Footer(){
  return (
    <footer className="border-t border-stone-200/80 bg-whit/80 py-6 text-[11px] text-stone-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()} Aurora Physics Journal. Crafted with care for clam, curious minds.
        </p>
        <div className="flex gap-4">
          <button className="transition hover:text-emerald-700">Privacy</button>
          <button className="transition hover:text-emerald-700">Terms</button>
          <button className="transition hover:text-emerald-700">Cookies</button>
        </div>
      </div>
    </footer>
  );
}