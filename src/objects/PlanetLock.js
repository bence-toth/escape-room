import { useState } from "react";

import SunTexture from "../assets/SunTexture.jpg";
import PlanetTextureRed from "../assets/PlanetTexture-Red.jpg";
import PlanetTextureBlue from "../assets/PlanetTexture-Blue.jpg";
import PlanetTextureCyan from "../assets/PlanetTexture-Cyan.jpg";
import PlanetTextureYellow from "../assets/PlanetTexture-Yellow.jpg";

import "./PlanetLock.css";

const planetTextures = [
  PlanetTextureRed,
  PlanetTextureBlue,
  PlanetTextureCyan,
  PlanetTextureYellow,
];

const PlanetLock = ({
  code,
  onChangeCode = () => {},
  isSmall,
  onView = () => {},
}) => {
  const [ring1, setRing1] = useState(0);
  const [ring2, setRing2] = useState(0);
  const [ring3, setRing3] = useState(0);
  const [ring4, setRing4] = useState(0);

  return (
    <div className={`planetLock ${isSmall ? "small" : ""}`} onClick={onView}>
      <div
        className="ring ring1"
        style={{ transform: `rotate(${ring1 * 90}deg)` }}
        onClick={() => {
          setRing4(ring4 + 1);
          setRing3(ring3 + 1);
          setRing2(ring2 + 1);
          setRing1(ring1 + 1);
        }}
      >
        <div
          className="gem gem1"
          style={{ backgroundImage: `url(${planetTextures[0]})` }}
        ></div>
        <div
          className="gem gem2"
          style={{ backgroundImage: `url(${planetTextures[1]})` }}
        ></div>
        <div
          className="gem gem3"
          style={{ backgroundImage: `url(${planetTextures[2]})` }}
        ></div>
        <div
          className="gem gem4"
          style={{ backgroundImage: `url(${planetTextures[3]})` }}
        ></div>
      </div>
      <div
        className="ring ring2"
        style={{ transform: `rotate(${ring2 * 90}deg)` }}
        onClick={() => {
          setRing4(ring4 + 1);
          setRing3(ring3 + 1);
          setRing2(ring2 + 1);
        }}
      >
        <div
          className="gem gem1"
          style={{ backgroundImage: `url(${planetTextures[0]})` }}
        ></div>
        <div
          className="gem gem2"
          style={{ backgroundImage: `url(${planetTextures[1]})` }}
        ></div>
        <div
          className="gem gem3"
          style={{ backgroundImage: `url(${planetTextures[2]})` }}
        ></div>
        <div
          className="gem gem4"
          style={{ backgroundImage: `url(${planetTextures[3]})` }}
        ></div>
      </div>
      <div
        className="ring ring3"
        style={{ transform: `rotate(${ring3 * 90}deg)` }}
        onClick={() => {
          setRing4(ring4 + 1);
          setRing3(ring3 + 1);
        }}
      >
        <div
          className="gem gem1"
          style={{ backgroundImage: `url(${planetTextures[0]})` }}
        ></div>
        <div
          className="gem gem2"
          style={{ backgroundImage: `url(${planetTextures[1]})` }}
        ></div>
        <div
          className="gem gem3"
          style={{ backgroundImage: `url(${planetTextures[2]})` }}
        ></div>
        <div
          className="gem gem4"
          style={{ backgroundImage: `url(${planetTextures[3]})` }}
        ></div>
      </div>
      <div
        className="ring ring4"
        style={{ transform: `rotate(${ring4 * 90}deg)` }}
        onClick={() => {
          setRing4(ring4 + 1);
        }}
      >
        <div
          className="gem gem1"
          style={{ backgroundImage: `url(${planetTextures[0]})` }}
        ></div>
        <div
          className="gem gem2"
          style={{ backgroundImage: `url(${planetTextures[1]})` }}
        ></div>
        <div
          className="gem gem3"
          style={{ backgroundImage: `url(${planetTextures[2]})` }}
        ></div>
        <div
          className="gem gem4"
          style={{ backgroundImage: `url(${planetTextures[3]})` }}
        ></div>
      </div>
      <div className="ring ring5"></div>
      <div
        className="ring ring6"
        style={{
          backgroundImage: `url(${SunTexture})`,
          boxShadow: `0 0 10vh 10vh hsla(35, 100%, 50%, 0.2)`,
        }}
      ></div>
      <div className="rectangle"></div>
    </div>
  );
};

export default PlanetLock;
