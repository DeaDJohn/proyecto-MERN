import React, { useContext } from 'react';
import TareaContext from '../../context/tareas/tareaContext';
import ProyectoContext from '../../context/proyectos/proyectoContext';

const Tarea = ({tarea}) => {


     // obtener el state del formulario
     const proyectosContext = useContext(ProyectoContext);
     const { proyecto } = proyectosContext;

    // obtener el state del tarea
    const tareasContext = useContext(TareaContext);
    const { eliminarTarea, obtenerTareas } = tareasContext;

    // Extrer el proyecto
    const [ proyectoActual ] = proyecto

    // Funcion que se ejecuta cuando el usuario presiona el btn de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
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
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >Incompleto</button>
                    )

                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
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