import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import TrapDoorCeiling from "../objects/TrapDoorCeiling";
import DoorRight from "../objects/DoorRight";
import Sofa from "../objects/Sofa";
import Key from "../objects/Key";
import ColorLock from "../objects/ColorLock";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";

let wasCatLogged = false;

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const { isKeyTaken, colors } = gameState.basement;

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/basement");

    if (!gameState.plantRoom.isRemoteSwitchOn) {
      updateMessage("It's dark in here");
    }

    if (!wasCatLogged) {
      const logLines = [
        " _______________________",
        "/ You can do it, Zsófi! \\",
        "\\       2 3 4 2 3       /",
        " -----------------------",
        "   \\",
        "    \\",
        "",
        "     |\\_/|",
        "     |o o|__",
        "     --*--__\\",
        "     C_C_(___)",
        "",
      ];
      logLines.forEach((line) => console.log(line));
      wasCatLogged = true;
    }
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
      <DoorRight
        isOpen={gameState.basement.isDoorOpen}
        styles={{
          frameColor: "hsl(23, 19%, 12%)",
          doorColor: "hsl(23, 19%, 16%)",
        }}
        position="20"
      />
      <Sofa position="-25" />
      {!isKeyTaken && (
        <Key
          onPickUp={() => {
            if (gameState.plantRoom.isRemoteSwitchOn) {
              inventory.addItem({ id: "key2", picture: "key" });
              updateGameState("basement", "isKeyTaken", true);
              updateMessage("You found a key");
            }
          }}
          position={"-45"}
          styles={{
            color: gameState.plantRoom.isRemoteSwitchOn
              ? "hsl(40, 100%, 44%)"
              : "hsl(23, 10%, 14%)",
          }}
        />
      )}
      <ColorLock
        colors={colors}
        updateColors={(colors) => {
          updateGameState("basement", "colors", colors);
          if (colors.join(",") === "red,green,yellow,red,blue") {
            console.log("door opens");
            updateGameState("basement", "isDoorOpen", true);
          }
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
        Will you <em style={{ textDecoration: "underline double" }}>
          console
        </em>{" "}
        me?
      </p>
    </div>
  );
};

export default StartRoom;
