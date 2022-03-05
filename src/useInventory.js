import { useState } from "react";

const useInventory = () => {
  const [inventory, setInventory] = useState([]);

  const addItem = (itemToAdd) => {
    if (!inventory.some((item) => item.id === itemToAdd.id)) {
      setInventory([...inventory, itemToAdd]);
    }
  };

  const removeItem = (itemToRemove) => {
    setInventory(inventory.filter((item) => item.id !== itemToRemove.id));
  };

  const hasItem = (itemToCheck) =>
    inventory.some((item) => item.id === itemToCheck.id);

  return { addItem, removeItem, hasItem };
};

export default useInventory;
