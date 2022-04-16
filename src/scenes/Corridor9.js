import { useEffect, useContext } from "react";

import Room from "../objects/Room";
import Lamp from "../objects/Lamp";
import WallRight from "../objects/WallRight";
import WallLeft from "../objects/WallLeft";
import Switch from "../objects/Switch";
import ColumnFragment from "../objects/ColumnFragment";
import columnWritings from "../objects/columnWritings";

import { LocationChangeContext } from "../App";
import { GameStateContext } from "../App";
import { InventoryContext } from "../App";
import { MessageContext } from "../App";

const Corridor9 = () => {
  const navigate = useContext(LocationChangeContext);
  const { gameState, updateGameState } = useContext(GameStateContext);
  const inventory = useContext(InventoryContext);
  const updateMessage = useContext(MessageContext);

  useEffect(() => {
    localStorage.setItem("game-location", "/corridor-9");
  }, []);

  return (
    <div className="scene">
      <Room
        styles={{
          floorColor: "hsl(63, 19%, 26%)",
          wallColor: "hsl(63, 19%, 36%)",
        }}
      />
      <WallLeft
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-8");
        }}
      />
      <WallRight
        styles={{
          doorColor: "hsl(23, 19%, 26%)",
          frameColor: "hsl(23, 19%, 16%)",
          wallColor: "hsl(63, 19%, 30%)",
        }}
        withDoor
        isDoorOpen
        isBack
        onWalkThrough={() => {
          navigate("/corridor-10");
        }}
      />
      <p
        style={{
          color: "rgb(32, 32, 32)",
          opacity: gameState.corridor9.isSwitchOn ? 1 : 0.1,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          textAlign: "center",
          fontSize: "2.3vh",
          fontFamily: "'Reenie Beanie', cursive",
          lineHeight: 1.25,
        }}
      >
        Day #27
        <br />
        <br />
        Maybe it was also possible to travel to the future where
        <br />
        the time crystals didn't exist yet. By the time of my arrival,
        <br />
        they would have already been there after all.
        <br />
        <br />
        Timelines are getting distorted as I keep traveling.
        <br />I cannot tell what will happen. But I can see it if I wanted to.
        <br />
        <br />
        You've got to go back in time from time to time
        <br />
        if you want to move forward.
      </p>
      <Switch
        position="-35.25"
        isOn={gameState.corridor9.isSwitchOn}
        onToggle={() => {
          updateGameState(
            "corridor9",
            "isSwitchOn",
            !gameState.corridor9.isSwitchOn
          );
        }}
      />
      {!gameState.columnFragments.isColumnFragment1Taken && (
        <ColumnFragment
          letters={columnWritings[0].letters}
          header={columnWritings[0].header}
          footer={columnWritings[0].footer}
          styles={{
            transform: "translateX(850%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment1",
              picture: "columnFragment1",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment1Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment2Taken && (
        <ColumnFragment
          letters={columnWritings[1].letters}
          header={columnWritings[1].header}
          footer={columnWritings[1].footer}
          styles={{
            transform: "translateX(700%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment2",
              picture: "columnFragment2",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment2Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment3Taken && (
        <ColumnFragment
          letters={columnWritings[2].letters}
          header={columnWritings[2].header}
          footer={columnWritings[2].footer}
          styles={{
            transform: "translateX(550%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment3",
              picture: "columnFragment3",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment3Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment4Taken && (
        <ColumnFragment
          letters={columnWritings[3].letters}
          header={columnWritings[3].header}
          footer={columnWritings[3].footer}
          styles={{
            transform: "translateX(400%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment4",
              picture: "columnFragment4",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment4Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment5Taken && (
        <ColumnFragment
          letters={columnWritings[4].letters}
          header={columnWritings[4].header}
          footer={columnWritings[4].footer}
          styles={{
            transform: "translateX(250%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment5",
              picture: "columnFragment5",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment5Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment6Taken && (
        <ColumnFragment
          letters={columnWritings[5].letters}
          header={columnWritings[5].header}
          footer={columnWritings[5].footer}
          styles={{
            transform: "translateX(100%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment6",
              picture: "columnFragment6",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment6Taken", true);
          }}
        />
      )}
      {!gameState.columnFragments.isColumnFragment7Taken && (
        <ColumnFragment
          letters={columnWritings[6].letters}
          header={columnWritings[6].header}
          footer={columnWritings[6].footer}
          styles={{
            transform: "translateX(-50%) translateY(30%) rotate(20deg)",
          }}
          onPickUp={() => {
            inventory.addItem({
              id: "columnFragment7",
              picture: "columnFragment7",
            });
            updateMessage(
              "You found a weird marble fragment with some letters on it."
            );
            updateGameState("columnFragments", "isColumnFragment7Taken", true);
          }}
        />
      )}
      <Lamp
        isOn={gameState.corridor9.isSwitchOn}
        styles={{ color: "hsl(23, 10%, 26%)" }}
        position="0"
      />
    </div>
  );
};

export default Corridor9;
