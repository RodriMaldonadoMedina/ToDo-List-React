import React, { useState } from "react";
import Tarea from "./Tarea.jsx";

const Tareas = () => {
  const [nombreTarea, setNombreTarea] = useState([]);

  const agregarTarea = (e) => {
    if (e.target.value.trim() && e.key === "Enter") {
      //puedo usar concat o el spread operator
      //setNombreTarea((prev)=>prev.concat(e.target.value))
      setNombreTarea([...nombreTarea, e.target.value]);
      e.target.value = "";
    }
  };

  const eliminarTarea = (indice) => {
    setNombreTarea(nombreTarea.filter((elemento, index) => index !== indice));
  };

  return (
    <div>
      <div className="row miInput my-3">
        <input
          type="text"
          onKeyDown={agregarTarea}
          className="col-12"
          placeholder="Ingrese la tarea a realizar"
        />
      </div>

      <ul className="list-group list-group-flush">
        {nombreTarea.map((element, index) => {
          return (
            <Tarea
              key={index}
              nombre={element}
              clase="list-group-item misTareas d-flex justify-content-between"
              eliminarTarea={eliminarTarea}
              indice={index}
            />
          );
        })}
        <li className="list-group-item text-center">
          {nombreTarea.length === 0
            ? `No hay Tareas`
            : `cantidad de tareas de hoy : ${nombreTarea.length}`}
        </li>
      </ul>
    </div>
  );
};

export default Tareas;
