import React from "react";

const Tarea = ({indice, nombre, clase, eliminarTarea}) => {

    return (
        <div>
            <li className={clase}>
                <span>{nombre}</span>
                <span className="justify-content-between"><i className="bi bi-trash miTrash" onClick={()=>eliminarTarea(indice)}></i></span>
            </li>
        </div>
    )
}

export default Tarea;