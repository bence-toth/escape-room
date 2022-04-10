import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

const Columns = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const { isKeyTaken, colors } = gameState.basement;

  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/columns");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Column position={-40} />
      <Column position={-30} />
      <Column position={-20} />
      <Column position={-10} />
      <Column position={0} />
      <Column position={10} />
      <Column position={20} />
      <DoorRight
        isOpen={gameState.basement.isDoorOpen}
        styles={{
          frameColor: "hsl(45, 14%, 55%)",
          doorColor: "hsl(23, 19%, 16%)",
        }}
        onOpen={() => {
          updateMessage("The door seems to be locked");
        }}
        onWalkThrough={() => {
          navigate("/corridor-10");
        }}
        position="38"
        isBack
      />
    </div>
  );
};

export default Columns;
