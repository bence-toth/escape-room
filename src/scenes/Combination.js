import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import CombinationLock from "../objects/CombinationLock";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const Combination = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/combination");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  const onChangeCode = (code) => {
    updateGameState("combination", "code", code);
    if (code === "111111111111111111111") {
      updateMessage("You hear something clicking");
      updateGameState("combination", "isPuzzleSolved", true);
    }
  };

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
