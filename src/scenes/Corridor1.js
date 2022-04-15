import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor1 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-1");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 26%)",
          wallColor: "hsl(63, 19%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/combination-room");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-2");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor1.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.3vh",
          fontFamily: "'Shadows Into Light', cursive",
          lineHeight: 1.25,
          width: "65%",
        }}
      >
        Day #17
        <br />
        <br />
        The machine worked. I made the first trip.
        <br />
        I have so many puzzling questions.
        <br />
        <br />
        If the future is decided based on present events, free will
        <br />
        must be nothing more than an illusion. Maybe everything is
        <br />
        destined to happen. Maybe you are my destiny.
        <br />
        Maybe you were all along. Whatever all along means.
        <br />
        I'm not sure anymore. I'm getting confused.
        <br />
        <br />
        Do our choices form our future?
        <br />
        Can our past choices be unchosen?
        <br />
        <br />I fear the consequences of moving along...
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor1.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor1",
            "isSwitchOn",
            !gameState.corridor1.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor1.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor1;
