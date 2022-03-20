const Picture = ({ onObserve, styles, src, position = 0 }) => (
  <svg
    className="gameObject"
    viewBox="0 0 211.66667 158.75"
    style={{
      transform: `translateX(${position}%)`,
    }}
  >
    <path
      style={{ fill: styles.hangerColor }}
      d="m 111.09564,73.934735 -5.26231,-3.061735 -5.2624,3.061735 -0.54322,-0.316051 5.53396,-3.219733 c 0.072,-0.0419 0.16978,-0.06542 0.27166,-0.06542 0.10188,0 0.19954,0.02352 0.27166,0.06542 l 5.53396,3.219733 z"
    />
    <rect
      style={{ fill: styles.frameColor, pointerEvents: "auto" }}
      onClick={onObserve}
      width="39.6875"
      height="28.694494"
      x="85.989578"
      y="72.779808"
    />
    <image
      width="37.014904"
      height="26.188044"
      xlinkHref={src}
      x="87.325874"
      y="74.033035"
    />
  </svg>
);

export default Picture;
