import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import CarpetBig from "../objects/CarpetBig";

import MountainOfTheDead from "../assets/07-MountainOfTheDead.jpg";
import Alexandria from "../assets/08-Alexandria.jpg";
import Aswan from "../assets/09-Aswan.jpg";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Gallery3 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-3");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(150, 19%, 36%)",
          wallColor: "hsl(150, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(150, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-4");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(150, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-2");
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
          navigate("/gallery-picture-7");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={MountainOfTheDead}
        position={22.5}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-8");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Alexandria}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-9");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Aswan}
        position={-22.5}
        withLabel
      />
      <Switch
        position="35.25"
        isOn={gameState.gallery3.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "gallery3",
            "isSwitchOn",
            !gameState.gallery3.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.gallery3.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Gallery3;
