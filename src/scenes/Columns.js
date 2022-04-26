import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";
import ColumnFragment from "../objects/ColumnFragment";
import columnWritings from "../objects/columnWritings";
import WallDrawing from "../assets/Wall-Drawing-Random-6.png";
import CarpetBig from "../objects/CarpetBig";

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
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "60%",
          top: "50%",
          left: "22%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
      <CarpetBig
        position={0}
        styles={{
          color: "hsl(341, 90%, 23%)",
          borderColor: "hsl(340, 73%, 36%)",
        }}
      />
      {[0, 1, 2, 3, 4, 5, 6].map((columnIndex) => (
        <Column
          key={columnIndex}
          position={(columnIndex - 3.5) * 8}
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
            } else if (!selectedItem) {
              updateMessage("It looks like something is missing here.");
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
        position="37"
        isBack
      />
    </div>
  );
};

export default Columns;
