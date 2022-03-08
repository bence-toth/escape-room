import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import starMap from "../assets/StarMap.png";

const StarMap = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("game-location", "/star-map");
  });

  return (
    <div className="scene">
      <Wall styles={{ color: "hsl(23, 19%, 46%)" }} />
      <PictureBig
        onLeave={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "hsl(23, 55%, 43%)",
          hangerColor: "hsl(23, 10%, 26%)",
        }}
        src={starMap}
      />
    </div>
  );
};

export default StarMap;
