import React from 'react'

class ExerciseNew extends React.Component {

    // Enlace de eventos Public class filds
    /* handleClick = () => (
        console.log(this)
    )
 */
    state = {}

    hangleChange = e => {
        /* let partialState = {}
        partialState[e.target.name] = e.target.value
        this.setState(this.partialState) */

        //BABEL
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    hangleSubmit = e => {
        e.preventDefault()
        console.log(this.state)

    }

    render() {
        return (
            /* // Manejo de eventos
            <button onClick={this.handleClick}>
                Send
            </button> */

            <div className="container">
                <form
                onSubmit={this.hangleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Title"
                            name="title"
                            onChange={this.hangleChange}
                            value={this.state.title} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Description"
                            name="description"
                            onChange={this.hangleChange}
                            value={this.state.description} />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Img"
                            name="img"
                            onChange={this.hangleChange}
                            value={this.state.img} />
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="LeftColor"
                                name="leftColor"
                                onChange={this.hangleChange}
                                value={this.state.leftColor} />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="RightColor"
                                name="rightColor"
                                onChange={this.hangleChange}
                                value={this.state.rightColor} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }

}

export default ExerciseNew