import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorRight from "../objects/DoorRight";
import Plant from "../objects/Plant";
import Switch from "../objects/Switch";
import TrapDoorHandle from "../objects/TrapDoorHandle";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const { isSwitchOn, isRemoteSwitchOn, isTrapDoorHandleTaken, isDoorOpen } =
    gameState.plantRoom;

  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/plant-room");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(50, 29%, 36%)",
          wallColor: "hsl(50, 29%, 46%)",
        }}
      />
      <DoorRight
        isOpen
        isBack
        onWalkThrough={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "hsl(50, 29%, 16%)",
          doorColor: "hsl(50, 29%, 26%)",
        }}
        position="30"
      />
      <DoorRight
        isOpen={isDoorOpen}
        onOpen={() => {
          if (inventory.selectedItem === "key3") {
            inventory.removeItem({ id: "key3" });
            updateGameState("plantRoom", "isDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/gallery-1");
        }}
        styles={{
          frameColor: "hsl(50, 29%, 16%)",
          doorColor: "hsl(50, 29%, 26%)",
        }}
        position="-20"
      />
      <Plant
        showColors={
          isSwitchOn &&
          gameState.gallery4.isRemoteSwitchOn &&
          gameState.combinationRoom.isRemoteSwitchOn
        }
      />
      <Switch
        position="-45.5"
        isOn={isSwitchOn}
        onToggle={() => {
          updateGameState("plantRoom", "isSwitchOn", !isSwitchOn);
        }}
      />
      <Switch
        position="-41.5"
        isOn={isRemoteSwitchOn}
        onToggle={() => {
          updateGameState("plantRoom", "isRemoteSwitchOn", !isRemoteSwitchOn);
          updateMessage("The switch does not seem to do anything");
        }}
      />
      {!isTrapDoorHandleTaken && (
        <TrapDoorHandle
          onPickUp={() => {
            inventory.addItem({ id: "trapDoorHandle", picture: "metalRing" });
            updateGameState("plantRoom", "isTrapDoorHandleTaken", true);
            updateMessage("You found a weird metal ring");
          }}
          styles={{ handleColor: "hsl(23, 55%, 43%)" }}
        />
      )}
      <Lamp
        isOn={gameState.gallery4.isRemoteSwitchOn}
        styles={{ color: "hsl(50, 20%, 26%)" }}
        position="-30"
      />
      <Lamp
        isOn={gameState.combinationRoom.isRemoteSwitchOn}
        styles={{ color: "hsl(50, 20%, 26%)" }}
        position="0"
      />
      <Lamp
        isOn={isSwitchOn}
        styles={{ color: "hsl(50, 20%, 26%)" }}
        position="30"
      />
    </div>
  );
};

export default StartRoom;
