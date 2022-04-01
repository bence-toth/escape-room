import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import TimeMachineScreen from "../objects/TimeMachineScreen";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

const Combination = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/portal-room-screen");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  return (
    <div className="scene">
      <Wall
        styles={{ color: "hsl(63, 19%, 46%)" }}
        onClick={() => {
          navigate("/portal-room");
        }}
      />
      <TimeMachineScreen />
      <div
        style={{
          position: "absolute",
          border: "5px solid red",
          top: "19%",
          left: "20.5%",
          width: "59%",
          height: "56%",
        }}
      ></div>
    </div>
  );
};

export default Combination;
