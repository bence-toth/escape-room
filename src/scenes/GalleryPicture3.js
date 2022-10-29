import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Egervolgy from "../assets/03-Egervolgy.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture3 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-3");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(125, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-2");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Egervolgy}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "17vh",
          bottom: "1vh",
          height: "7vh",
          fontSize: "1.15vh",
          padding: "0.75vh 1.25vh",
          textAlign: "right",
          outline: "0.5vh solid #e2ad0e",
        }}
      >
        Snowdrops are white. But any flower will
        <br />
        show its true colors <em>if they get enough light</em>.
        <br />
        <em>Égervölgy, Pécs, Hungary</em>
      </p>
    </div>
  );
};

export default GalleryPicture3;
