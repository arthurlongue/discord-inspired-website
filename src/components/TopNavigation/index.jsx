import { FaSearch, FaHashtag, FaRegBell, FaUserCircle } from "react-icons/fa"

const TopNavigation = () => {
  return (
    <div
      className="top-navigation m-0 flex h-16 w-full 
   flex-row items-center 
    justify-evenly bg-gray-700 
    bg-opacity-90 
    shadow-lg">
      <HashtagIcon />
      <Title />
      <Search />
      <BellIcon />
      <UserCircle />
    </div>
  )
}

const Search = () => (
  <div
    className="search ml-0 mr-0 flex h-9 w-1/5
    items-center
    justify-start rounded-md bg-gray-600 px-2 
    text-gray-500 shadow-md
    transition duration-300 ease-in-out">
    <input
      className="search-input w-full rounded bg-transparent
    pl-1 font-sans 
    font-semibold  text-gray-500
    placeholder-gray-500 outline-none"
      type="text"
      placeholder="Search..."
    />
    <FaSearch size="18" className="text-secondary my-auto" />
  </div>
)
const BellIcon = () => (
  <FaRegBell
    size="24"
    className="top-navigation-icon ml-auto
    mr-4 cursor-pointer
    text-gray-500 transition duration-300 
    ease-in-out 
    hover:text-pink-400"
  />
)

const UserCircle = () => (
  <FaUserCircle
    size="24"
    className="top-navigation-icon ml-4
    mr-3 cursor-pointer
    text-gray-500 transition duration-300 
    ease-in-out 
    hover:text-pink-400"
  />
)

const HashtagIcon = () => (
  <FaHashtag
    size="20"
    className="title-hashtag my-auto ml-2 text-lg font-semibold 
    tracking-wider text-gray-500"
  />
)

const Title = () => (
  <h5
    className="title-text my-auto ml-2 mr-auto text-xl font-semibold 
    tracking-wider text-gray-500 text-opacity-80 
    transition duration-300 ease-in-out">
    tailwind-css
  </h5>
)

export default TopNavigation
