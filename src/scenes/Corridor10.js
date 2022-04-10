import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import PlanetLock from "../objects/PlanetLock";
import Switch from "../objects/Switch";
import DoorRight from "../objects/DoorRight";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor10 = () => {
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
      <PlanetLock
        code={gameState.corridor10.code}
        isSmall
        onView={() => {
          if (!gameState.corridor10.isPuzzleSolved) {
            navigate("/planet-lock");
          }
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
          navigate("/portal-room");
        }}
      />
      <DoorRight
        isOpen={false}
        onOpen={() => {
          // if (inventory.selectedItem === "key2") {
          //   inventory.removeItem({ id: "key2" });
          //   updateGameState("startRoom", "isRightDoorOpen", true);
          // } else {
          //   updateMessage("The door seems to be locked");
          // }
        }}
        onWalkThrough={() => {
          // navigate("/combination-room");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="-15"
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

export default Corridor10;
