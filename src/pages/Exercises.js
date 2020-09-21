import React from 'react';
import Welcome from '../components/Welcome'
import ExercisesList from '../components/ExercisesList'
import AddButton from '../components/AddButton'

const Exercises =({data}) =>(
    <React.Fragment>
    <Welcome
    username ="DC-Dev"
    />

    <ExercisesList
    exercises = {data}/>

    <AddButton/>                    
    
</React.Fragment>
)

export default Exercises