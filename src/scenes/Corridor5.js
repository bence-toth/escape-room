import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import PostIt from "../objects/PostIt";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Corridor5 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-5");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(300, 12%, 26%)",
          wallColor: "hsl(300, 12%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 12%, 26%)",
          frameColor: "hsl(23, 12%, 16%)",
          wallColor: "hsl(300, 12%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-4");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 12%, 26%)",
          frameColor: "hsl(23, 12%, 16%)",
          wallColor: "hsl(300, 12%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-6");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor5.isSwitchOn ? 1 : 0.1,
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
        <span style={{ fontSize: "1.5em", fontWeight: "bold" }}>Day #1</span>
        <br />
        <br />
        One night while I was doing an experiment, I made a discovery.
        <br />
        I wouldn't believe it at first, but the more I was thinking
        <br />
        about it, the more it started to make sense.
        <br />
        <br />
        I cannot fully explain it yet. But I will try.
        <br />
        Human language might be too limiting.
        <br />
        <br />
        There is something special about you and me.
        <br />
        As we were traveling, we left fractures in the fabric of
        <br />
        space-time. Like tiny footprints in the sand.
        <br />
        <br />I am now sure that I will be able to build a time machine.
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor5.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor5",
            "isSwitchOn",
            !gameState.corridor5.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.corridor5.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
      <PostIt
        isObserved={gameState.startRoom.isNoteTaken}
        onObserve={() => updateGameState("startRoom", "isNoteTaken", true)}
        onLeave={() => updateGameState("startRoom", "isNoteTaken", false)}
        transformIfNotObserved="translate(17%, -45%) scale(0.05) rotate(10deg)"
      >
        <div>
          I love you for how deeply you care. You are such a fantastic person.
        </div>
      </PostIt>
    </div>
  );
};

export default Corridor5;
