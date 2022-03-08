const Carpet = ({ onMove, position, styles }) => {
  return (
    <svg
      className="gameObject"
      viewBox="0 0 211.66667 158.75"
      style={{ transform: `translateX(${position}%)` }}
    >
      <path
        style={{
          strokeWidth: "1.32291667",
          fill: styles.color,
          stroke: styles.borderColor,
          pointerEvents: "auto",
        }}
        onClick={onMove}
        d="m 63.472445,138.90625 h 84.721775 l 18.15467,15.875 H 45.317779 Z"
      />
    </svg>
  );
};

export default Carpet;
