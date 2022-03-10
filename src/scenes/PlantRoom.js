import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorRight from "../objects/DoorRight";
import Plant from "../objects/Plant";
import Switch from "../objects/Switch";
import TrapDoorHandle from "../objects/TrapDoorHandle";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const { isSwitchOn, isRemoteSwitchOn, isTrapDoorHandleTaken } =
    gameState.plantRoom;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/plant-room");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(120, 29%, 36%)",
          wallColor: "hsl(120, 29%, 46%)",
        }}
      />
      <DoorRight
        isOpen
        isBack
        onWalkThrough={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "hsl(120, 29%, 16%)",
          doorColor: "hsl(120, 29%, 26%)",
        }}
        position="30"
      />
      <DoorRight
        isOpen={false}
        onWalkThrough={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "hsl(120, 29%, 16%)",
          doorColor: "hsl(120, 29%, 26%)",
        }}
        position="-20"
      />
      <Plant />
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
        isOn={!gameState.startRoom.isSwitchOn}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="-30"
      />
      <Lamp
        isOn={false}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="0"
      />
      <Lamp
        isOn={isSwitchOn}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="30"
      />
    </div>
  );
};

export default StartRoom;
