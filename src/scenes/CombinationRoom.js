import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import WallRight from "../objects/WallRight";
import CombinationLock from "../objects/CombinationLock";
import Switch from "../objects/Switch";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const CombinationRoom = () => {
  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  const navigate = useNavigate();

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
      <Switch
        position="-45"
        isOn={gameState.combinationRoom.isSwitchOn}
        onToggle={() => {
          updateMessage("The switch does not seem to do anything");
          updateGameState(
            "combinationRoom",
            "isSwitchOn",
            !gameState.combinationRoom.isSwitchOn
          );
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
        onOpen={() => {
          console.log("open");
        }}
        onWalkThrough={() => {
          navigate("/corridor-1");
        }}
      />
      <CombinationLock
        code={gameState.combination.code}
        onView={() => {
          navigate("/combination");
        }}
        isSmall
      />
      <Lamp isOn styles={{ color: "hsl(23, 10%, 26%)" }} position="0" />
    </div>
  );
};

export default CombinationRoom;
