import { Routes, Route } from "react-router-dom";

import StartRoom from "./scenes/StartRoom";
import StarMap from "./scenes/StarMap";
import PlantRoom from "./scenes/PlantRoom";
import Basement from "./scenes/Basement";
import CombinationRoom from "./scenes/CombinationRoom";
import Combination from "./scenes/Combination";
import DrawingRoom from "./scenes/DrawingRoom";
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
import PlanetLock from "./scenes/PlanetLockClose";
import Gallery1 from "./scenes/Gallery1";
import Gallery2 from "./scenes/Gallery2";
import Gallery3 from "./scenes/Gallery3";
import Gallery4 from "./scenes/Gallery4";
import GalleryPicture1 from "./scenes/GalleryPicture1";
import GalleryPicture2 from "./scenes/GalleryPicture2";
import GalleryPicture3 from "./scenes/GalleryPicture3";
import GalleryPicture4 from "./scenes/GalleryPicture4";
import GalleryPicture5 from "./scenes/GalleryPicture5";
import GalleryPicture6 from "./scenes/GalleryPicture6";
import GalleryPicture7 from "./scenes/GalleryPicture7";
import GalleryPicture8 from "./scenes/GalleryPicture8";
import GalleryPicture9 from "./scenes/GalleryPicture9";
import GalleryPicture10 from "./scenes/GalleryPicture10";
import GalleryPicture11 from "./scenes/GalleryPicture11";
import GalleryPicture12 from "./scenes/GalleryPicture12";
import LightLock from "./scenes/LightLockClose";
import PlanetRoom from "./scenes/PlanetRoom";
import PortalRoom from "./scenes/PortalRoom";
import PortalRoomScreen from "./scenes/PortalRoomScreen";
import Columns from "./scenes/Columns";
import SafeClose from "./scenes/SafeClose";
import DjoserOutside from "./scenes/DjoserOutside";
import DjoserInside from "./scenes/DjoserInside";

import "./GameCanvas.css";

const GameCanvas = ({ isRendered }) => (
  <div className="gameCanvas" data-rendered={isRendered}>
    <Routes>
      <Route path="/" element={<StartRoom />} />
      <Route path="/star-map" element={<StarMap />} />
      <Route path="/plant-room" element={<PlantRoom />} />
      <Route path="/basement" element={<Basement />} />
      <Route path="/combination-room" element={<CombinationRoom />} />
      <Route path="/combination" element={<Combination />} />
      <Route path="/drawing-room" element={<DrawingRoom />} />
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
      <Route path="/gallery-1" element={<Gallery1 />} />
      <Route path="/gallery-2" element={<Gallery2 />} />
      <Route path="/gallery-3" element={<Gallery3 />} />
      <Route path="/gallery-4" element={<Gallery4 />} />
      <Route path="/gallery-picture-1" element={<GalleryPicture1 />} />
      <Route path="/gallery-picture-2" element={<GalleryPicture2 />} />
      <Route path="/gallery-picture-3" element={<GalleryPicture3 />} />
      <Route path="/gallery-picture-4" element={<GalleryPicture4 />} />
      <Route path="/gallery-picture-5" element={<GalleryPicture5 />} />
      <Route path="/gallery-picture-6" element={<GalleryPicture6 />} />
      <Route path="/gallery-picture-7" element={<GalleryPicture7 />} />
      <Route path="/gallery-picture-8" element={<GalleryPicture8 />} />
      <Route path="/gallery-picture-9" element={<GalleryPicture9 />} />
      <Route path="/gallery-picture-10" element={<GalleryPicture10 />} />
      <Route path="/gallery-picture-11" element={<GalleryPicture11 />} />
      <Route path="/gallery-picture-12" element={<GalleryPicture12 />} />
      <Route path="/gallery-4-lock" element={<LightLock />} />
      <Route path="/portal-room-screen" element={<PortalRoomScreen />} />
      <Route path="/planet-room" element={<PlanetRoom />} />
      <Route path="/planet-lock" element={<PlanetLock />} />
      <Route path="/portal-room" element={<PortalRoom />} />
      <Route path="/portal-room-screen" element={<PortalRoomScreen />} />
      <Route path="/columns" element={<Columns />} />
      <Route path="/safe" element={<SafeClose />} />
      <Route path="/djoser-outside" element={<DjoserOutside />} />
      <Route path="/djoser-inside" element={<DjoserInside />} />
    </Routes>
  </div>
);

export default GameCanvas;
