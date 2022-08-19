import React, { useState } from "react";
import Tarea from "./Tarea.jsx";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState([]);

  const agregarTarea = (e) => {
    if (e.target.value !== "" && e.key === "Enter") {
      //setNombreTarea((prev)=>prev.concat(e.target.value))
      setNombreTarea((prev) => [...prev, e.target.value]);
      //lo necesito para limpiar el input por la asincronia
      setTimeout(() => {
        e.target.value = "";
      }, 500);
    }
  };

  const eliminarTarea = (nombre) => {
    //nombre es el evento del onClick, por eso necesito hacer todo ese camino
    let tareaFiltrada = nombreTarea.filter(
      (element) =>
        element !== nombre.target.parentNode.parentNode.firstChild.innerHTML
    );
    setNombreTarea(tareaFiltrada);
  };

  return (
    <div>
      <div className="row miInput my-3">
        <input type="text" onKeyDown={agregarTarea} className="col-12" placeholder="Ingrese la tarea a realizar"/>
      </div>

      <ul className="list-group list-group-flush">
        {nombreTarea.map((element, index) => (
          <Tarea
            key={index}
            nombre={element}
            clase="list-group-item misTareas d-flex justify-content-between"
            eliminarTarea={eliminarTarea}
          />
        ))}
        <li className="list-group-item text-center">
            {(nombreTarea === 0) ? (`No hay Tareas`) : (`cantidad de tareas de hoy : ${nombreTarea.length}`)}
        </li>
      </ul>
    </div>
  );
};

export default Tareas;
