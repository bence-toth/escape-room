import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor3 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-3");
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
          navigate("/corridor-2");
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
          navigate("/corridor-4");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor3.isSwitchOn ? 1 : 0.1,
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
        Day #3
        <br />
        <br />
        We got time wrong. Directionality is all wrong.
        <br />
        Time is not going forward. Of backward. It's not even going.
        <br />
        <br />
        I am able to jump between points in space-time
        <br />
        where our time crystals exist. Existed. Will exist. Would.
        <br />
        <br />
        I am worried about the possible consequences.
        <br />
        What happens to the past if we changed the present?
        <br />
        What if I got lost? Will you have found me?
        <br />
        <br />
        Have I been going to go mad?
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor3.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor3",
            "isSwitchOn",
            !gameState.corridor3.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor3.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor3;
