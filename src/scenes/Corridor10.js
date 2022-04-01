import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import PlanetLock from "../objects/PlanetLock";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const CombinationRoom = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-10");
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
        withDoor
        isDoorOpen={gameState.corridor10.isPuzzleSolved}
        onWalkThrough={() => {
          // navigate("/corridor-2");
        }}
      />
      <PlanetLock
        code={gameState.corridor10.code}
        isSmall
        onView={() => {
          navigate("/planet-lock");
        }}
      />
      <Switch
        position="-35.25"
        isOn={gameState.corridor10.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor10",
            "isSwitchOn",
            !gameState.corridor10.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor10.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default CombinationRoom;
