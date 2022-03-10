import { useState, useEffect } from "react";

const useInventory = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("game-inventory") ?? "[]")
  );

  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    localStorage.setItem("game-inventory", JSON.stringify(items));
  }, [items]);

  const addItem = (itemToAdd) => {
    if (!items.some((item) => item.id === itemToAdd.id)) {
      setItems([...items, itemToAdd]);
    }
  };

  const removeItem = (itemToRemove) => {
    setItems(items.filter((item) => item.id !== itemToRemove.id));
  };

  const hasItem = (itemToCheck) =>
    items.some((item) => item.id === itemToCheck.id);

  const selectItem = (itemToSelect) => {
    console.log(itemToSelect);
    setSelectedItem(itemToSelect.id);
  };

  const deselectItem = () => {
    setSelectedItem(null);
  };

  return {
    items,
    addItem,
    removeItem,
    hasItem,
    selectItem,
    deselectItem,
    selectedItem,
  };
};

export default useInventory;
