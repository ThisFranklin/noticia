"use client"

import { useEffect, useState } from "react"
import { applyTheme, getThemeStorage, themeType } from "../../../lib/utils/theme"

function DarkMode() {
    const [theme, setTheme] = useState("light")

    useEffect(()=>{

        const storedTheme = getThemeStorage()
        setTheme(storedTheme)        
        applyTheme(storedTheme as themeType)
        

    }, [])
    
function toggleTheme(){
        console.log("Toggle");
        
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        applyTheme(newTheme)
    }

  return (
    <li className="settings-menu" key={"dark-mode"} onClick={toggleTheme}>
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </li>
    )
}

export default DarkMode