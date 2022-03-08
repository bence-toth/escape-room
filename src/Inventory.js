import { useContext } from "react";
import { InventoryContext } from "./App";

import "./Inventory.css";

const Inventory = () => {
  const inventory = useContext(InventoryContext);

  return (
    <div className="inventory">
      {inventory.items.map((item) => (
        <div key={item.id}>{item.id}</div>
      ))}
    </div>
  );
};

export default Inventory;
