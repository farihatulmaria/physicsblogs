
"use client"
import { motion } from "framer-motion";
import { BarChart3, FileText, LayoutDashboard, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { sideBarItems } from "../lib/data";

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <motion.div 
    whileHover={{ x: 5 }}
    className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-colors ${
      active 
        ? 'bg-emerald-950 text-white shadow-lg' 
        : 'text-stone-500 hover:bg-stone-100'
    }`}
  >
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </motion.div>
);

export default function SideBarItems(){
    
const location = usePathname();
const isActive = (path: string) => location === path;
    return(
      <aside className="w-64 bg-white border-r border-stone-100 p-6 hidden lg:flex flex-col sticky top-0 h-screen">
        <Link href={'/'} className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-950 rounded-lg flex items-center justify-center">
            <span className="text-white font-serif font-bold italic">P</span>
          </div>
          <span className="text-xl text-emerald-900 font-serif font-bold tracking-tight">Physique</span>
        </Link>
        <nav className="space-y-2 flex-1">
          {
            sideBarItems.map((item)=>(
              <Link key={item.label} href={item.path}>
                <SidebarItem icon={item.icon} label={item.label} />
              </Link>
              
            ))
          }
        </nav>
      </aside>
    );
}
