import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    // state para Proyecto
    const [ proyecto, guardarProyecto ] = useState({
        nombre: ''
    });

    // Extraer nombre de proyecto
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
    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >
                Nuevo Proyecto
            </button>
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
        </Fragment>
     );
}
 
export default NuevoProyecto;