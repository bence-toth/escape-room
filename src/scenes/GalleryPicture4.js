import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Giza from "../assets/04-Giza.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture4 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-4");
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
        src={Giza}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "17vh",
          bottom: "1vh",
          fontSize: "1.15vh",
          padding: "0.5vh 1.25vh",
          textAlign: "right",
          outline: "0.5vh solid #e2ad0e",
        }}
      >
        Hierarchical structures are always about
        <br />
        the <em>one</em> on the top of the pyramid.
        <br />
        <em>Giza, Egypt</em>
      </p>
    </div>
  );
};

export default GalleryPicture4;
