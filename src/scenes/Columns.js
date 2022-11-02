import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";
import WallDrawing from "../assets/Wall-Drawing-Random-6.png";
import WallDrawingClue from "../assets/Wall-Drawing-Clue-1.png";
import CarpetBig from "../objects/CarpetBig";

import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import PostIt from "../objects/PostIt";

const Columns = () => {
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/columns");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "30%",
          top: "30%",
          left: "85%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />
      <img
        alt=""
        src={WallDrawingClue}
        style={{
          position: "absolute",
          height: "30%",
          top: "43%",
          left: "37.5%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: 0.5,
          position: "absolute",
          top: "68%",
          left: "37.5%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3.5vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
          width: "65%",
        }}
      >
        The first clue is here and now.
        <br />
        You only have to reach out for it.
      </p>
      <CarpetBig
        position={0}
        styles={{
          color: "hsl(341, 90%, 23%)",
          borderColor: "hsl(340, 73%, 36%)",
        }}
      />
      <Column position={-45} />
      <Column position={20} />
      <DoorRight
        isOpen
        styles={{
          frameColor: "hsl(45, 14%, 55%)",
          doorColor: "hsl(23, 19%, 16%)",
        }}
        onOpen={() => {
          updateMessage("The door seems to be locked");
        }}
        onWalkThrough={() => {
          navigate("/corridor-10");
        }}
        position="37"
        isBack
      />
      <PostIt
        isObserved={gameState.startRoom.isNoteTaken}
        onObserve={() => updateGameState("startRoom", "isNoteTaken", true)}
        onLeave={() => updateGameState("startRoom", "isNoteTaken", false)}
        transformIfNotObserved="translate(-12%, -40%) scale(0.05) rotate(8deg)"
      >
        <div>
          Always believing in each other and supporting each other is one of the
          things that makes our life together so special.
        </div>
      </PostIt>
    </div>
  );
};

export default Columns;
