import { useState, useEffect, useContext, useCallback } from "react";

import Wall from "../objects/Wall";
import TimeMachineScreen from "../objects/TimeMachineScreen";
import Map from "../objects/Map";

import { GameStateContext } from "../App";
import { MessageContext } from "../App";
import { LocationChangeContext } from "../App";

import TigressLogo from "../assets/Tigress.png";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const PortalRoomScreen = () => {
  const navigate = useContext(LocationChangeContext);

  const [pin, setPin] = useState("");

  const [year, setYear] = useState("2021");
  const [month, setMonth] = useState("Jan");

  const rotateYear = useCallback(() => {
    if (year === "2021") {
      setYear("2022");
    } else {
      setYear("2021");
    }
  }, [year]);

  const rotateMonth = useCallback(() => {
    if (month === "Dec") {
      setMonth("Jan");
    } else {
      setMonth(months[months.indexOf(month) + 1]);
    }
  }, [month]);

  const [location, setLocation] = useState("denmark");

  useEffect(() => {
    localStorage.setItem("game-location", "/portal-room-screen");
  }, []);

  const { gameState, updateGameState } = useContext(GameStateContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    let keyUpListener = (event) => {
      if (!gameState.portalRoom.isPinEntered) {
        if ("0123456789".split("").includes(event.key)) {
          setPin((pin) => (pin.length < 6 ? `${pin}${event.key}` : event.key));
        }
      }
    };

    window.addEventListener("keyup", keyUpListener);

    return () => {
      window.removeEventListener("keyup", keyUpListener);
    };
  }, [gameState.portalRoom.isPinEntered, pin]);

  useEffect(() => {
    if (!gameState.portalRoom.isPinEntered) {
      if (pin === "590695") {
        updateGameState("portalRoom", "isPinEntered", true);
      } else if (pin.length === 6) {
        setPin("");
      }
    }
  }, [gameState.portalRoom.isPinEntered, pin, updateGameState]);

  const openPortal = () => {
    // June 2021 - Sweden
    if (month === "Jun" && year === "2021" && location === "sweden") {
      updateGameState("portalRoom", "destination", "sweden");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // July 2021 - Hungary
    else if (month === "Jul" && year === "2021" && location === "hungary") {
      updateGameState("portalRoom", "destination", "hungary");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // October 2021 - Montenegro / North Macedonia / Serbia
    else if (month === "Oct" && year === "2021" && location === "montenegro") {
      updateGameState("portalRoom", "destination", "montenegro");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // January 2022 - Egypt
    else if (month === "Jan" && year === "2022" && location === "egypt") {
      updateGameState("portalRoom", "destination", "egypt");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // April/May 2022 - Poland
    else if (
      (month === "Apr" || month === "May") &&
      year === "2022" &&
      location === "poland"
    ) {
      updateGameState("portalRoom", "destination", "poland");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // August 2022 - Bosnia-Herzegovina / Croatia
    else if (
      month === "Aug" &&
      year === "2022" &&
      location === "bosnia-herzegovina"
    ) {
      updateGameState("portalRoom", "destination", "bosnia-herzegovina");
      updateMessage("The portal opens");
      navigate("/portal-room");
    }
    // October 2022 - Turkey
    else if (month === "Oct" && year === "2022" && location === "turkey") {
      updateGameState("portalRoom", "destination", "turkey");
      updateMessage("The portal opens");
      navigate("/portal-room");
    } else {
      updateGameState("portalRoom", "destination", "");
    }
  };

  return (
    <div className="scene">
      <Wall
        styles={{ color: "hsl(188, 49%, 42%)" }}
        onClick={() => {
          navigate("/portal-room");
        }}
      />
      <TimeMachineScreen />
      {gameState.portalRoom.areScrewsInPlace && (
        <div
          style={{
            position: "absolute",
            top: "19.3%",
            left: "20.6%",
            width: "58.7%",
            height: "55.2%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "2vh",
            fontFamily: "'Source Code Pro', monospace",
            color: "white",
            fontSize: "2.5vh",
            borderRadius: "5vh",
            overflow: "hidden",
          }}
        >
          {!gameState.portalRoom.isPinEntered && (
            <>
              <img
                src={TigressLogo}
                alt="Tigress"
                style={{ width: "50%", marginBottom: "10vh" }}
              />
              <p>Enter PIN</p>
              <p>{pin.padEnd(6, "_").split("").join(" ")}</p>
            </>
          )}
          {gameState.portalRoom.isPinEntered && (
            <>
              <Map location={location} onSetLocation={setLocation} />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "40%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <button
                  style={{
                    padding: "1vh",
                    fontSize: "3vh",
                    background: "transparent",
                    border: 0,
                    color: "white",
                    fontFamily: "inherit",
                  }}
                  onClick={rotateMonth}
                >
                  {month}
                </button>
                <button
                  style={{
                    padding: "1vh",
                    fontSize: "3vh",
                    background: "transparent",
                    border: 0,
                    color: "white",
                    fontFamily: "inherit",
                  }}
                  onClick={rotateYear}
                >
                  {year}
                </button>
              </div>
              <button
                style={{
                  position: "absolute",
                  bottom: "2vh",
                  padding: "0.5vh 1vh",
                  fontSize: "2vh",
                  background: "transparent",
                  border: "1px solid white",
                  color: "white",
                  fontFamily: "inherit",
                }}
                onClick={openPortal}
              >
                Open portal
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default PortalRoomScreen;
