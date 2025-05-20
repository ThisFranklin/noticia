import { Trash2 } from "lucide-react"
import { roboto } from "../../lib/utils/style/fonts"
import { colorLightBulbIcon } from "../../lib/utils/style/style"

function page() {
  return (
    <div className="grow pt-8">
      <p className="max-w-2xl text-center italic text-2xl text-zinc-600 p-2 my-0 mx-auto mb-80">
        Notes placed in the trash are deleted after seven days.
      </p>
      <Trash2 color={colorLightBulbIcon} size={100} className="my-0 mx-auto"/>
      <p className={`text-4xl mt-10 text-zinc-400 text-center ${roboto.className}`}>No Notes in Trash</p>
    </div>
  )
}

export default page