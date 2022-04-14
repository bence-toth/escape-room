import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";
import ColumnFragment from "../objects/ColumnFragment";
import columnWritings from "../objects/columnWritings";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

const Columns = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

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
      {[0, 1, 2, 3, 4, 5, 6].map((columnIndex) => (
        <Column
          key={columnIndex}
          position={(columnIndex - 4) * 10}
          onPlaceFragment={() => {
            const selectedItem = inventory.selectedItem;
            if (
              !selectedItem &&
              gameState.columns.slots[columnIndex] !== null
            ) {
              inventory.addItem({
                id: `columnFragment${gameState.columns.slots[columnIndex] + 1}`,
                picture: `columnFragment${
                  gameState.columns.slots[columnIndex] + 1
                }`,
              });
              const newSlots = [...gameState.columns.slots];
              newSlots[columnIndex] = null;
              updateGameState("columns", "slots", newSlots);
            } else if (
              selectedItem &&
              selectedItem.startsWith("columnFragment")
            ) {
              if (gameState.columns.slots[columnIndex] !== null) {
                inventory.addItem({
                  id: `columnFragment${
                    gameState.columns.slots[columnIndex] + 1
                  }`,
                  picture: `columnFragment${
                    gameState.columns.slots[columnIndex] + 1
                  }`,
                });
              }
              const newSlots = [...gameState.columns.slots];
              newSlots[columnIndex] = +selectedItem.slice(-1) - 1;
              inventory.removeItem(selectedItem);
              updateGameState("columns", "slots", newSlots);
              updateMessage("You place the fragment in the column.");
            }
          }}
          fragment={
            gameState.columns.slots[columnIndex] !== null ? (
              <ColumnFragment
                letters={
                  columnWritings[gameState.columns.slots[columnIndex]].letters
                }
                header={
                  columnWritings[gameState.columns.slots[columnIndex]].header
                }
                footer={
                  columnWritings[gameState.columns.slots[columnIndex]].footer
                }
                ignorePointerEvents
              />
            ) : null
          }
        />
      ))}
      <DoorRight
        isOpen
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
