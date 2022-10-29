import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import Lumbarda from "../assets/09-Lumbarda.jpg";

import { LocationChangeContext } from "../App";

const GalleryPicture9 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-picture-9");
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
        src={Lumbarda}
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
        We are all islands with hidden treasures.
        <br />
        <em>Lumbarda, Croatia</em>
      </p>
    </div>
  );
};

export default GalleryPicture9;
