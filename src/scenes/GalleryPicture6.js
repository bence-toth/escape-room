import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Gdansk from "../assets/06-Gdansk.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture6 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-6");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(150, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-3");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Gdansk}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "17vh",
          bottom: "3vh",
          height: "5vh",
          fontSize: "1.15vh",
          padding: "0.75vh 1.25vh",
          textAlign: "right",
        }}
      >
        Amber mill. Remember.
        <br />
        <em>Gdansk, Poland</em>
      </p>
    </div>
  );
};

export default GalleryPicture6;
