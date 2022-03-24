import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Room from "../objects/Room";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Lever from "../objects/Lever";

import "./PlanetRoom.css";
import Stars from "../assets/Stars.jpg";
import SunTexture from "../assets/SunTexture.jpg";
import PlanetTextureRed from "../assets/PlanetTexture-Red.jpg";
import PlanetTextureBlue from "../assets/PlanetTexture-Blue.jpg";
import PlanetTextureCyan from "../assets/PlanetTexture-Cyan.jpg";
import PlanetTextureYellow from "../assets/PlanetTexture-Yellow.jpg";

import { GameStateContext } from "../App";

const ellipseAttrsToPath = (rx, cx, ry, cy) =>
  `M${cx - rx},${cy}a${rx},${ry} 0 1,0 ${rx * 2},0a${rx},${ry} 0 1,0 -${
    rx * 2
  },0`;

const planetTextures = [
  PlanetTextureRed,
  PlanetTextureBlue,
  PlanetTextureCyan,
  PlanetTextureYellow,
];

const PlanetRoom = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/planet-room");
  }, []);

  const [canvasWidth, setCanvasWidth] = useState(0);
  const [canvasHeight, setCanvasHeight] = useState(0);

  useEffect(() => {
    setCanvasWidth(document.querySelector(".gameCanvas")?.offsetWidth);
    setCanvasHeight(document.querySelector(".gameCanvas")?.offsetHeight);
    window.addEventListener("resize", () => {
      setCanvasWidth(document.querySelector(".gameCanvas")?.offsetWidth);
      setCanvasHeight(document.querySelector(".gameCanvas")?.offsetHeight);
    });
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);

  return (
    <div
      className="scene"
      style={{
        backgroundImage: `url(${Stars})`,
        backgroundSize: "cover",
        boxShadow: "0 0 20vh 15vh inset hsla(236, 68%, 10%, 0.8)",
      }}
    >
      <Room
        styles={{
          floorColor: "hsl(235, 79%, 6%)",
          wallColor: "transparent",
        }}
      />
      <WallLeft
        styles={{
          wallColor: "hsl(235, 79%, 8%)",
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(234, 41%, 15%)",
          wallColor: "hsl(235, 79%, 8%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/gallery-4");
        }}
      />
      <Lever
        position="0"
        isTurned={gameState.planetRoom.arePlanetsMoving}
        onTurn={() => {
          updateGameState(
            "planetRoom",
            "arePlanetsMoving",
            !gameState.planetRoom.arePlanetsMoving
          );
        }}
        hasLever
      />
      <div className="orbitWrapper">
        <div
          className="sun"
          style={{ backgroundImage: `url(${SunTexture})` }}
        ></div>
        <div className={gameState.planetRoom.arePlanetsMoving ? "play" : ""}>
          {[0, 1, 2, 3].map((index) => (
            <div
              className="orbit"
              key={index}
              style={{
                offsetPath: `path("${ellipseAttrsToPath(
                  (index + 3) * (canvasWidth / 15),
                  canvasWidth / 2,
                  (index + 3) * (canvasWidth / 50),
                  canvasHeight / 4
                )}")`,
                backgroundImage: `url(${planetTextures[index]})`,
              }}
            >
              <div className="flash"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetRoom;
