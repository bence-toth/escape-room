import "./Portal.css";
import EventHorizon from "../assets/EventHorizon.jpg";

const Portal = ({ isActive }) => (
  <div className="portal">
    <div
      className="eventHorizon"
      style={{ backgroundImage: `url("${EventHorizon}")` }}
    ></div>
    <div className="shadow"></div>
  </div>
);

export default Portal;
