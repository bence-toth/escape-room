import { useState, useContext } from "react";

import Lamp from "./Lamp";
import DoorLeft from "./DoorLeft";
import DoorRight from "./DoorRight";
import Carpet from "./Carpet";

import { InventoryContext } from "./App";

const Room1 = () => {
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [wasCarpetMoved, setWasCarpetMoved] = useState(false);
  const [isLampOn, setIsLampOn] = useState(false);

  const inventory = useContext(InventoryContext);

  return (
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
          if (inventory.hasItem({ id: "key" })) {
            setIsLampOn(!isLampOn);
          }
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
          if (inventory.hasItem({ id: "key" })) {
            setIsLampOn(!isLampOn);
          }
        }}
        position="63.5"
      />
      <Carpet
        position={wasCarpetMoved ? "30" : "0"}
        onMove={() => {
          setWasCarpetMoved(true);
          inventory.addItem({ id: "key" });
        }}
      />
      <Lamp isOn={isLampOn} />
    </div>
  );
};

export default Room1;
