import { useNavigate } from "react-router-dom";

import Wall from "../objects/Wall";
import PictureBig from "../objects/PictureBig";

import sky from "../assets/sky.png";

const StarMap = () => {
  const navigate = useNavigate();

  return (
    <div className="scene">
      <Wall styles={{ color: "ivory" }} />
      <PictureBig
        onLeave={() => {
          navigate("/");
        }}
        styles={{
          frameColor: "yellow",
          hangerColor: "blue",
        }}
        src={sky}
      />
    </div>
  );
};

export default StarMap;
