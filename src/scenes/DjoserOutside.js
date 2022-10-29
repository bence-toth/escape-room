import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import Portal from "../objects/Portal";
import PyramidOutside from "../objects/PyramidOutside";
import Clouds from "../objects/Clouds";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

import DjoserOutsidePicture from "../assets/djoser-outside.png";

const DjoserOutside = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/djoser-outside");
  }, []);

  return (
    <div className="scene">
      <Wall
        styles={{
          color: "#00c3ff",
        }}
      />
      <Clouds />
      <img
        src={DjoserOutsidePicture}
        alt=""
        style={{ position: "absolute", height: "100%" }}
      />
      <Portal
        isActive={gameState.portalRoom.destination !== ""}
        position={40}
        transform="scale(0.4) translateY(120%)"
        onWalkThrough={() => {
          navigate("/portal-room");
        }}
      />
    </div>
  );
};

export default DjoserOutside;
