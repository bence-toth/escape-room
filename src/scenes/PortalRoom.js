import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallLeft from "../objects/WallLeft";
import Portal from "../objects/Portal";
import Switch from "../objects/Switch";
import TimeMachine from "../objects/TimeMachine";
import WallDrawing from "../assets/Wall-Drawing-Random-4.png";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { InventoryContext } from "../App";
import { MessageContext } from "../App";

import "./PortalRoom.css";

const PortalRoom = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/portal-room");
  }, []);

  useEffect(() => {
    if (
      !gameState.portalRoom.areScrewsInPlace &&
      gameState.portalRoom.screw1position % 4 === 2 &&
      gameState.portalRoom.screw2position % 4 === 1 &&
      gameState.portalRoom.screw3position % 4 === 3
    ) {
      updateMessage("The machine starts to vibrate");
      updateGameState("portalRoom", "areScrewsInPlace", true);
      inventory.removeItem("screwdriver");
    }
  }, [
    gameState.portalRoom.areScrewsInPlace,
    gameState.portalRoom.screw1position,
    gameState.portalRoom.screw2position,
    gameState.portalRoom.screw3position,
    inventory,
    updateGameState,
    updateMessage,
  ]);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(188, 66%, 39%)",
          wallColor: "hsl(188, 49%, 42%)",
        }}
      />
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "60%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: gameState.portalRoom.isSwitchOn ? 1 : 0.15,
          pointerEvents: "none",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(188, 19%, 16%)",
          wallColor: "hsl(188, 49%, 38%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-10");
        }}
      />
      <Switch
        position="-35.25"
        isOn={gameState.portalRoom.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "portalRoom",
            "isSwitchOn",
            !gameState.portalRoom.isSwitchOn
          );
        }}
      />
      <Portal
        isActive={gameState.portalRoom.destination !== ""}
        position={-15}
        withBorder
        onWalkThrough={() => {
          if (gameState.portalRoom.destination === "sweden") {
            navigate("/corridor-10");
          }
          if (gameState.portalRoom.destination === "montenegro") {
            navigate("/corridor-10");
          }
          if (gameState.portalRoom.destination === "hungary") {
            navigate("/corridor-10");
          }
          if (gameState.portalRoom.destination === "egypt") {
            navigate("/corridor-10");
          }
          if (gameState.portalRoom.destination === "poland") {
            navigate("/corridor-10");
          }
        }}
      />
      <TimeMachine
        position={27}
        onObserve={() => {
          navigate("/portal-room-screen");
        }}
      />
      <div className="timeMachineScrews">
        <div
          className="timeMachineScrew"
          style={{
            transform: `rotate(${gameState.portalRoom.screw1position * 45}deg)`,
          }}
          onClick={() => {
            if (!gameState.portalRoom.areScrewsInPlace) {
              if (inventory.selectedItem === "screwdriver") {
                updateGameState(
                  "portalRoom",
                  "screw1position",
                  gameState.portalRoom.screw1position + 1
                );
              } else {
                updateMessage(
                  "It's very difficult to get a grasp of the screw with your hand"
                );
              }
            }
          }}
        ></div>
        <div
          className="timeMachineScrew"
          style={{
            transform: `rotate(${gameState.portalRoom.screw2position * 45}deg)`,
          }}
          onClick={() => {
            if (!gameState.portalRoom.areScrewsInPlace) {
              if (inventory.selectedItem === "screwdriver") {
                updateGameState(
                  "portalRoom",
                  "screw2position",
                  gameState.portalRoom.screw2position + 1
                );
              } else {
                updateMessage(
                  "It's very difficult to get a grasp of the screw with your hand"
                );
              }
            }
          }}
        ></div>
        <div
          className="timeMachineScrew"
          style={{
            transform: `rotate(${gameState.portalRoom.screw3position * 45}deg)`,
          }}
          onClick={() => {
            if (!gameState.portalRoom.areScrewsInPlace) {
              if (inventory.selectedItem === "screwdriver") {
                updateGameState(
                  "portalRoom",
                  "screw3position",
                  gameState.portalRoom.screw3position + 1
                );
              } else {
                updateMessage(
                  "It's very difficult to get a grasp of the screw with your hand"
                );
              }
            }
          }}
        ></div>
      </div>
      <Lamp
        isOn={gameState.portalRoom.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position={-15}
      />
    </div>
  );
};

export default PortalRoom;
