import { BsFillLightningFill, BsGearFill, BsPlus } from "react-icons/bs"
import { FaFire, FaPoo } from "react-icons/fa"

const SideBar = () => {
 return (
  <div className="flex  w-16 flex-col bg-gray-900 px-2 shadow-lg">
   <SideBarIcon
    hover="text-orange-600 hover:bg-red-500 hover:text-white"
    icon={<FaFire size="28" />}
   />
   <Divider />
   <SideBarIcon
    hover="text-white hover:bg-green-400"
    icon={<BsPlus size="32" />}
   />
   <SideBarIcon
    hover="text-white hover:bg-green-400"
    icon={<BsFillLightningFill size="20" />}
   />
   <SideBarIcon
    hover="text-white hover:bg-green-400"
    icon={<FaPoo size="20" />}
   />
   <Divider />
   <SideBarIcon
    hover="text-white hover:bg-green-400"
    icon={<BsGearFill size="22" />}
   />
  </div>
 )
}

const SideBarIcon: React.FC<{ icon: React.ReactNode; text?: string; hover: string }> = ({ icon, text = "tooltip 💡", hover }) => (
 <div
  className={`sidebar-icon group relative mx-auto mb-2 mt-2
    flex h-12 w-12 cursor-pointer items-center justify-center rounded-3xl bg-gray-800 text-green-500
    shadow-lg transition-all
    duration-300 ease-linear hover:rounded-xl ${hover}`}>
  {icon}
  <span
   className="sidebar-tooltip absolute left-14 m-2 w-auto min-w-max origin-left scale-0 rounded-md
    bg-gray-900 p-2 text-xs font-bold
    text-white shadow-md transition-all duration-500 group-hover:scale-100">
   {text}
  </span>
 </div>
)


const Divider = () => (
 <hr
  className="sidebar-hr mx-2
    rounded-full border border-gray-800 bg-gray-800"
 />
)

export default SideBar
