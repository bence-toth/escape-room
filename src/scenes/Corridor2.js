import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor2 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-2");
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
          navigate("/corridor-1");
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
          navigate("/corridor-3");
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
        Day #2
        <br />
        <br />
        I made the first trip. Or did I? I'm not sure. Maybe I will.
        <br />
        <br />
        If the future is decided based on present events, free will
        <br />
        must be nothing more than an illusion. Maybe all this is
        <br />
        destined to happen. Maybe you are my destiny.
        <br />
        Maybe you were all along. Whatever all along means.
        <br />
        I'm not sure anymore. I'm getting confused.
        <br />
        <br />
        Or do our choices form our future?
        <br />
        Can our past choices be unchosen?
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor2.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor2",
            "isSwitchOn",
            !gameState.corridor2.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor2.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor2;
