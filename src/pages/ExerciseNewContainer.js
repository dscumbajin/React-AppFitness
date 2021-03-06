import React, { useState } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseNew from './ExerciseNew'


const ExerciseNewContainer = ({ history }) => {
    const [form, setForm] = useState({
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    })

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    const  hangleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const hangleSubmit = async e => {
        setLoading(true)
        e.preventDefault()
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            }
            await fetch('http://localhost:8000/api/exercises', config)
            setLoading(false)

            // Redireccion de pagina
            history.push('/exercise')

        } catch (error) {

            setLoading(false)
            setError(error)

        }
    }

    if(loading){
        return <Loading/>
    }
    if(error){
        return <FatalError/>
    }
    return <ExerciseNew
            form={form}
            onChange={hangleChange}
            onSubmit={hangleSubmit}
            />
}


export default ExerciseNewContainer