import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Dijarbakir from "../assets/10-Dijarbakir.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture10 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-10");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(175, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/gallery-4");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={Dijarbakir}
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
        Some structures can prevail for thousands of years.
        <br />
        <em>Amed, Kurdistan</em>
      </p>
    </div>
  );
};

export default GalleryPicture10;
