'use client'

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header(){
  const [menuOpen,setMenuOpen] = useState(false);
  const location = usePathname();
  const isActive =(path:string) => location === path;
  return(
    <header className="sticky top-0 z-30 border-b border-stone-200/70 bg-white/80 backdrop-blur-xl">
      <div>

      </div>
    </header>
  );
}