import { useEffect, useContext, useCallback } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import LightLock from "../objects/LightLock";
import CarpetBig from "../objects/CarpetBig";

import Blank1 from "../assets/10-Blank.jpg";
import Blank2 from "../assets/11-Blank.jpg";
import Future from "../assets/12-Future.jpg";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { MessageContext } from "../App";

const Gallery4 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-4");
  }, []);

  const onChangeCode = useCallback(
    (code) => {
      if (gameState.gallery4.isPuzzleSolved) {
        return;
      }
      updateGameState("gallery4", "code", code);
      if (code === "1111111111111111") {
        updateMessage("You hear something clicking");
        updateGameState("gallery4", "isPuzzleSolved", true);
      }
    },
    [gameState.gallery4.isPuzzleSolved, updateGameState, updateMessage]
  );

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(175, 19%, 36%)",
          wallColor: "hsl(175, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(175, 19%, 40%)",
        }}
        withDoor
        isDoorOpen={gameState.gallery4.isPuzzleSolved}
        isBack
        onOpen={() => {
          updateMessage("The door seems to be locked");
        }}
        onWalkThrough={() => {
          navigate("/planet-room");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(175, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-3");
        }}
      />
      <CarpetBig
        position={0}
        styles={{
          color: "hsl(341, 90%, 23%)",
          borderColor: "hsl(340, 73%, 36%)",
        }}
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-10");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Blank1}
        position={22.5}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-11");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Blank2}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-12");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Future}
        position={-22.5}
        withLabel
      />
      <Switch
        position="-35.25"
        isOn={gameState.gallery4.isRemoteSwitchOn}
        onToggle={() => {
          updateMessage("The switch does not seem to do anything");
          updateGameState(
            "gallery4",
            "isRemoteSwitchOn",
            !gameState.gallery4.isRemoteSwitchOn
          );
        }}
      />
      <Switch
        position="35.25"
        isOn={gameState.gallery4.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "gallery4",
            "isSwitchOn",
            !gameState.gallery4.isSwitchOn
          );
        }}
      />
      <LightLock
        code={gameState.gallery4.code}
        isPuzzleSolved={gameState.gallery4.isPuzzleSolved}
        onChangeCode={onChangeCode}
        onView={() => {
          navigate("/gallery-4-lock");
        }}
        isSmall
      />
      <Lamp
        isOn={gameState.gallery4.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Gallery4;
