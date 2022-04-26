import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import Portal from "../objects/Portal";
import PyramidOutside from "../objects/PyramidOutside";
import Clouds from "../objects/Clouds";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

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
      <PyramidOutside
        onEnter={() => {
          navigate("/djoser-inside");
        }}
      />
      <Portal
        isActive={gameState.portalRoom.destination !== ""}
        position={35}
        transform="scale(0.2) translateY(150%)"
        onWalkThrough={() => {
          navigate("/portal-room");
        }}
      />
    </div>
  );
};

export default DjoserOutside;
