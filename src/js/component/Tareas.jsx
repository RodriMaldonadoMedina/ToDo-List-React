import React, { useState } from "react";

import Tarea from "./Tarea.jsx"

const Tareas = () => {

    const [nombreTarea, setNombreTarea] = useState([]);

    const agregarTarea = e => {
        if ((e.target.value !== "") && (e.key === "Enter")){
            setNombreTarea(nombreTarea.concat(e.target.value)); //una forma de agregar un valor a un array
            e.target.value="";
        }
    }
    
    return (
        <div>
            <div className="row">
                <input type="text" 
                    onKeyDown={agregarTarea}
                    className="col-12"
                />
            </div>
            <div className="card">
                <ul className="list-group list-group-flush">
                    {nombreTarea.map((element,index) => <Tarea key={index} nombre={element} clase="list-group-item" eliminarTarea={setNombreTarea}/>)}
                </ul>
            </div>
        </div>
    )
}

export default Tareas;