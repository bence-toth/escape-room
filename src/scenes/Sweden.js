import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Portal from "../objects/Portal";

import { LocationChangeContext } from "../App";

// TODO: Add clue for column fragment
// TODO: Enrich room
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
      <Portal
        position={35}
        onWalkThrough={() => {
          navigate("/portal-room");
        }}
        isActive
        withBorder
      />
    </div>
  );
};

export default Sweden;
