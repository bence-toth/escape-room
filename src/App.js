import React from "react";

import useInventory from "./useInventory";
import Inventory from "./Inventory";

import useGameState from "./useGameState";
import GameCanvas from "./GameCanvas";

import useMessage from "./useMessage";
import Message from "./Message";

import useLocation from "./useLocation";
import useNavigation from "./useNavigation";

import "./App.css";

const InventoryContext = React.createContext([]);
const MessageContext = React.createContext();
const GameStateContext = React.createContext();
const LocationChangeContext = React.createContext();

const App = () => {
  const inventory = useInventory();
  const { message, updateMessage } = useMessage();
  const { gameState, updateGameState } = useGameState();
  const { navigate, isCanvasRendered } = useNavigation();

  useLocation();

  return (
    <InventoryContext.Provider value={inventory}>
      <MessageContext.Provider value={updateMessage}>
        <GameStateContext.Provider value={{ gameState, updateGameState }}>
          <LocationChangeContext.Provider value={navigate}>
            <div className="app">
              <div className="game">
                <Message text={message} />
                <GameCanvas isRendered={isCanvasRendered} />
                <Inventory />
              </div>
            </div>
          </LocationChangeContext.Provider>
        </GameStateContext.Provider>
      </MessageContext.Provider>
    </InventoryContext.Provider>
  );
};

export default App;

export {
  InventoryContext,
  MessageContext,
  GameStateContext,
  LocationChangeContext,
};
