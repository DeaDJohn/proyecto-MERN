import React, { useContext, useState } from 'react';
import ProyectoContext from '../../context/proyectos/proyectoContext';
import TareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    // Extraer proyectos de state inicial
    const proyectosContext = useContext(ProyectoContext);
    const { proyecto } = proyectosContext;

     // obtener el state del tarea
     const tareasContext = useContext(TareaContext);
     const { agregarTarea, validarTarea, errortarea, obtenerTareas } = tareasContext;


    // state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: '',
    })

    // extraer el nombre del proyecto
    const { nombre } = tarea;

     // Si no hay proyecto seleccionado
    if(!proyecto) return null;

    // Array destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    // leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }


    //
    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if(nombre.trim() === '') {
            validarTarea();
            return;
        }

        //agregar la nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        // obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        // Reiniciar el formulario
        agregarTarea({
            nombre: ''
        });

    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        name="nombre"
                        id="nombre"
                        placeholder="Nombre tarea..."
                        value={nombre}
                        onChange={handleChange}
                        />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agreagar Tarea"
                        />
                </div>
            </form>
            { errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p>: null}
        </div>
     );
}

export default FormTarea;