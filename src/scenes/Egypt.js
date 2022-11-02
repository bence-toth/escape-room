import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";
import Calendar from "../objects/Calendar";
import Lamp from "../objects/Lamp";
import { LocationChangeContext } from "../App";

const Egypt = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/egypt");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(45, 14%, 50%)",
          wallColor: "hsl(45, 14%, 45%)",
        }}
      />
      <Calendar position={35} day="18" month="January" />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: 0.75,
          position: "absolute",
          top: "53%",
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
        Do you remember when we first talked about Jane Goodall?
        <br />
        <br />
        We were outside walking in the park,
        <br />
        we saw the first early signs of spring.
        <br />
        <br />
        And we were looking at those beautiful animals.
        <br />
        <br />
        They are holding a clue now.
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

export default Egypt;
