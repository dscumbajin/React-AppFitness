import React from 'react'
import './styles/Welcome.css'

// Funciones de JS ------ Componetes Funcionales xq son funciones de JS, no manejan el stado del componente

function Welcome(props) {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {props.username}!!</h1>
                <p>Bienvenido a FitnessApp</p>
            </div>
        </div>
    )
}


export default Welcome