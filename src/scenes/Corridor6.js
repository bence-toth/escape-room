import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import LeverHandle from "../objects/LeverHandle";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { InventoryContext } from "../App";
import { MessageContext } from "../App";

const Corridor6 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-6");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 36%)",
          wallColor: "hsl(63, 19%, 46%)",
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
          navigate("/corridor-5");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-7");
        }}
      />
      <p
        style={{
          color: "rgb(62, 55, 50)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2vh",
          fontFamily: "'Shadows Into Light', cursive",
          lineHeight: 1.25,
        }}
      >
        Day #6
        <br />
        we could ever ask for...
        <br />
        What do they believe?
        <br />
        Where are all their fathers?
        <br />
        Where are all their mothers?
        <br />
        It's hard to reach across the
        <br />
        unbelievable distances between
        <br />
        what we really are
        <br />
        and who we claim to be.
        <br />
      </p>
      {!gameState.corridor6.isLeverHandleTaken && (
        <LeverHandle
          position={35}
          onTake={() => {
            inventory.addItem({ id: "leverHandle", picture: "leverHandle" });
            updateMessage("You found a lever handle");
            updateGameState("corridor6", "isLeverHandleTaken", true);
          }}
        />
      )}
      <Switch
        position="-35.25"
        isOn={gameState.corridor6.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor6",
            "isSwitchOn",
            !gameState.corridor6.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor6.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor6;
