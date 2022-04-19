import "./PendulumClock.css";

const PendulumClock = ({ isWorking, position, onObserve }) => {
  return (
    <div
      className={`pendulumClock ${isWorking ? "working" : ""}`}
      style={{ left: `${position + 50}%` }}
      onClick={onObserve}
    >
      <div className="top" />
      <div className="clockFaceWrapper">
        <div className="clockFace">
          {isWorking ? (
            <>
              <div className="number">II</div>
              <div className="number">XII</div>
              <div className="number">VIII</div>
              <div className="number">I</div>
              <div className="number">X</div>
              <div className="number">IIII</div>
              <div className="number">IX</div>
              <div className="number">VII</div>
              <div className="number">VI</div>
              <div className="number">III</div>
              <div className="number">V</div>
              <div className="number">XI</div>
            </>
          ) : (
            <>
              <div className="number">XII</div>
              <div className="number">I</div>
              <div className="number">II</div>
              <div className="number">III</div>
              <div className="number">IIII</div>
              <div className="number">V</div>
              <div className="number">VI</div>
              <div className="number">VII</div>
              <div className="number">VIII</div>
              <div className="number">IX</div>
              <div className="number">X</div>
              <div className="number">XI</div>
            </>
          )}

          <div className="hourHand" />
          <div className="minuteHand" />
        </div>
      </div>
      <div className="middle">
        <div className="pendulum">
          <div className="string" />
          <div className="head" />
        </div>
      </div>
      <div className="bottom" />
    </div>
  );
};

export default PendulumClock;
