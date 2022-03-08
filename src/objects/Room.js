import "./Room.css";

const Room = ({ styles }) => (
  <>
    <div
      className="ceiling"
      style={{ backgroundColor: styles.floorColor }}
    ></div>
    <div className="wall" style={{ backgroundColor: styles.wallColor }}></div>
    <div className="floor" style={{ backgroundColor: styles.floorColor }}></div>
  </>
);

export default Room;
