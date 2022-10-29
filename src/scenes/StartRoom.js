import { useContext, useEffect } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import DoorLeft from "../objects/DoorLeft";
import DoorRight from "../objects/DoorRight";
import Carpet from "../objects/Carpet";
import Key from "../objects/Key";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import TrapDoor from "../objects/TrapDoor";
import WallDrawing from "../assets/Wall-Drawing-Random-1.png";
import Safe from "../objects/Safe";

import starMap from "../assets/StarMap.png";

import { InventoryContext } from "../App";
import { MessageContext } from "../App";
import { GameStateContext } from "../App";
import { LocationChangeContext } from "../App";

// TODO: Add post-it notes here and there
// TODO: Scatter column fragments
// TODO: QR code for the game

// TODO: Add random non-useful messages to objects
// TODO: Add useless inventory items

const StartRoom = () => {
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const navigate = useContext(LocationChangeContext);

  const {
    isLeftDoorOpen,
    isRightDoorOpen,
    wasCarpetMoved,
    isKeyTaken,
    isSwitchOn,
    isTrapDoorHandleInPlace,
    isTrapDoorOpen,
    isGalleryKeyTaken,
  } = gameState.startRoom;

  useEffect(() => {
    localStorage.setItem("game-location", "/");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(23, 19%, 36%)",
          wallColor: "hsl(23, 19%, 46%)",
        }}
      />
      <DoorLeft
        isOpen={isLeftDoorOpen}
        onOpen={() => {
          if (inventory.selectedItem === "key1") {
            inventory.removeItem("key1");
            updateGameState("startRoom", "isLeftDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/plant-room");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="-30"
      />
      <DoorRight
        isOpen={isRightDoorOpen}
        onOpen={() => {
          if (inventory.selectedItem === "key2") {
            inventory.removeItem("key2");
            updateGameState("startRoom", "isRightDoorOpen", true);
          } else {
            updateMessage("The door seems to be locked");
          }
        }}
        onWalkThrough={() => {
          navigate("/combination-room");
        }}
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
        }}
        position="30"
      />
      {!isKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key1", picture: "key" });
            updateGameState("startRoom", "isKeyTaken", true);
            updateMessage("You found a key");
          }}
          position={"-20"}
          styles={{ color: "hsl(40, 100%, 44%)" }}
        />
      )}
      <Picture
        onObserve={() => {
          navigate("/star-map");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={starMap}
      />
      <Switch
        position="17"
        isOn={isSwitchOn}
        onToggle={() => {
          updateGameState("startRoom", "isSwitchOn", !isSwitchOn);
        }}
      />
      <TrapDoor
        hasHandle={isTrapDoorHandleInPlace}
        isOpen={isTrapDoorOpen}
        onOpen={() => {
          if (isTrapDoorHandleInPlace) {
            updateGameState("startRoom", "isTrapDoorOpen", true);
            updateGameState("plantRoom", "isRemoteSwitchOn", false);
          } else if (inventory.selectedItem === "trapDoorHandle") {
            inventory.removeItem("trapDoorHandle");
            updateGameState("startRoom", "isTrapDoorHandleInPlace", true);
          } else {
            updateMessage("The trap door seems to be stuck");
          }
        }}
        onWalkThrough={() => {
          navigate("/basement");
        }}
        position="-0.5"
        styles={{
          frameColor: "hsl(23, 19%, 16%)",
          doorColor: "hsl(23, 19%, 26%)",
          handleColor: "hsl(23, 55%, 43%)",
        }}
      />
      <Carpet
        position={
          wasCarpetMoved === 2 ? "40" : wasCarpetMoved === 1 ? "10" : "0"
        }
        onMove={() => {
          updateGameState(
            "startRoom",
            "wasCarpetMoved",
            Math.min(gameState.startRoom.wasCarpetMoved + 1, 2)
          );
        }}
        styles={{
          color: "hsl(341, 90%, 23%)",
          borderColor: "hsl(340, 73%, 36%)",
        }}
      />
      {!isGalleryKeyTaken && (
        <Key
          onPickUp={() => {
            inventory.addItem({ id: "key2", picture: "key" });
            updateGameState("startRoom", "isGalleryKeyTaken", true);
            updateMessage("You found a key");
          }}
          position={"10"}
          styles={{ color: "hsl(40, 100%, 44%)" }}
        />
      )}
      <img
        alt=""
        src={WallDrawing}
        style={{
          position: "absolute",
          height: "20%",
          top: "25%",
          left: "65%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          opacity: gameState.startRoom.isSwitchOn ? 0.7 : 0.1,
          pointerEvents: "none",
        }}
      />
      <Safe
        isOpen={gameState.startRoom.isPuzzleSolved}
        onObserve={() => {
          navigate("/safe");
        }}
      />
      <Lamp
        isOn={isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
      {gameState.startRoom.isPuzzleSolved && (
        <>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: !gameState.startRoom.isNoteTaken ? 0 : 0.75,
              backdropFilter: "blur(10px)",
              background: "black",
              transition: "opacity 2s",
              pointerEvents: !gameState.startRoom.isNoteTaken ? "none" : "auto",
            }}
          ></div>
          <div
            onClick={() => {
              if (!gameState.startRoom.isNoteTaken) {
                updateGameState("startRoom", "isNoteTaken", true);
              } else {
                updateGameState("startRoom", "isNoteTaken", false);
              }
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              background:
                "linear-gradient(145deg, rgba(255,255,204,1) 0%, rgba(226,226,162,1) 100%)",
              height: "60vh",
              width: "60vh",
              padding: "1em",
              boxShadow: "3vh 3vh 6vh rgba(33,33,33,.7)",
              transform: !gameState.startRoom.isNoteTaken
                ? "translate(-50%, -10%) scale(0.05) rotate(-10deg)"
                : "translate(-50%, -50%)",
              transition: "transform 1s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              fontFamily: "'Reenie Beanie', cursive",
              fontSize: "10vh",
              flexDirection: "column",
              gap: "2vh",
              lineHeight: 0.8,
              letterSpacing: "0.07em",
            }}
          >
            <div>1672063800</div>
            <div>46°05'21.7"N</div>
            <div>18°10'46.0"E</div>
          </div>
        </>
      )}
    </div>
  );
};

export default StartRoom;
