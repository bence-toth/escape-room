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
    safeCode: "0000000",
    isPuzzleSolved: false,
    isNoteTaken: false,
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
    isSwitchOn: false,
  },
  drawingRoom: {
    isSwitchOn: false,
    isScrewdriverTaken: false,
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
    isPuzzleSolved: false,
    code: "0000000000110100",
  },
  corridor1: {
    isSwitchOn: false,
  },
  corridor2: {
    isSwitchOn: false,
  },
  corridor3: {
    isSwitchOn: false,
  },
  corridor4: {
    isSwitchOn: false,
  },
  corridor5: {
    isSwitchOn: false,
  },
  corridor6: {
    isSwitchOn: false,
  },
  corridor7: {
    isSwitchOn: false,
  },
  corridor8: {
    isSwitchOn: false,
  },
  corridor9: {
    isSwitchOn: false,
  },
  corridor10: {
    isSwitchOn: true,
    code: "00000",
    isPuzzleSolved: false,
  },
  portalRoom: {
    isSwitchOn: true,
    isPinEntered: false,
    destination: "",
    screw1position: 0,
    screw2position: 0,
    screw3position: 0,
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
