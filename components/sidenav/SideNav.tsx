"use client"

import { LucideIcon, Lightbulb, Bell, Pencil, FileDown, Trash2 } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { roboto } from "../../lib/utils/style/fonts";
import { colorIcon } from "../../lib/utils/style/style";

type NavItem = {
  label: string;
  icon: LucideIcon;
  href: string;
}



const navItems: NavItem[] = [
  {label: "Notes", icon: Lightbulb, href:"/notes"},
  {label: "Reminders", icon: Bell, href:"/reminders"},
  {label: "Edit tags", icon: Pencil, href:"/tags"},
  {label: "Archive", icon: FileDown, href:"/archives"},
  {label: "Trash", icon: Trash2, href: "/trash"}
]

function SideNav() {
  const pathName = usePathname()
  
  return (
    <div className={`min-w-3xs pt-4 ${roboto.className}`}>
      <nav className="flex flex-col gap-2">
        
        { navItems.map(({label, icon: Icon, href }) => (
          
          <Link className= {`flex gap-6 py-4 pl-6 rounded-r-full ${pathName === href ? "bg-yellow-200/60 font-medium":"hover:bg-slate-200/50"} `} key={label} href={href}>
            <Icon color={colorIcon}/>
            <span>{label}</span>
          </Link>

        ))}
      </nav>
    </div>
  )
}

export default SideNav