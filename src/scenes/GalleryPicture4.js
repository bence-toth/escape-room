import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import EgerVolgy from "../assets/04-Egervolgy.jpg";

const GalleryPicture4 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-4");
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
        src={EgerVolgy}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "13.5vh",
          bottom: "0.3vh",
          fontSize: "1.15vh",
          padding: "0.5vh 1.25vh",
          textAlign: "right",
        }}
      >
        I am a flower. I will show my true colors.
        <br />
        Will you shed all the light on me?
        <br />
        <em>Égervölgy, Hungary</em>
      </p>
    </div>
  );
};

export default GalleryPicture4;
