const WallRight = ({
  withDoor,
  isBack,
  isDoorOpen,
  onOpen = () => {},
  onWalkThrough,
  styles,
}) => (
  <svg className="gameObject" viewBox="0 0 211.66667 158.75">
    <path
      style={{ fill: styles.wallColor, transition: "fill 0.5s" }}
      d="M 188.72272,134.94364 V 15.875822 L 211.66667,0.24424343 V 158.75 Z"
    />
    {withDoor && (
      <>
        <path
          style={{ fill: styles.frameColor }}
          d="M 191.72803,138.06436 V 61.854818 l 15.875,-2.320673 0,95.001925 z"
        />
        <path
          style={{
            fill: isDoorOpen ? "#000000" : styles.doorColor,
            pointerEvents: "auto",
          }}
          onClick={isDoorOpen ? onWalkThrough : onOpen}
          d="m 193.7124,140.12766 0,-76.405613 11.90625,-1.608213 v 90.367606 z"
        />
        {isDoorOpen && !isBack && (
          <path
            style={{ fill: styles.doorColor }}
            d="m 153.33922,63.547972 40.37318,0.174075 v 76.407643 l -40.37318,-2.78518 z"
          />
        )}
      </>
    )}
  </svg>
);

export default WallRight;
