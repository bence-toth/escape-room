import { useState, useContext } from "react";

import Lamp from "./Lamp";
import DoorLeft from "./DoorLeft";
import DoorRight from "./DoorRight";
import Carpet from "./Carpet";
import Key from "./Key";
import Picture from "./Picture";

import { InventoryContext } from "./App";
import { MessageContext } from "./App";

const Room1 = () => {
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [wasCarpetMoved, setWasCarpetMoved] = useState(0);
  const [isKeyTaken, setIsKeyTaken] = useState(false);
  const [isLampOn, setIsLampOn] = useState(true);

  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  return (
    <div className="scene">
      <div className="ceiling"></div>
      <div className="wall"></div>
      <div className="floor"></div>
      <DoorLeft
        isOpen={isLeftDoorOpen}
        onOpen={() => {
          if (inventory.hasItem({ id: "key" })) {
            inventory.removeItem({ id: "key" });
            setIsLeftDoorOpen(true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          console.log("walk through");
        }}
        position="-30"
      />
      <DoorRight
        isOpen={isRightDoorOpen}
        onOpen={() => {
          setIsLampOn(!isLampOn);
        }}
        position="30"
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
      <Picture />
      <Lamp isOn={isLampOn} />
    </div>
  );
};

export default Room1;
