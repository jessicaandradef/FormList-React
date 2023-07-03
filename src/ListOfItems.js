import { Item } from "./Items";

export default function CompleteItens({ itens, onDeleteItem }) {
  return (
    <div className="list">
      <ul>
        {itens.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
