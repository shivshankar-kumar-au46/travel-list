import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [item, setItem] = useState([]);

  function addHandleItem(item) {
    setItem((items) => [...items, item]);
    console.log(item, "newItems");
  }

  function handleDeleteItem(id) {
    setItem((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItem((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure want to delete all list ?");

    if (confirmed) setItem([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addHandleItem} />
      <PackingList
        handleClearList={handleClearList}
        items={item}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
      <Stats items={item} />
    </div>
  );
}
