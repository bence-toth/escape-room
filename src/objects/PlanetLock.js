import { useEffect, useState, useCallback } from "react";

import SunTexture from "../assets/SunTexture.jpg";
import PlanetTextureRed from "../assets/PlanetTexture-Red.jpg";
import PlanetTextureBlue from "../assets/PlanetTexture-Blue.jpg";
import PlanetTextureCyan from "../assets/PlanetTexture-Cyan.jpg";
import PlanetTextureYellow from "../assets/PlanetTexture-Yellow.jpg";
import GemTextureGray from "../assets/GemTexture-Gray.jpg";
import GemTextureOrange from "../assets/GemTexture-Orange.jpg";
import GemTexturePurple from "../assets/GemTexture-Purple.jpg";
import GemTextureRainbow from "../assets/GemTexture-Rainbow.jpg";

import "./PlanetLock.css";

const planetTextures = [
  GemTextureGray,
  PlanetTextureBlue,
  PlanetTextureCyan,
  GemTextureOrange,
  GemTexturePurple,
  PlanetTextureYellow,
  GemTextureRainbow,
  PlanetTextureRed,
];

const RingContent = () => (
  <>
    {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
      <div
        key={index}
        className={`gem gem${index}`}
        style={{ backgroundImage: `url(${planetTextures[index - 1]})` }}
      ></div>
    ))}
  </>
);

const PlanetLock = ({
  code,
  onChangeCode = () => {},
  isSmall,
  onView = () => {},
  isPuzzleSolved,
}) => {
  const codes = code.split("");
  const [ring1, setRing1] = useState(+codes[0]);
  const [ring2, setRing2] = useState(+codes[1]);
  const [ring3, setRing3] = useState(+codes[2]);
  const [ring4, setRing4] = useState(+codes[3]);

  useEffect(() => {
    onChangeCode([ring1 % 8, ring2 % 8, ring3 % 8, ring4 % 8].join(""));
  }, [onChangeCode, ring1, ring2, ring3, ring4]);

  return (
    <div className={`planetLock ${isSmall ? "small" : ""}`} onClick={onView}>
      <div
        className="ring ring1"
        style={{ transform: `rotate(${ring1 * 45}deg)` }}
        onClick={() => {
          if (isSmall || isPuzzleSolved) {
            return;
          }
          setRing4(ring4 + 4);
          setRing3(ring3 + 3);
          setRing2(ring2 + 2);
          setRing1(ring1 + 1);
        }}
      >
        <RingContent />
      </div>
      <div
        className="ring ring2"
        style={{ transform: `rotate(${ring2 * 45}deg)` }}
        onClick={() => {
          if (isSmall || isPuzzleSolved) {
            return;
          }
          setRing4(ring4 + 3);
          setRing3(ring3 + 2);
          setRing2(ring2 + 1);
        }}
      >
        <RingContent />
      </div>
      <div
        className="ring ring3"
        style={{ transform: `rotate(${ring3 * 45}deg)` }}
        onClick={() => {
          if (isSmall || isPuzzleSolved) {
            return;
          }
          setRing4(ring4 + 2);
          setRing3(ring3 + 1);
        }}
      >
        <RingContent />
      </div>
      <div
        className="ring ring4"
        style={{ transform: `rotate(${ring4 * 45}deg)` }}
        onClick={() => {
          if (isSmall || isPuzzleSolved) {
            return;
          }
          setRing4(ring4 + 1);
        }}
      >
        <RingContent />
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
