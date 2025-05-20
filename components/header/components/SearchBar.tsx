"use client"

import { Search } from "lucide-react"
import { useRef } from "react"

function SearchBar() {
    const formControlRef = useRef<HTMLDivElement>(null)

    function handleFocus(){
        
        console.log(formControlRef.current);
        formControlRef.current?.classList.toggle("bg-white")
        formControlRef.current?.classList.toggle("bg-zinc-200/30")
        formControlRef.current?.classList.toggle("shadow-lg")
    }

  return (
    <div ref={formControlRef} className="flex mr-auto p-1 border border-zinc-400 bg-zinc-200/30 rounded-md">
        <div className="icon-style">
            <Search size={16} color="#94a3b8"/>
        </div>
        <input className="outline-0 text-md pl-4 lg:min-w-3xl" onBlur={handleFocus} onFocus={handleFocus} type="text" name="" placeholder="Search" id="" />
    </div>
  )
}

export default SearchBar