import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Alexandria from "../assets/08-Alexandria.jpg";

const GalleryPicture8 = () => {
  const navigate = useNavigate();

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
        src={Alexandria}
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
        I am a library. Will you burn me?
        <br />
        <em>Alexandria, Egypt</em>
      </p>
    </div>
  );
};

export default GalleryPicture8;
