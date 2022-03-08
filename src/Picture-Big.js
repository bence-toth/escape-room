import sky from "./sky.png";

const PictureBig = ({ onLeave }) => (
  <svg className="gameObject" viewBox="0 0 211.66667 158.75">
    <path
      style={{ fill: "#b3b3b3" }}
      d="M 126.88257,31.498279 105.83334,19.251338 84.783735,31.498279 82.610845,30.234073 104.74669,17.355143 c 0.288,-0.167607 0.67912,-0.261681 1.08665,-0.261681 0.40751,0 0.79815,0.0941 1.08664,0.261681 l 22.13585,12.87893 z"
    />
    <rect
      style={{ fill: "#c87137", pointerEvents: "auto" }}
      onClick={onLeave}
      width="158.75"
      height="114.77797"
      x="26.458334"
      y="26.878569"
    />
    <image
      width="148.0596"
      height="104.75217"
      preserveAspectRatio="none"
      xlinkHref={sky}
      x="31.803511"
      y="31.891478"
    />
  </svg>
);

export default PictureBig;
