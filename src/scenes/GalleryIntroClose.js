import { useEffect, useContext } from "react";

import Wall from "../objects/Wall";
import GalleryIntro from "../objects/GalleryIntro";

import { LocationChangeContext } from "../App";

const GalleryPicture1 = () => {
  const navigate = useContext(LocationChangeContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/gallery-intro");
  }, []);

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(100, 19%, 46%)" }} />
      <GalleryIntro
        onClick={() => {
          navigate("/gallery-1");
        }}
      />
    </div>
  );
};

export default GalleryPicture1;
