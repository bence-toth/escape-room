import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import DoorRight from "../objects/DoorRight";
import Column from "../objects/Column";
import WallDrawing from "../assets/Wall-Drawing-Random-6.png";
import CarpetBig from "../objects/CarpetBig";

import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

const Columns = () => {
  // TODO: Add clue for column fragment
  const updateMessage = useContext(MessageContext);

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
          height: "60%",
          top: "50%",
          left: "38%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          pointerEvents: "none",
          opacity: 0.5,
        }}
      />
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
    </div>
  );
};

export default Columns;
