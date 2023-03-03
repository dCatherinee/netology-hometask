import { Routes, Route } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import HomePage from "./Components/HomePage/HomePage";
import DriftPage from "./Components/DriftPage/DriftPage";
import ForzaPage from "./Components/ForzaPage/ForzaPage";
import TimeAttackPage from "./Components/TimeAttackPage/TimeAttackPage";
import "./App.css";

function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
