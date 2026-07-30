import Nome from "./components/Nome";

function App(){
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="João" idade={20}/>
      <br/> 
      <Nome aluno="Maria" idade={25}/>
    </div>  
  );
}



export default App;



