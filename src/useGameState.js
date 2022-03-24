import { useEffect, useState, useCallback } from "react";

const initialGameState = {
  startRoom: {
    isLeftDoorOpen: false,
    isRightDoorOpen: false,
    wasCarpetMoved: 0,
    isKeyTaken: false,
    isSwitchOn: true,
    isTrapDoorHandleInPlace: false,
    isTrapDoorOpen: false,
    isGalleryKeyTaken: false,
  },
  plantRoom: {
    isSwitchOn: false,
    isRemoteSwitchOn: false,
    isHandleTaken: false,
  },
  basement: {
    isKeyTaken: false,
    colors: ["gray", "gray", "gray", "gray", "gray"],
    isDoorOpen: false,
  },
  combinationRoom: {
    isSwitchOn: false,
  },
  combination: {
    code: "                     ",
    isPuzzleSolved: false,
  },
  planetRoom: {
    arePlanetsMoving: false,
  },
  drawingRoom: {
    isSwitchOn: false,
  },
  gallery: {
    isSwitchOn: false,
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

  const updateGameState = useCallback((scene, key, value) => {
    setGameState((previousGameState) => ({
      ...previousGameState,
      [scene]: {
        ...previousGameState[scene],
        [key]: value,
      },
    }));
  }, []);

  return { gameState, updateGameState };
};

export default useGameState;
