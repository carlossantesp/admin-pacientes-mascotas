import React, { Fragment, useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Cita from "./components/Cita";

function App() {
  let initCitas = JSON.parse(localStorage.getItem("citas"));
  if (!initCitas) {
    initCitas = [];
  }

  const [citas, setCitas] = useState(initCitas);

  const createCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const deleteCita = (id) => {
    const newCitas = citas.filter((cita) => cita.id !== id);
    setCitas(newCitas);
  };

  const titulo = citas.length === 0 ? "No hay citas" : "Administra tus citas";

  useEffect(() => {
    if (initCitas) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, initCitas]);
  return (
    <Fragment>
      <h1>Administrador de citas</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario createCita={createCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
