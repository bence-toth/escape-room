import "./Clouds.css";
import CloudsPattern from "../assets/Clouds.png";

const Clouds = () => (
  <div
    className="clouds"
    style={{
      backgroundImage: `url(${CloudsPattern})`,
    }}
  ></div>
);

export default Clouds;
