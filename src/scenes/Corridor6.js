import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import LeverHandle from "../objects/LeverHandle";
import Armchair from "../objects/Armchair";
import Carpet from "../objects/Carpet";

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
          floorColor: "hsl(128, 19%, 26%)",
          wallColor: "hsl(128, 19%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(128, 19%, 30%)",
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
          wallColor: "hsl(128, 19%, 30%)",
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
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor6.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.8vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Day #28</span>
        <br />
        <br />I am slowly making my peace with this messy world.
        <br />
        I can see the possibilities. The potential. It's like fabric.
        <br />
        <br />
        Together, we can straighten things out again,
        <br />
        and then we would have a chance to continue
        <br />
        where we left off.
        <br />
        <br />
        This is the only way forward.
        <br />
        You would have to make it happen.
        <br />
        And you will need my guidance.
        <br />
        <br />I will do my very best to help you help me.
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
      <Carpet
        position={0}
        styles={{
          color: "#3b8d42",
          borderColor: "#30773a",
        }}
      />
      <Armchair position={30} />
      <Armchair position={-30} />
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
