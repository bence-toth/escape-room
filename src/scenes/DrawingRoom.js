import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import Screwdriver from "../objects/Screwdriver";
import SpiderWeb from "../objects/SpiderWeb";

import WallDrawing from "../assets/WallDrawing.png";

import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";
import { InventoryContext } from "../App";
import { MessageContext } from "../App";

const DrawingRoom = () => {
  const navigate = useContext(LocationChangeContext);
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/drawing-room");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(23, 10%, 16%)",
          wallColor: "hsl(23, 10%, 22%)",
        }}
      />
      <WallLeft
        styles={{
          frameColor: "hsl(23, 19%, 12%)",
          wallColor: "hsl(23, 10%, 20%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/basement");
        }}
      />
      <WallRight
        styles={{
          wallColor: "hsl(23, 10%, 20%)",
        }}
      />
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "60%",
          top: "54%",
          left: "49%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.drawingRoom.isSwitchOn ? 1 : 0.05,
          pointerEvents: "none",
        }}
      />
      <Switch
        position="-37"
        isOn={gameState.drawingRoom.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "drawingRoom",
            "isSwitchOn",
            !gameState.drawingRoom.isSwitchOn
          );
        }}
      />
      {!gameState.drawingRoom.isScrewdriverTaken && (
        <Screwdriver
          position={37}
          onPickUp={() => {
            inventory.addItem({ id: "screwdriver", picture: "screwdriver" });
            updateGameState("drawingRoom", "isScrewdriverTaken", true);
            updateMessage("You found a screwdriver");
          }}
        />
      )}
      <SpiderWeb
        position={33.5}
        verticalPosition={9.5}
        styles={{
          opacity: gameState.drawingRoom.isSwitchOn ? 1 : 0.5,
        }}
      />
      <Lamp
        isOn={gameState.drawingRoom.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 16%)" }}
        position="0"
      />
    </div>
  );
};

export default DrawingRoom;
