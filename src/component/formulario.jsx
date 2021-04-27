import React, { Fragment, useState } from 'react'

export default function Formulario() {

    const [nombre, setNombre] = useState('')
    const [edad, setEdad] = useState('')
    const Validar = (event) => {
        event.preventDefault()
        if (!nombre.trim()) {
            alert("El nombre esta vacio")
            return
        }
        if (!edad.trim()) {
            alert("La edad no puede estar vacia");
            return
        }
    }

    function Bienvenido() {
        const texto = `Bienvenido:  ${nombre} ${edad}`

        return texto
    }

    return (
        <Fragment>
            <div className="col-12">
                {Bienvenido()}
                <hr></hr>
                <form className="form-group" onSubmit={Validar}>
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="Introduce el nombre"
                        onChange={(e) => setNombre(e.target.value)}>
                    </input>
                    <input type="text"
                        className="form-control mb-3"
                        placeholder="Introduce tu edad"
                        onChange={(e) => setEdad(e.target.value)}>
                    </input>
                    <input onClick={Bienvenido()} type="submit" className="btn btn-info btn-block"></input>
                </form>
            </div>
        </Fragment>
    )
}
