import { useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import "./SafeClose.css";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const signs = ["♁", "☿", "♅", "☉", "♃", "⛢", "🜚︎", "♄", "♆", "♀"];

const SafeClose = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/safe");
  }, []);

  const updateMessage = useContext(MessageContext);

  const shiftSign = useCallback(
    (index) => {
      if (gameState.startRoom.isPuzzleSolved) {
        return;
      }
      const currentCode = gameState.startRoom.safeCode.split("");
      currentCode[index] = +currentCode[index] + 1;
      if (currentCode[index] === 10) {
        currentCode[index] = 0;
      }
      const newCode = currentCode.join("");
      updateGameState("startRoom", "safeCode", newCode);
      // TODO: Replace code: "27514890"
      if (newCode === "44444444") {
        updateMessage("The safe opens");
        updateGameState("startRoom", "isPuzzleSolved", true);
        navigate("/");
      }
    },
    [
      gameState.startRoom.isPuzzleSolved,
      gameState.startRoom.safeCode,
      navigate,
      updateGameState,
      updateMessage,
    ]
  );

  return (
    <div className="scene">
      <Wall
        styles={{ color: "#5b5950" }}
        onClick={() => {
          navigate("/");
        }}
      />
      <div className="safeLock">
        <div onClick={() => shiftSign(0)}>
          {signs[gameState.startRoom.safeCode.charAt(0)]}
        </div>
        <div onClick={() => shiftSign(1)}>
          {signs[gameState.startRoom.safeCode.charAt(1)]}
        </div>
        <div onClick={() => shiftSign(2)}>
          {signs[gameState.startRoom.safeCode.charAt(2)]}
        </div>
        <div onClick={() => shiftSign(3)}>
          {signs[gameState.startRoom.safeCode.charAt(3)]}
        </div>
        <div onClick={() => shiftSign(4)}>
          {signs[gameState.startRoom.safeCode.charAt(4)]}
        </div>
        <div onClick={() => shiftSign(5)}>
          {signs[gameState.startRoom.safeCode.charAt(5)]}
        </div>
        <div onClick={() => shiftSign(6)}>
          {signs[gameState.startRoom.safeCode.charAt(6)]}
        </div>
        <div onClick={() => shiftSign(7)}>
          {signs[gameState.startRoom.safeCode.charAt(7)]}
        </div>
      </div>
      <div className="lockLight" />
    </div>
  );
};

export default SafeClose;
