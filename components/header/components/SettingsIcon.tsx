"use client"
import { Settings } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import DarkMode from "./DarkMode"

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

        <div ref={refSettingsIcon} className={`absolute -left-[70%] border bg-white dark:border-slate-900 border-slate-300 rounded-lg shadow-md ${isClicked ? "block": "hidden"}`}>
          <ul className="pt-2">
            <li className="settings-menu" key={"settings"}>Settings</li>
            <DarkMode key={"dark-mode-toggle"} />
            <li className="settings-menu" key={"your-opinion"}>Your opinion</li>
            <li className="settings-menu" key={"help"}>Help</li>
            <li className="settings-menu" key={"downloads"}>Downloads</li>
            <li className="settings-menu" key={"shortcuts"}>Shortcuts</li>
          </ul>
        </div>
    </div>
  )
}

export default SettingsIcon