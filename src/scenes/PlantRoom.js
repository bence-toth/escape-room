import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorRight from "../objects/DoorRight";
import Plant from "../objects/Plant";

// import { InventoryContext } from "../App";
// import { MessageContext } from "../App";
import { GameStateContext } from "../App";

const StartRoom = () => {
  // const inventory = useContext(InventoryContext);
  // const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const { isLight1On, isLight2On, isLight3On } = gameState.plantRoom;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/plant-room");
  });

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
      <Plant />
      <Lamp
        isOn={isLight1On}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="-30"
      />
      <Lamp
        isOn={isLight2On}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="0"
      />
      <Lamp
        isOn={isLight3On}
        styles={{ color: "hsl(120, 20%, 26%)" }}
        position="30"
      />
    </div>
  );
};

export default StartRoom;
