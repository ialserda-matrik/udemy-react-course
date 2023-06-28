export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packinglist</em> 🚀
      </p>
    );

  const numItems = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentage =
    numItems === 0 ? "0" : Math.round((itemPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? `You are all packed! ✈`
          : `You have ${numItems} items on your list, and you have aready packed
        ${itemPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
