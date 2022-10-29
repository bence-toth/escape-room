import { useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import CombinationLock from "../objects/CombinationLock";
import WallDrawingPyramids from "../assets/Wall-Drawing-Pyramids.png";

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
      if (gameState.combination.isPuzzleSolved) {
        return;
      }
      updateGameState("combination", "code", code);
      if (code === "111111111111111111111") {
        // TODO: Find a place for the two digit code
        // TODO: Replace code: "1 xx 492 9384 97316 804719"
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
      <img
        alt=""
        src={WallDrawingPyramids}
        style={{
          position: "absolute",
          height: "78%",
          top: "45.6%",
          left: "47.8%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.combinationRoom.isSwitchOn ? 1 : 0.3,
          pointerEvents: "none",
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
