/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import circlesImagen from '../images/circles.png'
import emptyImagen from '../images/empty.png'
import './styles/Card.css'

// Componete de clase
class Card extends React.Component {

    // Esto de un componente
    constructor(props){
        super(props)
        this.state={
            image: `${emptyImagen}`
        }
    }

    // Funcion despues de que un componente se monte
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                image: this.props.img
            })
        }, 1000)
    }
    // Carga el estado por defecto en la imagen this.state.image
    
    render() {

        const {title, description, img, leftColor, rightColor} = this.props
       
        return (
           
            <div className="card mx-auto Fitness-Card"
                // Estilos en Linea
                style={{
                    backgroundImage: `url(${circlesImagen}), linear-gradient(to right, ${leftColor || '#55CCF2'}, ${rightColor || '#2F20ED'})`
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImagen} className="float-right" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card