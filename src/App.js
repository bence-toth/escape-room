import React from "react";

import useInventory from "./useInventory";
import Room1 from "./Room1";

import "./App.css";

const InventoryContext = React.createContext([]);

const App = () => {
  const { addItem, removeItem, hasItem } = useInventory();

  return (
    <InventoryContext.Provider value={{ addItem, removeItem, hasItem }}>
      <div className="app">
        <div className="gameCanvas">
          <Room1 />
        </div>
      </div>
    </InventoryContext.Provider>
  );
};

export default App;

export { InventoryContext };
