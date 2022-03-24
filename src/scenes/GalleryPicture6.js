import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Oasis from "../assets/06-Oasis.jpg";

const GalleryPicture6 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-6");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(23, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-2");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Oasis}
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
        I am an oasis. Will you rest with me?
        <br />
        <em>Siwa, Egypt</em>
      </p>
    </div>
  );
};

export default GalleryPicture6;
