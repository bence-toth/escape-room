import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Picture from "../objects/Picture";

import EgerVolgy from "../assets/04-Egervolgy.jpg";
import Pyramids from "../assets/05-Pyramids.jpg";
import Oasis from "../assets/06-Oasis.jpg";

import { LocationChangeContext } from "../App";

const Gallery2 = () => {
  const navigate = useContext(LocationChangeContext);

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
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-4");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={EgerVolgy}
        position={22.5}
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
        src={Pyramids}
        withLabel
      />
      <Picture
        onObserve={() => {
          navigate("/gallery-picture-6");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Oasis}
        position={-22.5}
        withLabel
      />
      <Lamp isOn styles={{ color: "hsl(23, 10%, 26%)" }} position="0" />
    </div>
  );
};

export default Gallery2;
