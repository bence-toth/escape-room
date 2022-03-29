import { useContext } from "react";
import { InventoryContext } from "./App";

import key from "./inventoryItems/key.png";
import metalRing from "./inventoryItems/metal-ring.png";
import leverHandle from "./inventoryItems/lever-handle.png";

import "./Inventory.css";

const numberOfSlots = 10;

const inventoryItems = {
  key,
  metalRing,
  leverHandle,
};

const Inventory = () => {
  const inventory = useContext(InventoryContext);

  return (
    <div className="inventory">
      {inventory.items.map((item) => (
        <div
          key={item.id}
          className="slot"
          data-selected={inventory.selectedItem === item.id}
          onClick={() => {
            if (inventory.selectedItem === item.id) {
              inventory.deselectItem();
            } else {
              inventory.selectItem(item);
            }
          }}
        >
          <img src={inventoryItems[item.picture]} alt="" />
        </div>
      ))}
      {Array(numberOfSlots - inventory.items.length)
        .fill()
        .map((_, index) => (
          <div key={index} className="slot"></div>
        ))}
    </div>
  );
};

export default Inventory;
