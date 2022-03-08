import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import DoorRight from "../objects/DoorRight";
import Carpet from "../objects/Carpet";
import Key from "../objects/Key";
import Picture from "../objects/Picture";

import starMap from "../assets/StarMap.png";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const {
    isLeftDoorOpen,
    isRightDoorOpen,
    wasCarpetMoved,
    isKeyTaken,
    isLampOn,
  } = gameState.startRoom;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/");
  });

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(23, 19%, 36%)",
          wallColor: "hsl(23, 19%, 46%)",
        }}
      />
      <DoorLeft
        isOpen={isLeftDoorOpen}
        onOpen={() => {
          if (inventory.hasItem({ id: "key" })) {
            inventory.removeItem({ id: "key" });
            updateGameState("startRoom", "isLeftDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/plant-room");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="-30"
      />
      <DoorRight
        isOpen={isRightDoorOpen}
        onOpen={() => {
          updateGameState(
            "startRoom",
            "isLampOn",
            !gameState.startRoom.isLampOn
          );
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="30"
      />
      {!isKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key" });
            updateGameState("startRoom", "isKeyTaken", true);
          }}
          position={"-20"}
          styles={{ color: "hsl(40, 100%, 44%)" }}
        />
      )}
      <Carpet
        position={
          wasCarpetMoved === 2 ? "40" : wasCarpetMoved === 1 ? "10" : "0"
        }
        onMove={() => {
          updateGameState(
            "startRoom",
            "wasCarpetMoved",
            Math.min(gameState.startRoom.wasCarpetMoved + 1, 2)
          );
        }}
        styles={{
          color: "hsl(341, 90%, 23%)",
          borderColor: "hsl(340, 73%, 36%)",
        }}
      />
      <Picture
        onObserve={() => {
          navigate("/star-map");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={starMap}
      />
      <Lamp
        isOn={isLampOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default StartRoom;
