import { useEffect, useContext, useCallback } from "react";

import Room from "../objects/Room";
import Wall from "../objects/Wall";
import LightLock from "../objects/LightLock";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const LightLockClose = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-4-lock");
  }, []);

  const onChangeCode = useCallback(
    (code) => {
      if (gameState.gallery4.isPuzzleSolved) {
        return;
      }
      updateGameState("gallery4", "code", code);
      if (code === "1111111111111111") {
        updateMessage("You hear something clicking");
        updateGameState("gallery4", "isPuzzleSolved", true);
      }
    },
    [gameState.gallery4.isPuzzleSolved, updateGameState, updateMessage]
  );

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(175, 19%, 36%)",
          wallColor: "hsl(175, 19%, 46%)",
        }}
      />
      <Wall
        styles={{
          color: "hsl(175, 19%, 40%)",
        }}
        onClick={() => {
          navigate("/gallery-4");
        }}
      />
      <LightLock
        code={gameState.gallery4.code}
        isPuzzleSolved={gameState.gallery4.isPuzzleSolved}
        onChangeCode={onChangeCode}
      />
    </div>
  );
};

export default LightLockClose;
