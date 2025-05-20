"use client"

import { Grip } from "lucide-react"
import { useState } from "react"

function GripIcon() {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <div className="relative">
        <div className="icon-style" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <Grip />
        </div>

        <p className={`absolute -bottom-6 -left-6 text-nowrap rounded-full px-2 text-white text-sm font-bold bg-neutral-500/80 ${isHovered ? "block":"hidden"}`}>
            Google apps
        </p>
    </div>

  )
}

export default GripIcon