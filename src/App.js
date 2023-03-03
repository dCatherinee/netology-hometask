import "./App.css";
import Data from "./Components/Data/Data";

function App() {
  return (
    <div>
      <Data url="http://localhost:7070/data" opts={[]} />
      <Data url="http://localhost:7070/error" opts={[]} />
      <Data url="http://localhost:7070/loading" opts={[]} />
    </div>
  );
}

export default App;
