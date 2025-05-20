"use client"
import { Settings } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const settingsMenuItems = [
  "Settings",
  "Set dark mode",
  "Your Opinion",
  "Help",
  "Downloads",
  "Shortcuts"
]

function SettingsIcon() {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
    const refSettingsIcon = useRef<HTMLDivElement>(null)

    function handleClick(){
      setIsClicked(!isClicked)
    }
    
    useEffect(()=>{
      function handleClickOutside(e:MouseEvent){

        if (refSettingsIcon.current && !refSettingsIcon.current.contains(e.target as Node)) {
          setIsClicked(false)
        }
      }
      document.addEventListener("click", handleClickOutside)

      return () => {
        document.removeEventListener("click", handleClickOutside)
      };

    },[isClicked])

  return (
    <div className="relative" onClick={handleClick}>
        <div className="icon-style" onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <Settings />
        </div>

        <p className={`absolute -bottom-6 -left-2 text-nowrap rounded-full px-2 text-white text-sm font-bold bg-neutral-500/80 ${(isHovered && !isClicked) ? "block":"hidden"}`}>
            Settings
        </p>

        <div ref={refSettingsIcon} className={`absolute -left-[70%] border bg-white border-slate-300 rounded-lg shadow-md ${isClicked ? "block": "hidden"}`}>
          <ul className="pt-2">
              {
                settingsMenuItems.map(menuItem => (
                  <li className="pl-4 pr-8 cursor-pointer py-1 mb-1 hover:bg-neutral-300/60 text-lg font-medium text-gray-600 text-nowrap hover:text-gray-900" key={menuItem}>{menuItem}</li>
                ))
              }
          </ul>
        </div>
    </div>
  )
}

export default SettingsIcon