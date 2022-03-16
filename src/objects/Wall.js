import "./Wall.css";

const Wall = ({ styles, onClick = () => {} }) => (
  <>
    <div
      className="wallFull"
      style={{ backgroundColor: styles.color }}
      onClick={onClick}
    ></div>
  </>
);

export default Wall;
