import React, { Fragment } from "react";

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear Citas</h2>
      <form>
        <label htmlFor="mascota">Nombre Mascotas</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de mascota"
        />

        <label htmlFor="propietario">Nombre Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre Dueño de la mascota"
        />

        <label htmlFor="date">Fecha</label>
        <input type="date" name="date" className="u-full-width" />

        <label htmlFor="hora">Hora</label>
        <input type="time" name="hora" className="u-full-width" />

        <label htmlFor="sintomas">Síntomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>

        <button type="submit" className="u-full-width button-primary">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
