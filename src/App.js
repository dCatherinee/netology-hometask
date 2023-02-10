import "./App.css";
import AdBlockLonger from "./Components/ AdBlockLonger/AdBlockLonger";
import Information from "./Components/Information/Information";
import News from "./Components/News/News";
import Search from "./Components/Search/Search";

function App() {
  const adBlockM = {
    img: "",
    link: "",
    title: "",
    text: "",
  };
  const weather = {
    type: "погода",
    link: "",
    title: "",
    tempMorning: "",
    tempDay: "",
  };
  const broadcast = {
    type: "эфир",
    link: "",
    title: "",
    list: [
      {
        img: "",
        link: "",
        pic: "",
        channel: "",
      },
      {
        img: "",
        link: "",
        pic: "",
        channel: "",
      },
      {
        img: "",
        link: "",
        pic: "",
        channel: "",
      },
    ],
  };

  return (
    <div>
      <div>
        <News adBlockM={adBlockM} />
      </div>
      <Search />
      <AdBlockLonger link="" img="" />
      <div>
        <Information {...weather} />
        <Information {...broadcast} />
        <Information />
      </div>
    </div>
  );
}

export default App;
