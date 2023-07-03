export function Item({ item, onDeleteItem }) {
  return (
    <li>
      <p> {item.task}</p>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
