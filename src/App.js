import React from "react";

import useInventory from "./useInventory";
import Room1 from "./Room1";
import Inventory from "./Inventory";

import "./App.css";

const InventoryContext = React.createContext([]);

const App = () => {
  const inventory = useInventory();

  return (
    <InventoryContext.Provider value={inventory}>
      <div className="app">
        <div className="gameCanvas">
          <Room1 />
        </div>
        <Inventory />
      </div>
    </InventoryContext.Provider>
  );
};

export default App;

export { InventoryContext };
