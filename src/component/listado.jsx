import React, { Fragment, useState } from "react";

const Listado = () => {

    const numeros = [1, 2, 3, 4, 5]
    return (
        <Fragment>
            <div className="col-12 text-center">
                <ul>
                    {
                        numeros.map((item, index) =>
                            <li key={item}>{item} - {index}</li>
                        )
                    }
                </ul>
            </div>

        </Fragment>
    )

}

export default Listado