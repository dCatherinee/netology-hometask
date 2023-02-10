import "./App.css";
import Collapse from "./Components/Collapse/Collapse";

function App() {
  return (
    <div className="center">
      <Collapse
        collapsedLabel="open"
        expandedLabel="close"
        text="Вам поручено реализовать аналог компонента Collapse"
      />
    </div>
  );
}

export default App;
