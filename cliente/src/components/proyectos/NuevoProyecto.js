import React, { Fragment, useState, useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';

const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario , mostrarFormulario } = proyectosContext;

    // state para Proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
    console.log(proyectosContext);
    const {nombre} = proyecto;

    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }
    const onSubmitProyecto = e =>{
        e.preventDefault();

        // Validar el proyecto

        // agregar al state

        // Reiniciar el Formulario
    }

    // Mostrar el formulario
    const onClickFormulario = () => {
        mostrarFormulario()
    }
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ onClickFormulario }
            >
                Nuevo Proyecto
            </button>

            { formulario ?
                (
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            name="nombre"
                            id="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />
                        <input
                            type="submit"
                            value="Agregar Proyecto"
                            className="btn btn-primario btn-block"
                        />
                    </form>
                )
                : null
            }
        </Fragment>
     );
}

export default NuevoProyecto;