import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Portal from "../objects/Portal";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const PortalRoom = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/portal-room");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 36%)",
          wallColor: "hsl(63, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-9");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 40%)",
        }}
      />
      <Switch
        position="-35.25"
        isOn={gameState.portalRoom.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "portalRoom",
            "isSwitchOn",
            !gameState.portalRoom.isSwitchOn
          );
        }}
      />
      <Portal />
      <Lamp
        isOn={gameState.portalRoom.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default PortalRoom;
