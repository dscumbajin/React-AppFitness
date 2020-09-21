import React from 'react'
import './styles/Welcome.css'

// Funciones de JS ------ Componetes Funcionales xq son funciones de JS, no manejan el stado del componente

const Welcome=({username}) => (
    <div className="container">
            <div className="Fitness-User-Info">
                <h1>Hello {username}!!</h1>
                <p>Bienvenido a FitnessApp</p>
            </div>
        </div>
)

export default Welcome