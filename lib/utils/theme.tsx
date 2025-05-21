export type themeType = "dark" | "light";

export function applyTheme(theme:themeType){
    const root = document.documentElement
    if (theme === "dark") {
        root.classList.add("dark")
    }else{
        root.classList.remove("dark")
    }

    localStorage.setItem("theme", theme)
}

export function getThemeStorage(){
    if(typeof window === "undefined") return "light"
    const theme = (localStorage.getItem("theme") ?? "light")
    return theme
}

