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
    isSwitchOn: true,
    isRemoteSwitchOn: false,
  },
  combination: {
    code: "                     ",
    isPuzzleSolved: false,
  },
  planetRoom: {
    isLeverInPlace: false,
    arePlanetsMoving: false,
    isSwitchOn: true,
  },
  drawingRoom: {
    isSwitchOn: false,
  },
  gallery1: {
    isSwitchOn: true,
  },
  gallery2: {
    isSwitchOn: true,
  },
  gallery3: {
    isSwitchOn: true,
  },
  gallery4: {
    isSwitchOn: true,
    isRemoteSwitchOn: false,
  },
  corridor1: {
    isSwitchOn: true,
  },
  corridor2: {
    isSwitchOn: true,
  },
  corridor3: {
    isSwitchOn: true,
  },
  corridor4: {
    isSwitchOn: true,
  },
  corridor5: {
    isSwitchOn: true,
  },
  corridor6: {
    isSwitchOn: true,
  },
  corridor7: {
    isSwitchOn: true,
  },
  corridor8: {
    isSwitchOn: true,
  },
  corridor9: {
    isSwitchOn: true,
  },
  corridor10: {
    isSwitchOn: true,
    code: "00000",
    isPuzzleSolved: false,
  },
  portalRoom: {
    isSwitchOn: true,
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
