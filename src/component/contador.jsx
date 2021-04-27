import React, { Fragment, useState } from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0)
    const Aumentar = () => {
        setNumero(numero + 1)
    }
    const Reducir = () => {
        if (numero != 0) {
            setNumero(numero - 1)
        }
    }

    return (
        <Fragment>
            <div className="col-4">
                <h3>Cantidad del contador: {numero} </h3>
            </div>
            <div className="col-4">
                <button className="btn btn-primary btn-block" onClick={Aumentar}>Aumentar</button>
            </div>
            <div className="col-4">
                <button className="btn btn-primary btn-block" onClick={Reducir}>Reducir</button>
            </div>
        </Fragment>
    )
}

export default Contador
