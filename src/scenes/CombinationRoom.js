import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import CombinationLock from "../objects/CombinationLock";
import { GameStateContext } from "../App";

const CombinationRoom = () => {
  const { gameState } = useContext(GameStateContext);

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
