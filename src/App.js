import { useState, useEffect } from "react";
import List from "./Components/List/List";
import Details from "./Components/Details/Details";
import getData from "./api";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    getData(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
    )
      .then((data) => setList(data))
      .catch((e) => console.log(e));
  }, []);

  const addSelected = (id) => {
    const select = list.filter((item) => item.id === id);

    setSelected(select);
    setActive(id);
  };

  return (
    <div className="container">
      <List list={list} handleClick={addSelected} active={active} />
      {selected && <Details info={selected} />}
    </div>
  );
}

export default App;
