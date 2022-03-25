import { useEffect, useState, useContext } from "react";

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
import { LocationChangeContext } from "../App";

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
  const navigate = useContext(LocationChangeContext);

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
      }}
    >
      <Room
        styles={{
          floorColor: gameState.planetRoom.arePlanetsMoving
            ? "hsla(235, 29%, 26%, 0.5)"
            : "hsl(195, 19%, 36%)",
          wallColor: gameState.planetRoom.arePlanetsMoving
            ? "hsla(235, 29%, 26%, 0.25)"
            : "hsl(195, 19%, 46%)",
        }}
      />
      <WallLeft
        styles={{
          wallColor: gameState.planetRoom.arePlanetsMoving
            ? "hsla(235, 29%, 28%, 0.5)"
            : "hsl(195, 19%, 42%)",
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(234, 41%, 15%)",
          wallColor: gameState.planetRoom.arePlanetsMoving
            ? "hsla(235, 29%, 28%, 0.5)"
            : "hsl(195, 19%, 42%)",
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
      <div
        className="orbitWrapper"
        data-visible={gameState.planetRoom.arePlanetsMoving}
      >
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
              }}
            >
              <div className="flash">
                <div
                  className="surface"
                  style={{
                    backgroundImage: `url(${planetTextures[index]})`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanetRoom;
