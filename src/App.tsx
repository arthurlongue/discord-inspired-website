import Channelbar from "./components/ChannelBar/index.jsx";
import ContentContainer from "./components/ContentContainer/index.jsx";
import SideBar from "./components/SideBar/index.jsx"

function App() {
  return (
    <div className="flex">
      <SideBar />
      <Channelbar />
      <ContentContainer />
    </div>
  );
}

export default App;
