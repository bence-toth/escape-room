import "./Portal.css";
import EventHorizon from "../assets/EventHorizon.jpg";

const Portal = ({
  isActive,
  onWalkThrough = () => {},
  position = 0,
  transform = "scaleX(1)",
  withBorder,
}) => (
  <div
    className="portal"
    data-with-border={withBorder}
    data-is-active={isActive}
    onClick={onWalkThrough}
    style={{
      left: `${50 + position}%`,
      transform: `translateX(-50%) ${transform}`,
    }}
  >
    <div
      className="eventHorizon"
      style={{ backgroundImage: `url("${EventHorizon}")` }}
    ></div>
    <div className="shadow"></div>
  </div>
);

export default Portal;
