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
          fontSize: "2vh",
          fontFamily: "'Shadows Into Light', cursive",
          lineHeight: 1.25,
          width: "65%",
        }}
      >
        Day #1
        <br />
        <br />
        One night while I was doing an experiment, I made a discovery.
        <br />
        I wouldn't believe it at first, but the more I was thinking about it,
        <br />
        the more it started to make sense.
        <br />
        <br />
        I cannot fully explain it yet. But I will try.
        <br />
        <br />
        There is something special about you and me.
        <br />
        As we were traveling, we left fractures in the fabric of
        <br />
        space-time. Like tiny footprints in the sand.
        <br />
        <br />
        I started calling them time crystals.
        <br />I am now sure that I will be able to build a time machine.
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
