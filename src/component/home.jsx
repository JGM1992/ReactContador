import React, { Fragment } from 'react'

export default function hola() {
    return (
        <Fragment>
            <div className="col-6">
                <p>Hola Mundo {1 + 6}</p>
            </div>
            <div className="col-6">
                <p>desde el curso de React Js con Firebase</p>
            </div>
        </Fragment>
    )
}