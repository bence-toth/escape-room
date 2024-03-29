import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import PlanetLock from "../objects/PlanetLock";
import Switch from "../objects/Switch";
import DoorRight from "../objects/DoorRight";
import WallDrawing from "../assets/Wall-Drawing-Random-5.png";
import PostIt from "../objects/PostIt";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { InventoryContext } from "../App";
import { MessageContext } from "../App";

const Corridor10 = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
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
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "30%",
          top: "39%",
          left: "39%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.corridor10.isSwitchOn ? 1 : 0.15,
          pointerEvents: "none",
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
        isPuzzleSolved={gameState.corridor10.isPuzzleSolved}
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
        onOpen={() => {
          updateMessage("The door seems to be locked");
        }}
      />
      <DoorRight
        isOpen={gameState.corridor10.isDoorOpen}
        onOpen={() => {
          if (inventory.selectedItem === "key4") {
            inventory.removeItem("key4");
            updateGameState("corridor10", "isDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/columns");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="-21"
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
      {gameState.corridor10.isDoorOpen && (
        <PostIt
          isObserved={gameState.startRoom.isNoteTaken}
          onObserve={() => updateGameState("startRoom", "isNoteTaken", true)}
          onLeave={() => updateGameState("startRoom", "isNoteTaken", false)}
          transformIfNotObserved="translate(-52%, -45%) scale(0.05) rotate(-15deg)"
        >
          <div>You are a true inspiration.</div>
        </PostIt>
      )}
    </div>
  );
};

export default Corridor10;
