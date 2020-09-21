import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card';
import '../components/styles/ExerciseNew.css'
const ExerciseNew = ({form, onChange, onSubmit}) => (
    <div className="row ExerciseNew_Lateral_Spaces">
                <div className="col-sm ExerciseNew_Card_Space">
                    <Card 
                        {...form}
                    />

                </div>
                <div className="col-sm ExerciseNew_Form_Space">
                    <ExerciseForm
                        onChange={onChange}
                        onSubmit={onSubmit}
                        form={form}
                    />
                </div>
            </div>
)

export default ExerciseNew