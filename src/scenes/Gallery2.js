import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import CarpetBig from "../objects/CarpetBig";

import Egervolgy from "../assets/03-Egervolgy.jpg";
import Giza from "../assets/04-Giza.jpg";
import Alexandria from "../assets/05-Alexandria.jpg";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Gallery2 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-2");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(125, 19%, 36%)",
          wallColor: "hsl(125, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(125, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-3");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(125, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-1");
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
          navigate("/gallery-picture-3");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Egervolgy}
        position={22.5}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-4");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Giza}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-5");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Alexandria}
        position={-22.5}
        withLabel
      />
      <Switch
        position="35.25"
        isOn={gameState.gallery2.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "gallery2",
            "isSwitchOn",
            !gameState.gallery2.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.gallery2.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Gallery2;
