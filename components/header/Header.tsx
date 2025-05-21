import SearchBar from "./components/SearchBar"
import MenuIcon from "./components/MenuIcon"
import RefreshIcon from "./components/RefreshIcon"
import ListModeIcon from "./components/ListModeIcon"
import SettingsIcon from "./components/SettingsIcon"
import GripIcon from "./components/GripIcon"
import CircleUserRoundIcon from "./components/CircleUserRoundIcon"

function Header() {

  return (
    <div className="flex gap-4 p-2 dark:bg-slate-900 bg-slate-50 border-b border-zinc-300">
        <div className="flex gap-4 items-center pr-20">
            <MenuIcon />
            <div className="text-2xl font-semibold text-zinc-500">
                Noticia
            </div>
        </div>
        
        <div className="flex grow items-center pl-4 ">
            <SearchBar />
            <div className="flex gap-4">
                <RefreshIcon />
                <ListModeIcon />
                <SettingsIcon />
            </div>
        </div>

        <div className="flex items-center pl-8 gap-4 ">
            <GripIcon />
            <CircleUserRoundIcon />
        </div>
    </div>
  )
}

export default Header