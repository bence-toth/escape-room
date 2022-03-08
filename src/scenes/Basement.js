import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import TrapDoorCeiling from "../objects/TrapDoorCeiling";

// import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";

const StartRoom = () => {
  // const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/basement");

    if (!gameState.plantRoom.isRemoteSwitchOn) {
      updateMessage("It's dark in here");
    }

    console.log("%cSome message here with a clue", "font-size:24px");
  }, [gameState.plantRoom.isRemoteSwitchOn, updateMessage]);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(23, 10%, 16%)",
          wallColor: "hsl(23, 10%, 22%)",
        }}
      />
      <TrapDoorCeiling
        onWalkThrough={() => {
          navigate("/");
        }}
        position="0"
        styles={{
          frameColor: "hsl(23, 19%, 6%)",
          doorColor: "hsl(23, 19%, 16%)",
          handleColor: "hsl(23, 55%, 33%)",
        }}
      />
      <Lamp
        isOn={gameState.plantRoom.isRemoteSwitchOn}
        styles={{ color: "hsl(23, 10%, 16%)" }}
        position="-25"
      />
      <p
        style={{
          color: "rgb(62, 55, 50)",
          position: "absolute",
          top: "40%",
          left: "25%",
          transform: "translateX(-50%) rotate(-5deg)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.5vh",
          fontFamily: "'Shadows Into Light', cursive",
          letterSpacing: "0.1em",
        }}
      >
        I feel really disappointed.
        <br />
        Will you <em>console</em> me?
      </p>
    </div>
  );
};

export default StartRoom;
