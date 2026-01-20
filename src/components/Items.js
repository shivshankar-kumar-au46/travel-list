export default function Items({ item, handleDeleteItem, handleToggleItem }) {
  return (
    <li>
      <input type="checkbox" onClick={() => handleToggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
