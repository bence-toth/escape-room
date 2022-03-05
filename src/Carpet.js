const Carpet = ({ onMove, position }) => {
  return (
    <svg
      className="gameObject"
      viewBox="0 0 211.66667 158.75"
      style={{ transform: `translateX(${position}%)` }}
    >
      <g style={{ pointerEvents: "none" }}>
        <path
          style={{
            strokeWidth: "1.32291667",
            fill: "#aa0000",
            stroke: "#f9f200",
            pointerEvents: "auto",
          }}
          onClick={onMove}
          d="m 63.472445,138.90625 h 84.721775 l 18.15467,15.875 H 45.317779 Z"
        />
      </g>
    </svg>
  );
};

export default Carpet;
