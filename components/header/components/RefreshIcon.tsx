"use client"

import { RotateCw } from "lucide-react"
import { useState } from "react"

function RefreshIcon() {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative">
        <div className="icon-style" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <RotateCw />
        </div>

        <p className={`absolute -bottom-6 -left-2 rounded-full text-nowrap px-2 text-white text-sm font-bold bg-neutral-500/80 ${isHovered ? "block":"hidden"}`}>
        Refresh
        </p>
    </div>

  )
}

export default RefreshIcon