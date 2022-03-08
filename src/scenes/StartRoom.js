import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import DoorRight from "../objects/DoorRight";
import Carpet from "../objects/Carpet";
import Key from "../objects/Key";
import Picture from "../objects/Picture";

import sky from "../assets/sky.png";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";

const StartRoom = () => {
  const [isLeftDoorOpen, setIsLeftDoorOpen] = useState(false);
  const [isRightDoorOpen, setIsRightDoorOpen] = useState(false);
  const [wasCarpetMoved, setWasCarpetMoved] = useState(0);
  const [isKeyTaken, setIsKeyTaken] = useState(false);
  const [isLampOn, setIsLampOn] = useState(true);

  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  const navigate = useNavigate();

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "gray",
          wallColor: "ivory",
        }}
      />
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
        styles={{ frameColor: "red", doorColor: "blue" }}
        position="-30"
      />
      <DoorRight
        isOpen={isRightDoorOpen}
        onOpen={() => {
          setIsLampOn(!isLampOn);
        }}
        styles={{ frameColor: "red", doorColor: "blue" }}
        position="30"
      />
      {!isKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key" });
            setIsKeyTaken(true);
          }}
          position={"-20"}
          styles={{ color: "pink" }}
        />
      )}
      <Carpet
        position={
          wasCarpetMoved === 2 ? "40" : wasCarpetMoved === 1 ? "10" : "0"
        }
        onMove={() => {
          setWasCarpetMoved(Math.min(wasCarpetMoved + 1, 2));
        }}
        styles={{
          color: "red",
          borderColor: "yellow",
        }}
      />
      <Picture
        onObserve={() => {
          navigate("/star-map");
        }}
        styles={{
          frameColor: "yellow",
          hangerColor: "blue",
        }}
        src={sky}
      />
      <Lamp isOn={isLampOn} styles={{ color: "red" }} />
    </div>
  );
};

export default StartRoom;
