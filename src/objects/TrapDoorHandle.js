const TrapDoorHandle = ({ onPickUp, styles }) => {
  return (
    <svg className="gameObject" viewBox="0 0 211.66667 158.75">
      <rect
        style={{ fill: "transparent", pointerEvents: "auto" }}
        onClick={onPickUp}
        width="5.5205679"
        height="2.998595"
        x="106.84319"
        y="135.7225"
      />
      <ellipse
        style={{
          fill: "none",
          stroke: styles.handleColor,
          strokeWidth: 0.5,
          strokeMiterlimit: 4,
        }}
        cx="130.83916"
        cy="117.10679"
        rx="2.4175885"
        ry="1.0022405"
        transform="rotate(9.5401754)"
      />
    </svg>
  );
};

export default TrapDoorHandle;
