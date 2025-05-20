"use client"

import { LayoutGrid, Rows2 } from "lucide-react"
import React, { useRef, useState } from "react"

function ListModeIcon() {
    const [isHoveredListMode, setIsHoveredListMode] = useState(false)
    const [isHoveredGridMode, setIsHoveredGridMode] = useState(false)
    const rowRef = useRef<HTMLDivElement>(null)
    const layOutGridRef = useRef<HTMLDivElement>(null)

    function handleClick(e:React.MouseEvent){
      setIsHoveredListMode(false)
      setIsHoveredGridMode(false)

      if (rowRef.current?.contains(e.target as Node) || layOutGridRef.current?.contains(e.target as Node)) {
        rowRef.current?.classList.toggle("invisible")
        layOutGridRef.current?.classList.toggle("invisible")
      }

    }

  return (
    <div className="relative" onClick={handleClick}>
        <div ref={rowRef} className={`icon-style`} onMouseEnter={()=>setIsHoveredListMode(true)} onMouseLeave={()=>setIsHoveredListMode(false)}>
            <Rows2 />
        </div>

        <div ref={layOutGridRef} className={`absolute top-0 icon-style invisible`} onMouseEnter={()=>setIsHoveredGridMode(true)} onMouseLeave={()=>setIsHoveredGridMode(false)}>
            <LayoutGrid />
        </div>

        <p className={`absolute -bottom-6 -left-2 text-nowrap rounded-full px-2 text-white text-sm font-bold bg-neutral-500/80 ${(isHoveredListMode || isHoveredGridMode) ? "block":"hidden"}`}>
            {isHoveredListMode && "List Mode"}
            {isHoveredGridMode && "Grid Mode"}
        </p>

    </div>

  )
}

export default ListModeIcon