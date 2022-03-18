import { Routes, Route } from "react-router-dom";

import StartRoom from "./scenes/StartRoom";
import StarMap from "./scenes/StarMap";
import PlantRoom from "./scenes/PlantRoom";
import Basement from "./scenes/Basement";
import CombinationRoom from "./scenes/CombinationRoom";
import Combination from "./scenes/Combination";
import Corridor1 from "./scenes/Corridor1";
import Corridor2 from "./scenes/Corridor2";
import Corridor3 from "./scenes/Corridor3";
import Corridor4 from "./scenes/Corridor4";
import Corridor5 from "./scenes/Corridor5";
import Corridor6 from "./scenes/Corridor6";
import Corridor7 from "./scenes/Corridor7";
import Corridor8 from "./scenes/Corridor8";
import Corridor9 from "./scenes/Corridor9";
import Corridor10 from "./scenes/Corridor10";

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
      <Route path="/corridor-1" element={<Corridor1 />} />
      <Route path="/corridor-2" element={<Corridor2 />} />
      <Route path="/corridor-3" element={<Corridor3 />} />
      <Route path="/corridor-4" element={<Corridor4 />} />
      <Route path="/corridor-5" element={<Corridor5 />} />
      <Route path="/corridor-6" element={<Corridor6 />} />
      <Route path="/corridor-7" element={<Corridor7 />} />
      <Route path="/corridor-8" element={<Corridor8 />} />
      <Route path="/corridor-9" element={<Corridor9 />} />
      <Route path="/corridor-10" element={<Corridor10 />} />
    </Routes>
  </div>
);

export default GameCanvas;
