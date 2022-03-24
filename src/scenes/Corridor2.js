import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";

import { LocationChangeContext } from "../App";

const CombinationRoom = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-2");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 36%)",
          wallColor: "hsl(63, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-1");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-3");
        }}
      />
      <p
        style={{
          color: "rgb(62, 55, 50)",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2vh",
          fontFamily: "'Shadows Into Light', cursive",
          lineHeight: 1.25,
        }}
      >
        Day #2
        <br />
        we could ever ask for...
        <br />
        What do they believe?
        <br />
        Where are all their fathers?
        <br />
        Where are all their mothers?
        <br />
        It's hard to reach across the
        <br />
        unbelievable distances between
        <br />
        what we really are
        <br />
        and who we claim to be.
        <br />
      </p>
      <Lamp isOn styles={{ color: "hsl(23, 10%, 26%)" }} position="0" />
    </div>
  );
};

export default CombinationRoom;
