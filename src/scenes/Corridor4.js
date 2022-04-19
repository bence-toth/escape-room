import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import Chair from "../objects/Chair";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor4 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-4");
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
          navigate("/corridor-3");
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
          navigate("/corridor-5");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor4.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "53%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.6vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
        }}
      >
        Day #127
        <br />
        <br />
        Now it is your choice to make.
        <br />
        Please save me. You have to meet me in the future.
        <br />
        I was there, I saw how this was going to play out.
        <br />
        <br />I left the space-time coordinates in the locker.
        <br />
        You will find some fragments of our past all around in our history.
        <br />
        Our time crystals will guide you.
        <br />
        You need to be there. You need to meet me.
        <br />
        <br />I know you will, I've been there and then already. I saw you.
        <br />
        <br />
        Please hurry. This is a race against time.
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor4.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor4",
            "isSwitchOn",
            !gameState.corridor4.isSwitchOn
          );
        }}
      />
      <Chair position={31} />
      <Lamp
        isOn={gameState.corridor4.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor4;
