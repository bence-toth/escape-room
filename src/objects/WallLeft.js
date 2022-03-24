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
      style={{ fill: styles.wallColor }}
      d="M 22.94395,134.94364 V 15.875822 L 0,0.24424343 V 158.75 Z"
    />
    {withDoor && (
      <>
        <path
          style={{ fill: styles.frameColor }}
          d="M 19.93864,138.06436 V 61.854818 l -15.875,-2.320673 v 95.001925 z"
        />
        <path
          style={{
            fill: isDoorOpen ? "#000000" : styles.doorColor,
            pointerEvents: "auto",
          }}
          onClick={isDoorOpen ? onWalkThrough : onOpen}
          d="M 17.95427,140.12766 V 63.722047 L 6.04802,62.113834 v 90.367606 z"
        />
        {isDoorOpen && !isBack && (
          <path
            style={{ fill: styles.doorColor }}
            d="m 58.32745,63.547972 -40.37318,0.174075 v 76.407643 l 40.37318,-2.78518 z"
          />
        )}
      </>
    )}
  </svg>
);

export default WallRight;
