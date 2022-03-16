import { Routes, Route } from "react-router-dom";

import StartRoom from "./scenes/StartRoom";
import StarMap from "./scenes/StarMap";
import PlantRoom from "./scenes/PlantRoom";
import Basement from "./scenes/Basement";
import CombinationRoom from "./scenes/CombinationRoom";
import Combination from "./scenes/Combination";

import "./GameCanvas.css";

const GameCanvas = () => (
  <div className="gameCanvas">
    <Routes>
      <Route path="/" element={<StartRoom />} />
      <Route path="/star-map" element={<StarMap />} />
      <Route path="/plant-room" element={<PlantRoom />} />
      <Route path="/basement" element={<Basement />} />
      <Route path="/combination-room" element={<CombinationRoom />} />
      <Route path="/combination" element={<Combination />} />
    </Routes>
  </div>
);

export default GameCanvas;
