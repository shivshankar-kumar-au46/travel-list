export default function Stats({ items }) {
  const itemsPacked = items.filter((item) => item.packed).length;
  const itemsPackedPercentage = Math.round((itemsPacked / items.length) * 100);
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding some items to your Packing list</em> 🚀
      </p>
    );
  return (
    <footer className="stats">
      <em>
        {itemsPackedPercentage === 100
          ? "You packed everthing now ready to Go! ✈️  "
          : `💼 You have ${items.length} items on your list, and you already packed
        ${itemsPacked} (${itemsPackedPercentage} %)`}
        {}
      </em>
    </footer>
  );
}
