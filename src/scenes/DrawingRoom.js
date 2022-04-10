import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";

import WallDrawing from "../assets/WallDrawing.png";

import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

const DrawingRoom = () => {
  const navigate = useContext(LocationChangeContext);

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
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.drawingRoom.isSwitchOn ? 0.8 : 0.1,
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
      <Lamp
        isOn={gameState.drawingRoom.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default DrawingRoom;
