import { BsPlusCircleFill } from "react-icons/bs"
import TopNavigation from "../TopNavigation"

const ContentContainer = () => {
 return (
  <div
   className="content-container m-0 flex
   h-full
    w-full
    flex-col overflow-hidden
    bg-gray-700">
   <TopNavigation />
   <div
    className="content-list mx-auto ml-0 mt-0
    flex h-full
    w-full flex-col items-center overflow-y-scroll px-0
    pb-12">
    <Post
     name="Ada"
     timestamp="one week ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
    />
    <Post name="Leon" timestamp="one week ago" text={`Lorem ipsum dolor. `} />
    <Post name="Jill" timestamp="5 days ago" text={`Lorem.`} />
    <Post
     name="Ellie"
     timestamp="4 days ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
    />
    <Post
     name="Chris"
     timestamp="4 days ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
    />
    <Post
     name="Claire"
     timestamp="2 days ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. `}
    />
    <Post
     name="Albert"
     timestamp="22 hours ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. ☺️ `}
    />
    <Post
     name="Rebecca"
     timestamp="3 hours ago"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit.`}
    />
    <Post
     name="H.U.N.K"
     timestamp="Just now"
     text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit.`}
    />
   </div>
   <BottomBar />
  </div>
 )
}

const BottomBar = () => (
 <div
  className="bottom-bar fixed bottom-2 left-80 right-8 flex h-12 flex-row items-center justify-between rounded-lg bg-gray-600 px-2
    shadow-lg">
  <PlusIcon />
  <input
   type="text"
   placeholder="Enter message..."
   className="bottom-bar-input ml-0 mr-auto w-full cursor-text bg-transparent font-semibold text-gray-400 placeholder-gray-500    outline-none"
  />
 </div>
)
const Post: React.FC<{ name: string; timestamp: string; text: string }> = ({ name, timestamp, text }) => {
 return (
  <div className="post m-0 flex w-full cursor-pointer flex-row items-center justify-evenly px-8 py-4">
   <div className="avatar-wrapper m-0 mb-auto ml-auto flex w-12 flex-col items-center">
    <img
     src="https://api.dicebear.com/7.x/adventurer/svg?seed=Abby&flip=true"
     alt="profile pic"
     className="avatar mx-0 mb-auto mt-0 h-full w-12 flex-none cursor-pointer rounded-full bg-gray-100 object-cover shadow-md"
    />
   </div>

   <div className="post-content ml-auto flex w-4/5 flex-col justify-start">
    <p className="post-owner mr-2 cursor-pointer text-left font-semibold text-white">
     {name}
     <small className="timestamp ml-2 text-left text-xs font-semibold text-gray-600">
      {timestamp}
     </small>
    </p>
    <p className="post-text mr-auto whitespace-normal text-left text-lg text-white">
     {text}
    </p>
   </div>
  </div>
 )
}

const PlusIcon = () => (
 <BsPlusCircleFill size="22" className="mx-2 text-green-500 shadow-lg " />
)

export default ContentContainer
