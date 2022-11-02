import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";
import Calendar from "../objects/Calendar";
import Lamp from "../objects/Lamp";
import WallDrawingClue from "../assets/Wall-Drawing-Clue-3.png";

import { LocationChangeContext } from "../App";

const BosniaHerzegovina = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/bosnia-herzegovina");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Calendar position={35} day="9" month="August" />
      <img
        alt=""
        src={WallDrawingClue}
        style={{
          position: "absolute",
          height: "40%",
          top: "47%",
          left: "36%",
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
          top: "75%",
          left: "36%",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3.5vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
          width: "65%",
          transform: "translate(-50%, -50%)",
        }}
      >
        I am a flower but I do not need water.
        <br />
        The vase is my base which holds the clue.
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

export default BosniaHerzegovina;
