import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import WallRight from "../objects/WallRight";
import CombinationLock from "../objects/CombinationLock";
import Switch from "../objects/Switch";
import PendulumClock from "../objects/PendulumClock";
import WallDrawing from "../assets/WallDrawing-Screws.png";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

const CombinationRoom = () => {
  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/combination-room");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 36%)",
          wallColor: "hsl(63, 19%, 46%)",
        }}
      />
      <DoorLeft
        isOpen
        isBack
        onWalkThrough={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="-30"
      />
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "10%",
          top: "32%",
          left: "20.5%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.combinationRoom.isSwitchOn ? 1 : 0.3,
          pointerEvents: "none",
        }}
      />
      <Switch
        position="-45"
        isOn={gameState.combinationRoom.isRemoteSwitchOn}
        onToggle={() => {
          updateMessage("The switch does not seem to do anything");
          updateGameState(
            "combinationRoom",
            "isRemoteSwitchOn",
            !gameState.combinationRoom.isRemoteSwitchOn
          );
        }}
      />
      <Switch
        position="-15.25"
        isOn={gameState.combinationRoom.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "combinationRoom",
            "isSwitchOn",
            !gameState.combinationRoom.isSwitchOn
          );
        }}
      />
      <PendulumClock
        position={17}
        isWorking={gameState.combination.isPuzzleSolved}
        onObserve={() => {
          if (gameState.combination.isPuzzleSolved) {
            updateMessage("The clock aims to misbehave");
          } else {
            updateMessage("The clock is not working");
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
        isDoorOpen={gameState.combination.isPuzzleSolved}
        onWalkThrough={() => {
          navigate("/corridor-1");
        }}
        onOpen={() => {
          updateMessage("The door seems to be locked");
        }}
      />
      <CombinationLock
        code={gameState.combination.code}
        onView={() => {
          navigate("/combination");
        }}
        isSmall
      />
      <Lamp
        isOn={gameState.combinationRoom.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default CombinationRoom;
