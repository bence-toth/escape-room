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
          navigate("/corridor-8");
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
          navigate("/corridor-10");
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
        Day #9
        <br />
        <br />
        Now it is your choice to make.
        <br />
        Please save me. You have to meet me in the future.
        <br />
        I was there, I saw how this was going to play out.
        <br />
        <br />I left the space-time coordinates in the chest.
        <br />
        You will find the key all around in the past.
        <br />
        Our time crystals will guide you.
        <br />
        You need to be there. You need to meet me.
        <br />
        <br />I know you will, I've been there and then already. I saw you.
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
