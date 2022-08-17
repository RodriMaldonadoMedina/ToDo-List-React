import React from "react";

const Tarea = ({index, nombre, clase, eliminarTarea}) => {

    const eliminarTareaPorIndice = (index)=>{
        eliminarTarea((prevState)=>prevState.filter((elemento, indice)=>{indice !== index}))
    }

    return (
        <div className="d-flex justify-content-between">
            <li className={clase}>{nombre}</li>
            <span><i class="bi bi-trash" onClick={eliminarTareaPorIndice(index)}></i></span>
        </div>
    )
}

export default Tarea;