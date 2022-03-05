import { useState } from "react";

import Lamp from "./Lamp";
import DoorLeft from "./DoorLeft";
import DoorRight from "./DoorRight";
import Carpet from "./Carpet";

import "./App.css";

const App = () => {
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [wasCarpetMoved, setWasCarpetMoved] = useState(false);
  const [isLampOn, setIsLampOn] = useState(false);
  return (
    <div className="app">
      <div className="gameCanvas">
        <div className="scene">
          <div className="ceiling"></div>
          <div className="floor"></div>
          <DoorLeft
            isOpen={isLeftDoorOpen}
            onOpen={() => {
              setIsLeftDoorOpen(true);
            }}
            onWalkThrough={() => {
              console.log("walk through");
              setIsLampOn(!isLampOn);
            }}
            position="-10"
          />
          <DoorRight
            isOpen={isRightDoorOpen}
            onOpen={() => {
              setIsRightDoorOpen(true);
            }}
            onWalkThrough={() => {
              console.log("walk through");
              setIsLampOn(!isLampOn);
            }}
            position="63.5"
          />
          <Carpet
            position={wasCarpetMoved ? "30" : "0"}
            onMove={() => {
              setWasCarpetMoved(true);
            }}
          />
          <Lamp isOn={isLampOn} />
        </div>
      </div>
    </div>
  );
};

export default App;
