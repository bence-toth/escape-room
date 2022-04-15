import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Kotor from "../assets/03-Kotor.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture3 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-3");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(100, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-1");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Kotor}
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
        I am a fort. Will you occupy me?
        <br />
        <em>Kotor, Montenegro</em>
      </p>
    </div>
  );
};

export default GalleryPicture3;
