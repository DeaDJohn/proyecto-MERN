import React, { Fragment , useContext } from 'react';
import Tarea from './Tarea';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const ListadoTareas = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    // obtener las tareas del proyecto
    const tareasContext = useContext(TareaContext);
    const { tareasproyecto } = tareasContext;

    // Si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un proyecto</h2>

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const tareasProyecto = [];

    // Elimina un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return (
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>

            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea">No hay tareas</li>)
                    : tareasproyecto.map( tarea =>(
                        <Tarea
                            key={tarea.id}
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                    type="button"
                    className="btn btn-eliminar"
                    onClick={onClickEliminar}
                >
                    Eliminar Proyecto &times;
                </button>
        </Fragment>
     );
}

export default ListadoTareas;