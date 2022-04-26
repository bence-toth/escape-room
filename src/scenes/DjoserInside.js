import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PyramidInside from "../objects/PyramidInside";
import ColumnFragment from "../objects/ColumnFragment";
import columnWritings from "../objects/columnWritings";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { InventoryContext } from "../App";

const DjoserInside = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);
  const inventory = useContext(InventoryContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/djoser-outside");
  }, []);

  return (
    <div className="scene">
      <Wall
        styles={{
          color: "#562f14",
        }}
        onClick={() => {
          navigate("/djoser-outside");
        }}
      />
      <PyramidInside />
      {!gameState.columnFragments.isColumnFragment3Taken && (
        <ColumnFragment
          letters={columnWritings[2].letters}
          header={columnWritings[2].header}
          footer={columnWritings[2].footer}
          styles={{
            transform:
              "translateX(-10%) translateY(47%) scale(0.6) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment3",
              picture: "columnFragment3",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment3Taken", true);
          }}
        />
      )}
    </div>
  );
};

export default DjoserInside;
