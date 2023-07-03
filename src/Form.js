import { useState } from "react";

export default function Form({ onAddItens }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = { task, id: Date.now() };
    console.log(newItem);

    onAddItens(newItem);
    setTask("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>What do you want to learn 😍 ?</h3>
      <input
        type="text"
        placeholder="Item..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
