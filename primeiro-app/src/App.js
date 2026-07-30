import { useState } from "react";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");

  function handRegister(e) {
    e.preventDefault();

    alert("TESTE");
  }

  return (
    <div>
      <h1>Cadastrando usuario</h1>

      <form
        onSubmit={(e) => {
          handRegister(e);
        }}
      >
        <label>Nome:</label>
        <br />
        <input
          placeholder="Digite seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Idade:</label>
        <br />
        <input
          placeholder="Digite sua idade"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <br />
        <button type="submit">Registrar</button>
      </form>

      <br />
      <br />

      <div>
        <span>Bem vindo: {nome}</span>
        <br />
        <span> Idade: 25 anos</span>
        <br />
        <span> Email: gabriele@example.com</span>
        <br />
      </div>
    </div>
  );
}

export default App;
