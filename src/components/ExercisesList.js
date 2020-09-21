import React from 'react'
import Card from './Card'

//<> </> === <React.Fragment>
const ExercisesList = ({exercises}) => (
    <> 
        {exercises.map((exercise) => {
            return (
                <Card
                    key={exercise.id}
                    title={exercise.title}
                    description={exercise.description}
                    img={exercise.img}
                    leftColor={exercise.leftColor}
                    rightColor={exercise.rightColor}
                />

            )
        })}

    </>
)


export default ExercisesList