import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";
import Calendar from "../objects/Calendar";
import Lamp from "../objects/Lamp";
import WallDrawingClue from "../assets/Wall-Drawing-Lighthouse.png";

import { LocationChangeContext } from "../App";

const Sweden = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/sweden");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Calendar position={35} day="4" month="June" />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: 0.75,
          position: "absolute",
          top: "40%",
          left: "36%",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "3vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.1,
          width: "65%",
          transform: "translate(-50%, -50%)",
        }}
      >
        The light tower at the peak of Kullaberg has
        <br />
        always reminded me of a chess piece.
        <br />
        <br />
        It looks just like a rook.
        <br />
        <br />
        So I left this one in the chess set for you.
      </p>
      <img
        alt=""
        src={WallDrawingClue}
        style={{
          position: "absolute",
          height: "30%",
          top: "69%",
          left: "0%",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />
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

export default Sweden;
