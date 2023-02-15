import "./App.css";
import { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import Watchs from "./Components/Watchs/Watchs";

function App() {
  const [timezones, setTimezones] = useState({});
  const [watchs, setWatchs] = useState([]);

  const currDate = new Date();

  const addNewTimezone = (zone) => {
    setWatchs([...watchs, zone]);
  };

  const removeZone = (zone) => {
    setWatchs((prevWatch) => prevWatch.filter((item) => item.id !== zone.id));
  };

  return (
    <div className="container">
      <Form onAddNewTimezone={addNewTimezone} />
      <Watchs watchs={watchs} currDate={currDate} onRemove={removeZone} />
    </div>
  );
}

export default App;
