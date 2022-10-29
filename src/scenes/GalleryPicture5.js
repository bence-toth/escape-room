import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Alexandria from "../assets/05-Alexandria.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture5 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-5");
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
        src={Alexandria}
      />
      <p
        style={{
          position: "absolute",
          backgroundColor: "hsl(0, 0%, 90%)",
          right: "17vh",
          bottom: "1vh",
          fontSize: "1.15vh",
          padding: "0.75vh 1.25vh",
          textAlign: "right",
        }}
      >
        Burning knowledge is a very effective way of
        <br />
        rendering ourselves unable to learn from the past.
        <br />
        <em>Alexandria, Egypt</em>
      </p>
    </div>
  );
};

export default GalleryPicture5;
