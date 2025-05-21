import React, { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext<{theme:string, toggleTheme: ()=>void}>(null!)

function DarkModeProvider({children}:{children:React.ReactNode}) {
  const [theme, setTheme] = useState("light")

  function toggleTheme(){
    setTheme(prevTheme => (prevTheme === "light" ? "dark": "light"))
  }

  useEffect(()=>{
    const root = window.document.documentElement

    if(theme === "light"){
      root.classList.add("dark")
    }else{
      root.classList.remove("dark")
    }

  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default DarkModeProvider