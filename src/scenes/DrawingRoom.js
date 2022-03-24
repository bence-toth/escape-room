import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";

import WallDrawing from "../assets/WallDrawing.png";

const CombinationRoom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/drawing-room");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(23, 10%, 16%)",
          wallColor: "hsl(23, 10%, 22%)",
        }}
      />
      <WallLeft
        styles={{
          frameColor: "hsl(23, 19%, 12%)",
          wallColor: "hsl(23, 10%, 20%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/basement");
        }}
      />
      <WallRight
        styles={{
          wallColor: "hsl(23, 10%, 20%)",
        }}
      />
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "60%",
          top: "52%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <Lamp isOn styles={{ color: "hsl(23, 10%, 26%)" }} position="0" />
    </div>
  );
};

export default CombinationRoom;