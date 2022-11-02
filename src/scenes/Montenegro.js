import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";
import Calendar from "../objects/Calendar";
import Lamp from "../objects/Lamp";

import { LocationChangeContext } from "../App";

const Montenegro = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/montenegro");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Calendar position={35} day="27" month="October" />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: 0.75,
          position: "absolute",
          top: "50%",
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
        <span style={{ fontWeight: "bold" }}>In the Bay of Kotor</span>
        <br />
        <br />
        Just as we have started our journeys pelagic,
        <br />
        making love with you was becoming pure magic,
        <br />
        this image was slowly getting clearer
        <br />
        as we could see ourselves <em>beyond the mirror</em>.
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

export default Montenegro;
