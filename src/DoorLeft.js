const DoorLeft = ({ isOpen, isBack, onOpen, onWalkThrough, position }) => {
  if (isOpen) {
    return (
      <svg
        viewBox="0 0 211.66667 158.75"
        className="gameObject"
        style={{ transform: `translateX(${position}%)` }}
      >
        <g style={{ pointerEvents: "none" }}>
          <rect
            style={{ fill: "#002b22" }}
            width="52.916668"
            height="84.666664"
            x="-97.895836"
            y="50.270832"
            transform="scale(-1,1)"
          />
          {!isBack && (
            <>
              <rect
                style={{ fill: "#005544" }}
                width="47.625"
                height="82.020836"
                x="-1.0809326e-07"
                y="52.916664"
              />
              <rect
                style={{ fill: "#002b22" }}
                width="5.7383947"
                height="9.7206068"
                x="-1.0809326e-07"
                y="89.453842"
              />
              <ellipse
                style={{ fill: "#000000" }}
                cx="2.8692017"
                cy="92.763519"
                rx="1.3816494"
                ry="1.3142519"
              />
              <ellipse
                style={{ fill: "#000000" }}
                cx="2.8692017"
                cy="95.661613"
                rx="0.53918022"
                ry="0.50548148"
              />
              <ellipse
                style={{ fill: "#1c241c" }}
                cx="2.8692017"
                cy="92.696121"
                rx="1.2300049"
                ry="1.2468544"
              />
              <rect
                style={{ fill: "#000000" }}
                width="0.50548148"
                height="1.145758"
                x="2.6164551"
                y="95.957237"
              />
            </>
          )}

          <rect
            style={{ fill: "#000000", pointerEvents: "auto" }}
            onClick={onWalkThrough}
            width="47.625"
            height="82.020836"
            x="-95.25"
            y="52.916664"
            transform="scale(-1,1)"
          />
        </g>
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 211.66667 158.75"
      className="gameObject"
      style={{ transform: `translateX(${position}%)` }}
    >
      <g style={{ pointerEvents: "none" }}>
        <rect
          style={{ fill: "#002b22" }}
          width="52.916668"
          height="84.666664"
          x="-97.895836"
          y="50.270832"
          transform="scale(-1,1)"
        />
        <rect
          style={{ fill: "#005544" }}
          width="47.625"
          height="82.020836"
          x="-95.25"
          y="52.916664"
          transform="scale(-1,1)"
        />
        <rect
          style={{ fill: "#002b22", pointerEvents: "auto" }}
          onClick={onOpen}
          width="5.7383947"
          height="9.7206068"
          x="-95.25"
          y="89.453842"
          transform="scale(-1,1)"
        />
        <ellipse
          style={{ fill: "#000000" }}
          cx="-92.380806"
          cy="92.763519"
          rx="1.3816494"
          ry="1.3142519"
          transform="scale(-1,1)"
        />
        <ellipse
          style={{ fill: "#000000" }}
          cx="-92.380806"
          cy="95.661613"
          rx="0.53918022"
          ry="0.50548148"
          transform="scale(-1,1)"
        />
        <ellipse
          style={{ fill: "#1c241c" }}
          cx="-92.380806"
          cy="92.696121"
          rx="1.2300049"
          ry="1.2468544"
          transform="scale(-1,1)"
        />
        <rect
          style={{ fill: "#000000" }}
          width="0.50548148"
          height="1.145758"
          x="-92.633545"
          y="95.957237"
          transform="scale(-1,1)"
        />
      </g>
    </svg>
  );
};

export default DoorLeft;
