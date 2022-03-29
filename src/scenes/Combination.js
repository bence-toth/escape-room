import { useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import CombinationLock from "../objects/CombinationLock";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

const Combination = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/combination");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  const onChangeCode = useCallback(
    (code) => {
      updateGameState("combination", "code", code);
      if (code === "111111111111111111111") {
        // TODO: Replace code "127492020397316804710"
        updateMessage("You hear something clicking");
        updateGameState("combination", "isPuzzleSolved", true);
      }
    },
    [updateGameState, updateMessage]
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
      />
    </div>
  );
};

export default Combination;
