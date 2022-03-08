import React from "react";

import useInventory from "./useInventory";
import useMessage from "./useMessage";
import Inventory from "./Inventory";
import GameCanvas from "./GameCanvas";
import Message from "./Message";

import "./App.css";

const InventoryContext = React.createContext([]);
const MessageContext = React.createContext();

const App = () => {
  const inventory = useInventory();
  const { message, updateMessage } = useMessage();

  return (
    <InventoryContext.Provider value={inventory}>
      <MessageContext.Provider value={updateMessage}>
        <div className="app">
          <div className="game">
            <Message text={message} />
            <GameCanvas />
            <Inventory />
          </div>
        </div>
      </MessageContext.Provider>
    </InventoryContext.Provider>
  );
};

export default App;

export { InventoryContext, MessageContext };
