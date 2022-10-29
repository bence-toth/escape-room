const PostIt = ({
  isObserved,
  onObserve,
  onLeave,
  children,
  transformIfNotObserved,
  withBigFont = false,
}) => (
  <>
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        opacity: !isObserved ? 0 : 0.75,
        backdropFilter: "blur(10px)",
        background: "black",
        transition: "opacity 2s",
        pointerEvents: !isObserved ? "none" : "auto",
      }}
    ></div>
    <div
      onClick={() => {
        if (!isObserved) {
          onObserve();
        } else {
          onLeave();
        }
      }}
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        background:
          "linear-gradient(145deg, rgba(255,255,204,1) 0%, rgba(226,226,162,1) 100%)",
        height: "60vh",
        width: "60vh",
        padding: "1em",
        boxShadow: "3vh 3vh 6vh rgba(33,33,33,.7)",
        transform: !isObserved
          ? transformIfNotObserved
          : "translate(-50%, -50%)",
        transition: "transform 1s",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "'Reenie Beanie', cursive",
        fontSize: withBigFont ? "10vh" : "6vh",
        flexDirection: "column",
        gap: "2vh",
        lineHeight: 0.8,
        letterSpacing: "0.07em",
      }}
    >
      {children}
    </div>
  </>
);

export default PostIt;
