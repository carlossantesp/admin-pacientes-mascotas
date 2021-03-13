import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
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

  useEffect(() => {
    if (initCitas) {
      localStorage.setItem("citas", JSON.stringify(citas));
    } else {
      localStorage.setItem("citas", JSON.stringify([]));
    }
  }, [citas, initCitas]);

  return (
    <Fragment>
      {/* Cabecera */}
      <Header titulo="Administrador de citas para atención de mascotas" />
      {/* Main principal */}
      <main className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-2 md:gap-4 h-full">
        {/* Aside Formulario */}
        <aside className="col-span-1 lg:col-span-2 xl:col-span-3 bg-white px-4 py-8 lg:px-8 xl:px-16 shadow-none md:shadow-lg">
          <Formulario createCita={createCita} />
        </aside>
        {/* Section Citas */}
        <div className="md:col-span-2 lg:col-span-4 xl:col-span-9 px-4 py-8">
          {citas.length === 0 ? (
            <div className="flex justify-center items-center h-full bg-gray-50">
              <p className="uppercase font-bold text-gray-400">No hay citas</p>
            </div>
          ) : (
            <Fragment>
              <h2 className="text-center uppercase text-2xl font-staatliches text-metallic">
                Administra tus citas
              </h2>
              <section className="flex flex-wrap gap-6 mt-4 place-items-stretch">
                {citas.map((cita) => (
                  <Cita key={cita.id} cita={cita} deleteCita={deleteCita} />
                ))}
              </section>
            </Fragment>
          )}
        </div>
      </main>
    </Fragment>
  );
}

export default App;
