import { useEffect, useState } from "react";

const initialGameState = {
  startRoom: {
    isLeftDoorOpen: false,
    isRightDoorOpen: false,
    wasCarpetMoved: 0,
    isKeyTaken: false,
    isLampOn: false,
  },
};

const useGameState = () => {
  const [gameState, setGameState] = useState(
    JSON.parse(
      localStorage.getItem("game-state") ?? JSON.stringify(initialGameState)
    )
  );

  useEffect(() => {
    localStorage.setItem("game-state", JSON.stringify(gameState));
  }, [gameState]);

  const updateGameState = (scene, key, value) => {
    setGameState({
      ...gameState,
      [scene]: {
        ...gameState[scene],
        [key]: value,
      },
    });
  };

  return { gameState, updateGameState };
};

export default useGameState;
