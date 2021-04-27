import { Fragment } from 'react'
import Hola from './component/home.jsx'
import Contador, { contador } from './component/contador';
import Listado from "./component/listado";
import Temperatura from "./component/temperatura";
import Formulario from './component/formulario';
import Propagacion from './component/propagacion'

function App() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-12 jumbotron">
            <h1 className="display-7">Titulo de mi primer proyecto</h1>
          </div>
          <Hola />
          <Contador />
          <Listado />
          <Temperatura />
          <Formulario />
          <Propagacion />
        </div>

      </div>
    </Fragment>

  );
}

export default App;
