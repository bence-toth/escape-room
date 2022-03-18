import "./ColorLock.css";

const rotateColorOrder = ["gray", "blue", "green", "yellow", "red"];

const nextColor = (color) => {
  return (
    rotateColorOrder[rotateColorOrder.indexOf(color) + 1] ?? rotateColorOrder[1]
  );
};

const ColorLock = ({ colors, updateColors }) => {
  const updateColor = (index) => {
    updateColors(
      colors.map((color, colorIndex) => {
        if (colorIndex === index) {
          return nextColor(color);
        }
        return color;
      })
    );
  };

  return (
    <div className="colorLock">
      <button
        className={colors[0]}
        onClick={() => {
          updateColor(0);
        }}
      >
        <div></div>
      </button>
      <button
        className={colors[1]}
        onClick={() => {
          updateColor(1);
        }}
      >
        <div></div>
      </button>
      <button
        className={colors[2]}
        onClick={() => {
          updateColor(2);
        }}
      >
        <div></div>
      </button>
      <button
        className={colors[3]}
        onClick={() => {
          updateColor(3);
        }}
      >
        <div></div>
      </button>
      <button
        className={colors[4]}
        onClick={() => {
          updateColor(4);
        }}
      >
        <div></div>
      </button>
    </div>
  );
};

export default ColorLock;
