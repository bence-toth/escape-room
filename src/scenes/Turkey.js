import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";
import Calendar from "../objects/Calendar";
import Lamp from "../objects/Lamp";
import WallDrawingClue from "../assets/Wall-Drawing-Clue-2.png";

import { LocationChangeContext } from "../App";

const Turkey = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/turkey");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Calendar position={35} day="15" month="October" />
      <img
        alt=""
        src={WallDrawingClue}
        style={{
          position: "absolute",
          height: "65%",
          top: "47%",
          left: "37.5%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          opacity: 0.75,
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: 0.75,
          position: "absolute",
          top: "48%",
          left: "62%",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3.5vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
          width: "65%",
          transform: "translate(-50%, -50%) rotate(-87deg)",
        }}
      >
        You are looking at me every day.
      </p>
      <Portal
        position={35}
        onWalkThrough={() => {
          navigate("/portal-room");
        }}
        isActive
        withBorder
      />
      <Lamp isOn styles={{ color: "hsl(23, 10%, 26%)" }} position="0" />
    </div>
  );
};

export default Turkey;
