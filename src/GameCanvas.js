import { Routes, Route } from "react-router-dom";

import StartRoom from "./scenes/StartRoom";
import StarMap from "./scenes/StarMap";
import PlantRoom from "./scenes/PlantRoom";
import Basement from "./scenes/Basement";

import "./GameCanvas.css";

const GameCanvas = () => (
  <div className="gameCanvas">
    <Routes>
      <Route path="/" element={<StartRoom />} />
      <Route path="/star-map" element={<StarMap />} />
      <Route path="/plant-room" element={<PlantRoom />} />
      <Route path="/basement" element={<Basement />} />
    </Routes>
  </div>
);

export default GameCanvas;
