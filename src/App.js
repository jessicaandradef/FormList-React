import { useState } from "react";
import CompleteItens from "./ListOfItems";
import Form from "./Form";
import "./styles.css";

export default function App() {
  const [itens, setItem] = useState([]);

  function handleAddItens(item) {
    setItem((itens) => [...itens, item]);
  }

  function handleDeleteItem(id) {
    console.log(id);

    setItem((itens) => itens.filter((item) => item.id !== id));
  }

  return (
    <div>
      <Form onAddItens={handleAddItens} />
      <CompleteItens itens={itens} onDeleteItem={handleDeleteItem} />
    </div>
  );
}
