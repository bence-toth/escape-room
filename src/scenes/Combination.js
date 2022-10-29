import { useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import CombinationLock from "../objects/CombinationLock";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

const Combination = () => {
  // TODO: Add pyramids around combination lock
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/combination");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  const onChangeCode = useCallback(
    (code) => {
      if (gameState.combination.isPuzzleSolved) {
        return;
      }
      updateGameState("combination", "code", code);
      if (code === "111111111111111111111") {
        // TODO: Replace code
        updateMessage("You hear something clicking");
        updateGameState("combination", "isPuzzleSolved", true);
      }
    },
    [gameState.combination.isPuzzleSolved, updateGameState, updateMessage]
  );

  return (
    <div className="scene">
      <Wall
        styles={{ color: "hsl(63, 19%, 46%)" }}
        onClick={() => {
          navigate("/combination-room");
        }}
      />
      <CombinationLock
        code={gameState.combination.code}
        onChangeCode={onChangeCode}
        isSmall={false}
        isPuzzleSolved={gameState.combination.isPuzzleSolved}
      />
    </div>
  );
};

export default Combination;
