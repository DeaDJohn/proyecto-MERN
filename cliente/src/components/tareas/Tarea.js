import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {


     // obtener el state del formulario
     const proyectosContext = useContext(ProyectoContext);
     const { proyecto } = proyectosContext;

    // obtener el state del tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    // Extrer el proyecto
    const [ proyectoActual ] = proyecto

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    // Funcion que modifica el estado de las tareas
    const cambiarEstado = tarea => {
        if(tarea.estado){
            tarea.estado = false;
        } else{
            tarea.estado = true;
        }
        console.log(tarea);
        cambiarEstadoTarea(tarea);
    }

    // Agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >Incompleto</button>
                    )

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={ () => tareaEliminar(tarea.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}

export default Tarea;