const Column = ({ position, fragment, onPlaceFragment = () => {} }) => {
  return (
    <>
      <svg
        className="gameObject"
        viewBox="0 0 211.66667 158.75"
        style={{
          transform: `translateX(${position}%)`,
        }}
      >
        <path
          style={{ fill: "#d0c09a" }}
          d="m 100.27708,123.44621 v 0.37879 c 0,0.43839 0.35536,0.79375 0.79375,0.79375 v 7.14375 c -0.43839,0 -0.79375,0.35536 -0.79375,0.79375 v 0.39687 c -0.438383,0 -0.793748,0.35537 -0.793748,0.79375 v 0.39688 h -0.79375 c -0.438388,0 -0.79375,0.35536 -0.79375,0.79375 v 0.59531 c 0,0.10954 0.08886,0.19844 0.198438,0.19844 h 15.47812 c 0.10953,0 0.19844,-0.0889 0.19844,-0.19844 v -0.59531 c 0,-0.43839 -0.35536,-0.79375 -0.79375,-0.79375 h -0.79375 v -0.39688 c 0,-0.43838 -0.35536,-0.79375 -0.79375,-0.79375 v -0.39687 c 0,-0.43839 -0.35536,-0.79375 -0.79375,-0.79375 v -7.14375 c 0.43839,0 0.79375,-0.35536 0.79375,-0.79375 v -0.37879 z"
        />
        <path
          style={{ fill: "#a69a7d" }}
          d="m 102.65833,125.01562 c -0.43839,0 -0.79375,0.35537 -0.79375,0.79375 v 4.7625 c 0,0.43839 0.35536,0.79375 0.79375,0.79375 0.43839,0 0.79375,-0.35536 0.79375,-0.79375 v -4.7625 c 0,-0.43838 -0.35536,-0.79375 -0.79375,-0.79375 z m 3.175,0 c -0.43839,0 -0.79375,0.35537 -0.79375,0.79375 v 4.7625 c 0,0.43839 0.35536,0.79375 0.79375,0.79375 0.43839,0 0.79375,-0.35536 0.79375,-0.79375 v -4.7625 c 0,-0.43838 -0.35536,-0.79375 -0.79375,-0.79375 z m 3.175,0 c -0.43839,0 -0.79375,0.35537 -0.79375,0.79375 v 4.7625 c 0,0.43839 0.35536,0.79375 0.79375,0.79375 0.43839,0 0.79375,-0.35536 0.79375,-0.79375 v -4.7625 c 0,-0.43838 -0.35536,-0.79375 -0.79375,-0.79375 z m -8.73125,7.54063 v 0.39687 h 11.1125 v -0.39687 z m -0.793748,1.19062 v 0.39688 h 12.699998 v -0.39688 z m -1.5875,1.5875 v 0.19844 c 0,0.10958 0.08886,0.19844 0.198438,0.19844 h 15.47812 c 0.10957,0 0.19844,-0.0889 0.19844,-0.19844 v -0.19844 z"
        />
        <path
          style={{ fill: "#d0c09a" }}
          d="m 101.07083,15.074532 c -0.21919,0 -0.39687,0.177681 -0.39687,0.396875 l 0.26458,0.79375 h -0.66146 c -1.31512,0 -2.381248,1.066125 -2.381248,2.38125 0,1.315125 1.066128,2.38125 2.381248,2.38125 v 0.396875 c 0,0.438388 0.35536,0.79375 0.79375,0.79375 v 0.63717 h 9.525 v -0.63717 c 0.43839,0 0.79375,-0.355362 0.79375,-0.79375 v -0.396875 c 1.31513,0 2.38125,-1.066125 2.38125,-2.38125 0,-1.315125 -1.06612,-2.38125 -2.38125,-2.38125 h -0.66146 l 0.26459,-0.79375 c 0,-0.219194 -0.17768,-0.396875 -0.39688,-0.396875 z"
        />
        <path
          style={{ fill: "#a69a7d" }}
          d="m 100.40886,16.265157 10e-4,0.0041 c 0.43573,0.02413 0.84009,0.165252 1.18235,0.392741 h 8.48062 c 0.34226,-0.227449 0.74663,-0.368571 1.18236,-0.392741 h 5.3e-4 l 0.001,-0.0041 z m -0.13178,0.79375 c -0.876732,0 -1.587498,0.710763 -1.587498,1.5875 0,0.876737 0.710766,1.5875 1.587498,1.5875 0.87674,0 1.5875,-0.710763 1.5875,-1.5875 0,-0.876737 -0.71076,-1.5875 -1.5875,-1.5875 z m 1.77457,0 c 0.1089,0.121642 0.20505,0.254675 0.28732,0.396875 h 6.98872 c 0.0823,-0.1422 0.17842,-0.275233 0.28732,-0.396875 z m 9.33793,0 c -0.87673,0 -1.5875,0.710763 -1.5875,1.5875 0,0.876737 0.71077,1.5875 1.5875,1.5875 0.87674,0 1.5875,-0.710763 1.5875,-1.5875 0,-0.876737 -0.71076,-1.5875 -1.5875,-1.5875 z m -8.75192,1.895491 c -0.1512,1.169471 -1.14995,2.073259 -2.36058,2.073259 0,0.219194 0.17768,0.396875 0.39688,0.396875 h 10.31875 c 0.21919,0 0.39687,-0.177681 0.39687,-0.396875 -1.21062,0 -2.20937,-0.903788 -2.36058,-2.073259 -0.93877,0.308332 -2.0302,0.485759 -3.19567,0.485759 -1.16546,0 -2.2569,-0.177427 -3.19567,-0.485759 z"
        />
        <path
          style={{ fill: "#7d755f" }}
          d="m 101.07083,18.646428 c 0,0.438388 -0.35536,0.79375 -0.79375,0.79375 -0.438385,0 -0.793747,-0.355362 -0.793747,-0.79375 0,-0.438388 0.355362,-0.79375 0.793747,-0.79375 0.43839,0 0.79375,0.355362 0.79375,0.79375 z m 10.31875,-0.79375 c -0.43839,0 -0.79375,0.355362 -0.79375,0.79375 0,0.438388 0.35536,0.79375 0.79375,0.79375 0.43839,0 0.79375,-0.355362 0.79375,-0.79375 0,-0.438388 -0.35536,-0.79375 -0.79375,-0.79375 z"
        />
        <rect
          style={{ fill: "#beb18e" }}
          width="11.90625"
          height="100.59871"
          x="99.880211"
          y="22.847513"
          ry="0.88166064"
        />
        <rect
          style={{ fill: "#a79d80", pointerEvents: "auto" }}
          width="10.583333"
          height="89.421074"
          x="100.54167"
          y="28.436331"
          ry="5.2916665"
          onClick={onPlaceFragment}
        />
      </svg>
      {fragment && (
        <div
          style={{
            transform: `translateX(${position}%)`,
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          {fragment}
        </div>
      )}
    </>
  );
};

export default Column;
