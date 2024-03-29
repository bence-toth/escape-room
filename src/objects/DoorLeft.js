const DoorLeft = ({
  isOpen,
  isBack,
  onOpen,
  onWalkThrough,
  position,
  styles,
}) => {
  if (isOpen) {
    return (
      <svg
        viewBox="0 0 211.66667 158.75"
        className="gameObject"
        style={{ transform: `translateX(${position}%)` }}
      >
        <rect
          style={{ fill: styles.frameColor }}
          width="45.580338"
          height="72.928535"
          x="-128.6235"
          y="62.008957"
          transform="scale(-1,1)"
        />
        <rect
          style={{ fill: "#000000", pointerEvents: "auto" }}
          onClick={onWalkThrough}
          width="41.022305"
          height="70.649529"
          x="-126.34448"
          y="64.287971"
          transform="scale(-1,1)"
        />
        {!isBack && (
          <>
            <rect
              style={{ fill: styles.doorColor }}
              width="41.022305"
              height="70.649529"
              x="-85.319328"
              y="64.287971"
              transform="scale(-1,1)"
            />
            <g transform="translate(-41.025156)">
              <rect
                style={{ fill: styles.frameColor }}
                width="4.9428277"
                height="8.3729486"
                x="-90.265007"
                y="95.759666"
                transform="scale(-1,1)"
              />
              <ellipse
                style={{ fill: "#000000" }}
                cx="-87.793594"
                cy="98.610489"
                rx="1.1900985"
                ry="1.1320449"
                transform="scale(-1,1)"
              />
              <ellipse
                style={{ fill: "#000000" }}
                cx="-87.793594"
                cy="101.1068"
                rx="0.46442866"
                ry="0.43540189"
                transform="scale(-1,1)"
              />
              <ellipse
                style={{ fill: "#1c241c" }}
                cx="-87.793594"
                cy="98.552437"
                rx="1.0594779"
                ry="1.0739914"
                transform="scale(-1,1)"
              />
              <rect
                style={{ fill: "#000000" }}
                width="0.43540189"
                height="0.98691094"
                x="-88.011292"
                y="101.36143"
                transform="scale(-1,1)"
              />
            </g>
          </>
        )}
      </svg>
    );
  }
  return (
    <svg
      viewBox="0 0 211.66667 158.75"
      className="gameObject"
      style={{ transform: `translateX(${position}%)` }}
    >
      <rect
        style={{ fill: styles.frameColor }}
        width="45.580338"
        height="72.928535"
        x="-128.6235"
        y="62.008957"
        transform="scale(-1,1)"
      />
      <rect
        style={{ fill: styles.doorColor }}
        width="41.022305"
        height="70.649529"
        x="-126.34448"
        y="64.287971"
        transform="scale(-1,1)"
      />
      <rect
        style={{ fill: styles.frameColor, pointerEvents: "auto" }}
        onClick={onOpen}
        width="4.9428277"
        height="8.3729486"
        x="-126.34448"
        y="95.759666"
        transform="scale(-1,1)"
      />
      <ellipse
        style={{ fill: "#000000" }}
        cx="-123.87307"
        cy="98.610489"
        rx="1.1900985"
        ry="1.1320449"
        transform="scale(-1,1)"
      />
      <ellipse
        style={{ fill: "#000000" }}
        cx="-123.87307"
        cy="101.1068"
        rx="0.46442866"
        ry="0.43540189"
        transform="scale(-1,1)"
      />
      <ellipse
        style={{ fill: "#1c241c" }}
        cx="-123.87307"
        cy="98.552437"
        rx="1.0594779"
        ry="1.0739914"
        transform="scale(-1,1)"
      />
      <rect
        style={{ fill: "#000000" }}
        width="0.43540189"
        height="0.98691094"
        x="-124.09077"
        y="101.36143"
        transform="scale(-1,1)"
      />
    </svg>
  );
};

export default DoorLeft;
