import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card';

class ExerciseNew extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
        }
    }

    hangleChange = e => {
        //BABEL
        this.setState({
            form: {
                // Mantener la información anterior si sobrescribir
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (

            <div className="row">
                <div className="col-sm">
                    <Card
                    {...this.state.form}
                    />

                </div>
                <div className="col-sm">
                    <ExerciseForm
                        onChange={this.hangleChange}
                        form={this.state.form}
                    />
                </div>
            </div>

        )
    }

}

export default ExerciseNew