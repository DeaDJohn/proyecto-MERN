import React, { useContext } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const Proyecto = ({proyecto}) => {

    // obtener el state del formulario
    const proyectosContext = useContext(ProyectoContext);
    const { proyectoActual } = proyectosContext;

    // obtener el state del tarea
    const tareasContext = useContext(TareaContext);
    const { obtenerTareas } = tareasContext;

    // Funcion para agreagar el proyecto actual
    const seleccionarProyecto = id => {
        proyectoActual(id); // Fijar un proyecto actual
        obtenerTareas(id); // Filtrar las tareas cuando se hacen click

    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => seleccionarProyecto(proyecto.id) }
            >{proyecto.nombre}</button>
        </li>
     );
}

export default Proyecto;