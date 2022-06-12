import './App.css';
import freeCodeCampLogo from "./imagenes/freeCodeCampLogo.svg"
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from "react";
function App() {
  
  const [numClicks, setClicks] = useState(0);

  const Clickboton = () => {
    setClicks(numClicks +1) ;
  }
  const reiniciarContador = () => {
    setClicks((0));
    numClicks = 0;
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img src={freeCodeCampLogo} alt="logo de freecodecamp" className="freecodecamp-logo" />
      </div>
      <div className="contenedor-principal">
        <Contador clicks={ numClicks } />
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
