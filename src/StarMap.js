import { useNavigate } from "react-router-dom";

import PictureBig from "./Picture-Big";

const StarMap = () => {
  const navigate = useNavigate();

  return (
    <div className="scene">
      <div className="wallFull"></div>
      <PictureBig
        onLeave={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default StarMap;
