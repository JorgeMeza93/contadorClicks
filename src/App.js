import './App.css';
import freeCodeCampLogo from "./imagenes/freeCodeCampLogo.svg"
import Boton from './componentes/Boton';

function App() {
  
  const Clickboton = () => {
    console.log("Hola mundo");
  }
  const reiniciarContador = () => {
    console.log("Reiniciando contador")
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="logo de freecodecamp" className="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Boton 
          texto="Click"
          botonDeClick={true}
          manejarClick={Clickboton}
        />
        <Boton 
          texto="Reiniciar"
          botonDeClick={false}
          manejarClick={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
