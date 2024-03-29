const Screwdriver = ({ onPickUp, position }) => (
  <svg
    className="gameObject"
    viewBox="0 0 211.66667 158.75"
    style={{
      transform: `translateX(${position}%)`,
    }}
  >
    <g transform="matrix(0,0.04134115,-0.04134115,0,115.42448,137.1144)">
      <path
        style={{ fill: "#afbbd0" }}
        d="M 240,418.192 V 184 h -16 v 234.192 c -5.656,3.379 -8.901,10.206 -7.154,17.192 L 224,464 h 16 l 7.154,-28.616 c 1.747,-6.987 -1.498,-13.813 -7.154,-17.192 z"
      />

      <path
        style={{ fill: "#8291aa" }}
        d="m 235.508,200 h -7.015 c -7.342,0 -13.742,-4.997 -15.522,-12.119 L 208,168 h 48 l -4.97,19.881 C 249.249,195.003 242.849,200 235.508,200 Z"
      />

      <path
        style={{ fill: "#ff5a5a" }}
        d="m 216,0 h 32 c 8.837,0 16,7.163 16,16 v 144 c 0,8.837 -7.163,16 -16,16 h -32 c -8.837,0 -16,-7.163 -16,-16 V 16 c 0,-8.837 7.163,-16 16,-16 z"
      />

      <path
        style={{ fill: "#fa4646" }}
        d="M 224,160 V 16 c 0,-8.837 7.164,-16 16,-16 h -24 c -8.836,0 -16,7.163 -16,16 v 144 c 0,8.836 7.164,16 16,16 h 24 c -8.836,0 -16,-7.164 -16,-16 z"
      />

      <path
        style={{ fill: "#d23c3c" }}
        d="m 232,160 c -4.418,0 -8,-3.578 -8,-8 V 24 c 0,-4.422 3.582,-8 8,-8 4.418,0 8,3.578 8,8 v 128 c 0,4.422 -3.582,8 -8,8 z"
      />

      <path
        style={{ fill: "#fa4646" }}
        d="m 256,160 c -4.418,0 -8,-3.578 -8,-8 V 24 c 0,-4.422 3.582,-8 8,-8 4.418,0 8,3.578 8,8 v 128 c 0,4.422 -3.582,8 -8,8 z"
      />

      <path
        style={{ fill: "#d23c3c" }}
        d="m 208,160 c -4.418,0 -8,-3.578 -8,-8 V 24 c 0,-4.422 3.582,-8 8,-8 4.418,0 8,3.578 8,8 v 128 c 0,4.422 -3.582,8 -8,8 z"
      />
    </g>
    <rect
      style={{ opacity: 0, pointerEvents: "auto" }}
      onClick={onPickUp}
      width="22.163916"
      height="7.0048509"
      x="94.751373"
      y="143.20312"
    />
  </svg>
);

export default Screwdriver;
