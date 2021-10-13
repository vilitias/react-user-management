import React from "react";
import "./App.css";


class Form extends React.Component {
    render() { 
        return (
        <div className="form">

            <label> Name:
                <input type="text" onChange={(event)=>this.props.changeInputNameHandler(event)} value={this.props.state.inputName} placeholder="Your name"></input>
            </label>

            <label> Age:
                <input type="text" onChange={(event) => this.props.changeInputAgeHandler(event)} value={this.props.state.inputAge} placeholder="Your age"></input>
            </label>

            <label> Gender:
                <select onChange={(event) => this.props.changeInputGenderHandler(event)} value={this.props.state.inputGender}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </label>

            <button onClick={this.props.func}>Submit</button>

        </div>
        )
    }
}
 
export default Form;