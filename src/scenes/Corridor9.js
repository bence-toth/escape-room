import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor9 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-9");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(320, 12%, 26%)",
          wallColor: "hsl(320, 12%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 12%, 26%)",
          frameColor: "hsl(23, 12%, 16%)",
          wallColor: "hsl(320, 12%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-8");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 12%, 26%)",
          frameColor: "hsl(23, 12%, 16%)",
          wallColor: "hsl(320, 12%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-10");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor9.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.7vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
        }}
      >
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Day #12</span>
        <br />
        <br />
        Maybe it was also possible to travel to the future where
        <br />
        the time footprints don't exist yet. By the time of my
        <br />
        arrival, they would have already been there after all.
        <br />
        <br />
        Timelines are getting distorted as I keep traveling.
        <br />I cannot tell what will happen.
        <br />
        But I can see it if I wanted to.
        <br />
        <br />
        You've got to go back in time from time to time
        <br />
        if you want to move forward.
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor9.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor9",
            "isSwitchOn",
            !gameState.corridor9.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor9.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor9;
