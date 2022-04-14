import "./ColumnFragment.css";

const ColumnFragment = ({
  styles = {},
  header = "",
  footer = "",
  letters = "",
  onPickUp = () => {},
  ignorePointerEvents = false,
}) => {
  return (
    <div className="columnFragment gameObject">
      <div className="fragment">
        <div
          className="fragmentTransform"
          style={{
            pointerEvents: ignorePointerEvents ? "none" : "auto",
            ...styles,
          }}
          onClick={onPickUp}
        >
          <header>{header}</header>
          <div className="letters">
            {letters.split("").map((letter, letterIndex) => (
              <div key={letterIndex}>
                {letter === " " ? <>&nbsp;</> : letter}
              </div>
            ))}
          </div>
          <footer>{footer}</footer>
        </div>
      </div>
    </div>
  );
};

export default ColumnFragment;
