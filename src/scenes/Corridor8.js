import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import Bonsai from "../objects/Bonsai";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor8 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-8");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(180, 19%, 26%)",
          wallColor: "hsl(180, 19%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(180, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-7");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(180, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-9");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor8.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Day #26</span>
        <br />
        <br />
        I tried to go back in time to prevent myself
        <br />
        from discovering time travel in the first place.
        <br />
        It seemed like the only reasonable course of action.
        <br />
        <br />
        But it backfired. I'm stuck in a timeline
        <br />
        where I don't belong.
        <br /> I do not have the means of undoing the undoing.
        <br />
        <br />
        Only you can help me now.
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor8.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor8",
            "isSwitchOn",
            !gameState.corridor8.isSwitchOn
          );
        }}
      />
      <Bonsai position={32} />
      <Lamp
        isOn={gameState.corridor8.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor8;
