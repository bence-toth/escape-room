import { useContext } from "react";
import { InventoryContext } from "./App";

import key from "./inventoryItems/key.png";
import metalRing from "./inventoryItems/metal-ring.png";
import leverHandle from "./inventoryItems/lever-handle.png";
import columnFragment1 from "./inventoryItems/column-fragment-1.png";
import columnFragment2 from "./inventoryItems/column-fragment-2.png";
import columnFragment3 from "./inventoryItems/column-fragment-3.png";
import columnFragment4 from "./inventoryItems/column-fragment-4.png";
import columnFragment5 from "./inventoryItems/column-fragment-5.png";
import columnFragment6 from "./inventoryItems/column-fragment-6.png";
import columnFragment7 from "./inventoryItems/column-fragment-7.png";

import "./Inventory.css";

const numberOfSlots = 10;

const inventoryItems = {
  key,
  metalRing,
  leverHandle,
  columnFragment1,
  columnFragment2,
  columnFragment3,
  columnFragment4,
  columnFragment5,
  columnFragment6,
  columnFragment7,
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
