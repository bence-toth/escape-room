import "./Countdown.css";

const startDate = "2022-11-18 18:00";

const timeLeft = new Date(startDate).getTime() - Date.now();

const hoursLeft = Math.ceil(timeLeft / (1000 * 60 * 60)) % 24;

const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

const Countdown = () => {
  return (
    <div className="countdown">
      This part of the game
      <br />
      starts on 18 November.
      <br />
      <br />
      {daysLeft === 0 && (
        <>
          {hoursLeft} hour{hoursLeft !== 1 ? "s" : ""} left.
        </>
      )}
      {daysLeft > 0 &&
        (hoursLeft === 0 ? (
          <>
            {daysLeft} day{daysLeft !== 1 ? "s" : ""} left.
          </>
        ) : (
          <>
            {daysLeft} day{daysLeft !== 1 ? "s" : ""} and {hoursLeft} hour
            {hoursLeft !== 1 ? "s" : ""} left.
          </>
        ))}
    </div>
  );
};

export default Countdown;

export { startDate };
