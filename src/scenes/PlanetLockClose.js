import { useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import PlanetLock from "../objects/PlanetLock";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const PlanetLockClose = () => {
  // TODO: Change planet lock background when solved
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/planet-lock");
  }, []);

  const updateMessage = useContext(MessageContext);

  const onChangeCode = useCallback(
    (code) => {
      if (gameState.corridor10.isPuzzleSolved) {
        return;
      }
      updateGameState("corridor10", "code", code);
      if (code === "3671") {
        updateMessage("You hear something clicking");
        updateGameState("corridor10", "isPuzzleSolved", true);
      }
    },
    [gameState.corridor10.isPuzzleSolved, updateGameState, updateMessage]
  );

  return (
    <div className="scene">
      <Wall
        styles={{ color: "hsl(63, 19%, 36%)" }}
        onClick={() => {
          navigate("/corridor-10");
        }}
      />
      <PlanetLock
        isPuzzleSolved={gameState.corridor10.isPuzzleSolved}
        code={gameState.corridor10.code}
        onChangeCode={onChangeCode}
      />
    </div>
  );
};

export default PlanetLockClose;
