import React from 'react'

export default function Propagacion() {

    const arreglo1 = ["Pizza","HotDogs","Cemas"]
    const arreglo2 = [5,2,6,8]
    const propa = [...arreglo1, ...arreglo2]

    return (
        <div className="jumbotron col-12">
            <p className="display-5">{propa}</p>
        </div>
    )
}
