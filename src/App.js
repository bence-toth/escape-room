import React from "react";

import useInventory from "./useInventory";
import useMessage from "./useMessage";
import StartRoom from "./StartRoom";
import StarMap from "./StarMap";
import Inventory from "./Inventory";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const InventoryContext = React.createContext([]);
const MessageContext = React.createContext("");

const App = () => {
  const inventory = useInventory();
  const { message, updateMessage } = useMessage();

  return (
    <InventoryContext.Provider value={inventory}>
      <MessageContext.Provider value={updateMessage}>
        <div className="app">
          <div className="game">
            <div className="message">{message}</div>
            <div className="gameCanvas">
              <Routes>
                <Route path="/" element={<StartRoom />} />
                <Route path="/star-map" element={<StarMap />} />
              </Routes>
            </div>
            <Inventory />
          </div>
        </div>
      </MessageContext.Provider>
    </InventoryContext.Provider>
  );
};

export default App;

export { InventoryContext, MessageContext };
