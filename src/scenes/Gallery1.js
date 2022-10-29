import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Picture from "../objects/Picture";
import Switch from "../objects/Switch";
import CarpetBig from "../objects/CarpetBig";
import Chair from "../objects/Chair";

import Kullaberg from "../assets/01-Kullaberg.jpg";
import DeerPark from "../assets/02-DeerPark.jpg";
import Kotor from "../assets/03-Kotor.jpg";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";

const Gallery1 = () => {
  // TODO: Add missing paintings / update paintings
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-1");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(100, 19%, 36%)",
          wallColor: "hsl(100, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(100, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-2");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(100, 19%, 40%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/plant-room");
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
          navigate("/gallery-picture-1");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Kullaberg}
        position={22.5}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-2");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={DeerPark}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-3");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Kotor}
        position={-22.5}
        withLabel
      />
      <Chair position={-34} />
      <Switch
        position="35.25"
        isOn={gameState.gallery1.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "gallery1",
            "isSwitchOn",
            !gameState.gallery1.isSwitchOn
          );
        }}
      />
      <Lamp
        isOn={gameState.gallery1.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Gallery1;
