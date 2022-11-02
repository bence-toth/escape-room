const Calendar = ({ position, day = "1", month = "January" }) => (
  <div>
    <svg
      className="gameObject"
      style={{
        transform: `translateX(${position}%)`,
        height: "10%",
        top: "17%",
      }}
      viewBox="0 0 280.028 280.028"
    >
      <path
        style={{ fill: "#E4E7E7" }}
        d="M17.502,0h245.024c9.661,0,17.502,7.832,17.502,17.502v245.024c0,9.661-7.841,17.502-17.502,17.502 H17.502C7.841,280.027,0,272.187,0,262.526V17.502C0,7.832,7.841,0,17.502,0z"
      />
      <path
        style={{ fill: "#E2574C" }}
        d="M262.526,0H17.502C7.841,0,0,7.832,0,17.502v43.754h280.027V17.502 C280.027,7.832,272.187,0,262.526,0z"
      />
      <path
        style={{ fill: "#BF392C" }}
        d="M0,52.505h280.027v17.502H0V52.505z"
      />
      <path
        style={{ fill: "#BF392C" }}
        d="M140.014,17.502c4.839,0,8.751,3.92,8.751,8.751s-3.912,8.751-8.751,8.751s-8.751-3.92-8.751-8.751 S135.174,17.502,140.014,17.502z"
      />
      <path
        style={{ fill: "#C2C5C5" }}
        d="M262.526,262.526H17.502C7.841,262.526,0,254.685,0,245.024v17.502 c0,9.661,7.841,17.502,17.502,17.502h245.024c9.661,0,17.502-7.841,17.502-17.502v-17.502 C280.027,254.685,272.187,262.526,262.526,262.526z"
      />
    </svg>
    <p
      className="gameObject"
      style={{
        textAlign: "center",
        top: "19.8%",
        fontSize: "4vh",
        fontWeight: "bold",
        lineHeight: 1,
        transform: `translateX(${position}%)`,
      }}
    >
      {day}
    </p>
    <p
      className="gameObject"
      style={{
        textAlign: "center",
        top: "24.2%",
        fontSize: "1.3vh",
        fontWeight: "bold",
        lineHeight: 1,
        transform: `translateX(${position}%)`,
      }}
    >
      {month}
    </p>
  </div>
);

export default Calendar;
