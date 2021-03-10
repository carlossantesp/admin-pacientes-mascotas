import React, { Fragment, useState } from "react";
import Formulario from "./components/Formulario";
function App() {
  const [citas, setCitas] = useState([]);

  const createCita = (cita) => {
    setCitas([...citas, cita]);
  };
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createCita={createCita} />
          </div>
          <div className="one-half column">2</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
