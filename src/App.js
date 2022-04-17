import "./App.css";
import SimpleState from "./components/SimpleState";
//import Coordenadas from "./components/Coordenadas";
import Coordenadas from "./components/UseCoordenadas";
function App() {
  return (
    <div className="App">
      Simple Class State
      <br />
      <SimpleState />
      <hr />
      {/* Coordenadas con Class
      <br />
      <Coordenadas />
      <hr /> */}
      Coordenadas con Funciones
      <br />
      <Coordenadas />
    </div>
  );
}

export default App;
