import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const Cita = ({ cita, deleteCita }) => (
  <article className="bg-yellow-50 p-8 rounded-lg shadow-md w-64 relative">
    <p className="font-bold text-sea mb-1">
      {" "}
      Mascota:
      <span className="text-chocolate font-normal ml-2">{cita.mascota}</span>
    </p>
    <p className="font-bold text-sea mb-1">
      {" "}
      Dueño:
      <span className="text-chocolate font-normal ml-2">
        {cita.propietario}
      </span>
    </p>
    <p className="font-bold text-sea mb-1">
      {" "}
      Fecha:
      <span className="text-chocolate font-normal ml-2">
        {moment(cita.fecha).format("D/MM/YYYY")}
      </span>
    </p>
    <p className="font-bold text-sea mb-1">
      {" "}
      Hora:
      <span className="text-chocolate font-normal ml-2">{cita.hora}</span>
    </p>
    <p className="font-bold text-sea mb-1">
      {" "}
      Síntomas:
      <span className="text-chocolate font-normal block">{cita.sintomas}</span>
    </p>

    <button
      className="absolute top-2 right-2 text-xl text-gray-800 hover:bg-gray-200 px-2 py-1 leading-none rounded-full"
      onClick={() => deleteCita(cita.id)}
    >
      &times;
    </button>
  </article>
);

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  deleteCita: PropTypes.func.isRequired,
};
export default Cita;
