import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import MountainOfTheDead from "../assets/07-MountainOfTheDead.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture7 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-7");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(23, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-3");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={MountainOfTheDead}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "13.5vh",
          bottom: "1.3vh",
          height: "5vh",
          fontSize: "1.15vh",
          padding: "0.75vh 1.25vh",
          textAlign: "right",
        }}
      >
        I am a mass tomb. Will you desecrate me?
        <br />
        <em>Siwa, Egypt</em>
      </p>
    </div>
  );
};

export default GalleryPicture7;
