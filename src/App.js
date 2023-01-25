import "./App.css";
import { data } from './data';
import Listing from "./Components/Listing/Listing";

function App() {
  return (
    <Listing items={data} />
  );
}

export default App;
