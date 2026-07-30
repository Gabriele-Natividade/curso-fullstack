import { useState } from "react";


import Nome from "./components/Nome";

function App() {
  const [aluno, setAluno] = useState("Sujeito Programador");

  function hanleChangeName() {
    setAluno("Gabriele");
  }

  return (
    <div>
      <h1>Componente App</h1><br />
      <h2>Olá: {aluno}</h2>
      <button onClick={hanleChangeName}>
        Mudar Nome
      </button>
    </div>
  );
}

export default App;


