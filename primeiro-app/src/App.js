import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([
    "Pagar a conta de luz",
    "Estudar React",
  ]);

  function handRegister(e) {
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrando usuario</h1>
      <form
        onSubmit={(e) => {
          handRegister(e);
        }}
      >
        <label>Nome da tarefa:</label>
        <br />
        <input
          placeholder="Digite o nome da tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />

        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
