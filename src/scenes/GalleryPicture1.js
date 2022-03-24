import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Kullaberg from "../assets/01-Kullaberg.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture1 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-1");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(23, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-1");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Kullaberg}
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
        I am a mountain. Will you climb me?
        <br />
        <em>Kullaberg, Sweden</em>
      </p>
    </div>
  );
};

export default GalleryPicture1;
