import { useState, useContext } from "react";

import Lamp from "./Lamp";
import DoorLeft from "./DoorLeft";
import DoorRight from "./DoorRight";
import Carpet from "./Carpet";
import Key from "./Key";

import { InventoryContext } from "./App";

const Room1 = () => {
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [wasCarpetMoved, setWasCarpetMoved] = useState(0);
  const [isKeyTaken, setIsKeyTaken] = useState(false);
  const [isLampOn, setIsLampOn] = useState(false);

  const inventory = useContext(InventoryContext);

  return (
    <div className="scene">
      <div className="ceiling"></div>
      <div className="floor"></div>
      <DoorLeft
        isOpen={isLeftDoorOpen}
        onOpen={() => {
          if (inventory.hasItem({ id: "key" })) {
            setIsLeftDoorOpen(true);
          }
        }}
        onWalkThrough={() => {
          console.log("walk through");
        }}
        position="-20"
      />
      <DoorRight
        isOpen={isRightDoorOpen}
        onOpen={() => {
          setIsLampOn(!isLampOn);
        }}
        position="20"
      />
      {!isKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key" });
            setIsKeyTaken(true);
          }}
          position={"-20"}
        />
      )}
      <Carpet
        position={
          wasCarpetMoved === 2 ? "40" : wasCarpetMoved === 1 ? "10" : "0"
        }
        onMove={() => {
          setWasCarpetMoved(Math.min(wasCarpetMoved + 1, 2));
        }}
      />
      <Lamp isOn={isLampOn} />
    </div>
  );
};

export default Room1;
