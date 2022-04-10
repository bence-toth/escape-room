import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";
import ColumnFragment from "../objects/ColumnFragment";

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
      <Column
        position={-40}
        fragment={
          <ColumnFragment letters="Wda a b  m " header="J" footer="☿" />
        }
      />
      <Column
        position={-30}
        fragment={
          <ColumnFragment letters="erwsn up ea" header="O" footer="♄" />
        }
      />
      <Column
        position={-20}
        fragment={
          <ColumnFragment letters=" iapdtta rg" header="U" footer="♆" />
        }
      />
      <Column
        position={-10}
        fragment={
          <ColumnFragment letters="hfya i twga" header="R" footer="☉" />
        }
      />
      <Column
        position={0}
        fragment={
          <ColumnFragment letters="at c mohiei" header="N" footer="♀" />
        }
      />
      <Column
        position={10}
        fragment={
          <ColumnFragment letters="veie eusl n" header="E" footer="♅" />
        }
      />
      <Column
        position={20}
        fragment={
          <ColumnFragment letters="edn  ,r l ." header="Y" footer="♃" />
        }
      />
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
      <ColumnFragment
        letters="edn  ,r l ."
        header="Y"
        footer="♃"
        styles={{
          transform: "translateX(850%) translateY(30%) rotate(20deg)",
        }}
      />
    </div>
  );
};

export default Columns;
