import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./component/Menu";
import HomePage from "./component/HomePage";
import DriftPage from "./component/DriftPage";
import ForzaPage from "./component/ForzaPage";
import TimeAttackPage from "./component/TimeAttackPage";
import "./App.css";

export default function App() {
  return (
      <BrowserRouter>
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
      </BrowserRouter>
  );
}