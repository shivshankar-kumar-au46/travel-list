import { useState } from "react";
import Items from "./Items";

export default function PackingList({
  items,
  handleDeleteItem,
  handleToggleItem,
  handleClearList,
}) {
  const [sortby, setSortby] = useState("input");
  let sortedItems;
  if (sortby === "input") sortedItems = items;

  if (sortby === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localCompare(b.description));

  if (sortby === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            item={item}
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleToggleItem={handleToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="input">Sort by Input</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed</option>
        </select>
        <button onClick={handleClearList}>Clear List</button>
      </div>
    </div>
  );
}
