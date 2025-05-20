import { Brush, Lightbulb, SquareCheckBig, Image as Image2 } from "lucide-react"
import { colorIcon, colorLightBulbIcon } from "../../lib/utils/style/style"
import { roboto } from "../../lib/utils/style/fonts"

function page() {
  return (
    <div className="grow pt-8">
      <div className="flex items-center max-w-2xl bg-white p-2 border border-slate-200 my-0 mx-auto rounded-md shadow-lg mb-80">
        <input className="text-md p-4 outline-none mr-auto grow" type="text" name="searchNote" placeholder="Create a note..." id="" />
        <div className="icon-style mr-4">
          <SquareCheckBig color={colorIcon} className="inline-block" />
        </div>
        <div className="icon-style mr-4">
          <Brush color={colorIcon} className="inline-block"/>
        </div>
        <div className="icon-style mr-4">
          <Image2 color={colorIcon} className="inline-block"/>
        </div>
      </div>
      <Lightbulb color={colorLightBulbIcon} size={100} className="my-0 mx-auto"/>
      <p className={`text-4xl mt-10 text-zinc-400 text-center ${roboto.className}`}>Notes you add appear here</p>
    </div>
  )
}

export default page