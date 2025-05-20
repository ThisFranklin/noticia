"use client"

import { useState } from "react"
import { Menu } from "lucide-react"

function MenuIcon() {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative">
        <div className="icon-style" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
          <Menu />
        </div>
        <p className={`absolute -bottom-6 text-nowrap rounded-full px-2 text-white text-sm font-bold bg-neutral-500/80 ${isHovered ? "block":"hidden"}`}>
        Menu
        </p>
    </div>
  )
}

export default MenuIcon