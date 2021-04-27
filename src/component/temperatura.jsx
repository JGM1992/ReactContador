import { useState, Fragment } from "react";

export default function Temperatura() {

    const [temperatura, setTemperatura] = useState(19)
    const Subir = () => {
        setTemperatura(temperatura + 1)
    }
    const bajar = () => {
        setTemperatura(temperatura - 1)
    }

    return (
        <Fragment>
            <div className="col-6">
                <h2>La temperatura es: {temperatura}</h2>
            </div>
            <div className="col-6">
                <p>El clima esta:
                {
                        temperatura >= 22 ? ' caluroso' : ' frio'
                    }
                </p>
            </div>
            <div className="col-6">
                <button className="btn btn-primary btn-block" onClick={Subir}>Aumentar Temperatura</button>
            </div>
            <div className="col-6">
                <button className="btn btn-primary btn-block" onClick={bajar}>Disminuir Temperatura</button>
            </div>
        </Fragment >
    )
}