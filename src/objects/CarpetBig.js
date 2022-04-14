const CarpetBig = ({ position, styles }) => {
  return (
    <svg
      className="gameObject"
      viewBox="0 0 211.66667 158.75"
      style={{
        transform: `translateX(${position}%)`,
        transition: "transform 0.5s",
      }}
    >
      <path
        d="m 30.515282,137.31187 150.636108,-2.6e-4 17.28611,18.52074 H 13.229169 Z"
        style={{
          strokeWidth: "1.32291667",
          fill: styles.color,
          stroke: styles.borderColor,
          pointerEvents: "auto",
        }}
      />
    </svg>
  );
};

export default CarpetBig;
