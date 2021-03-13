import React, { Fragment, useState } from "react";
import uuid from "uuid/dist/v4";
import PropTypes from "prop-types";

const Formulario = ({ createCita }) => {
  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: "",
  });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const { mascota, propietario, fecha, hora, sintomas } = cita;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      mascota.trim() === "" ||
      propietario.trim() === "" ||
      fecha.trim() === "" ||
      hora.trim() === "" ||
      sintomas.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);
    cita.id = uuid();

    createCita(cita);

    setCita({
      mascota: "",
      propietario: "",
      fecha: "",
      hora: "",
      sintomas: "",
    });
  };

  return (
    <Fragment>
      <h2 className="text-center font-staatliches uppercase text-2xl mb-8 text-metallic">
        Registro de Citas
      </h2>
      {error ? (
        <p className="mb-8 w-full bg-red-300 p-2 text-red-800 uppercase text-sm font-bold text-center shadow-md">
          Todos los campos son obligatorios
        </p>
      ) : null}
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <div className="flex flex-col gap-2 mb-2">
          <label className="font-bold text-xs" htmlFor="mascota">
            Mascota:
          </label>
          <input
            type="text"
            name="mascota"
            className="w-full p-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring"
            placeholder="Nombre de la mascota"
            onChange={handleChange}
            value={mascota}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label className="font-bold text-xs" htmlFor="propietario">
            Dueño:
          </label>
          <input
            type="text"
            name="propietario"
            className="w-full p-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring"
            placeholder="Nombre del dueño de la mascota"
            onChange={handleChange}
            value={propietario}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label className="font-bold text-xs" htmlFor="fecha">
            Fecha atención:
          </label>
          <input
            type="date"
            name="fecha"
            className="w-full p-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring"
            onChange={handleChange}
            value={fecha}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label className="font-bold text-xs" htmlFor="hora">
            Hora atención:
          </label>
          <input
            type="time"
            name="hora"
            className="w-full p-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring"
            onChange={handleChange}
            value={hora}
          />
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <label className="font-bold text-xs" htmlFor="sintomas">
            Síntomas:
          </label>
          <textarea
            name="sintomas"
            className="w-full p-2 rounded-md border-2 border-gray-200 focus:outline-none focus:ring"
            onChange={handleChange}
            value={sintomas}
            placeholder="Breve descripción de los síntomas de la mascota"
            rows="4"
          ></textarea>
        </div>

        <button
          type="submit"
          className="p-3 bg-orange-100 rounded-full text-gray-100 font-bold shadow-md hover:course hover:bg-orange-200"
        >
          Agregar cita
        </button>
      </form>
    </Fragment>
  );
};

Formulario.propTypes = {
  createCita: PropTypes.func.isRequired,
};

export default Formulario;
