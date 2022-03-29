import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import DoorRight from "../objects/DoorRight";
import Carpet from "../objects/Carpet";
import Key from "../objects/Key";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import TrapDoor from "../objects/TrapDoor";

import starMap from "../assets/StarMap.png";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

// TODO:
// Misplace lever
// Engagement survey number (send physical letter)
// Add random objects in random rooms
// Add columns
// QR code for the game
// Create wall writings on the corridor (day numbers should also be a code)
// Add more drawings to random rooms

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const navigate = useContext(LocationChangeContext);

  const {
    isLeftDoorOpen,
    isRightDoorOpen,
    wasCarpetMoved,
    isKeyTaken,
    isSwitchOn,
    isTrapDoorHandleInPlace,
    isTrapDoorOpen,
    isGalleryKeyTaken,
  } = gameState.startRoom;

  useEffect(() => {
    localStorage.setItem("game-location", "/");
  }, []);

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
          if (inventory.selectedItem === "key") {
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
          if (inventory.selectedItem === "key2") {
            inventory.removeItem({ id: "key2" });
            updateGameState("startRoom", "isRightDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/combination-room");
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
            inventory.addItem({ id: "key", picture: "key" });
            updateGameState("startRoom", "isKeyTaken", true);
            updateMessage("You found a key");
          }}
          position={"-20"}
          styles={{ color: "hsl(40, 100%, 44%)" }}
        />
      )}
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
      <Switch
        position="17"
        isOn={isSwitchOn}
        onToggle={() => {
          updateGameState("startRoom", "isSwitchOn", !isSwitchOn);
        }}
      />
      <TrapDoor
        hasHandle={isTrapDoorHandleInPlace}
        isOpen={isTrapDoorOpen}
        onOpen={() => {
          if (isTrapDoorHandleInPlace) {
            updateGameState("startRoom", "isTrapDoorOpen", true);
            updateGameState("plantRoom", "isRemoteSwitchOn", false);
          } else if (inventory.selectedItem === "trapDoorHandle") {
            inventory.removeItem({ id: "trapDoorHandle" });
            updateGameState("startRoom", "isTrapDoorHandleInPlace", true);
          } else {
            updateMessage("The trap door seems to be stuck");
          }
        }}
        onWalkThrough={() => {
          navigate("/basement");
        }}
        position="0"
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
          handleColor: "hsl(23, 55%, 43%)",
        }}
      />
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
      {!isGalleryKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key3", picture: "key" });
            updateGameState("startRoom", "isGalleryKeyTaken", true);
            updateMessage("You found a key");
          }}
          position={"10"}
          styles={{ color: "hsl(40, 100%, 44%)" }}
        />
      )}
      <Lamp
        isOn={isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default StartRoom;
