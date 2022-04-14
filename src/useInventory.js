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
      setItems((previousItems) => [...previousItems, itemToAdd]);
    }
  };

  const removeItem = (itemToRemove) => {
    setSelectedItem(null);
    setItems((previousItems) =>
      previousItems.filter((item) => item.id !== itemToRemove)
    );
  };

  const hasItem = (itemToCheck) =>
    items.some((item) => item.id === itemToCheck.id);

  const selectItem = (itemToSelect) => {
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
