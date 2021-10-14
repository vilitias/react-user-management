import React from "react";
import "./App.css";


class Form extends React.Component {

    filterByGender = (event) => {
        this.props.filterByGender(event.target.value);
    }

    render() { 
        return (
        <div className="form">

            <label> Name:
                <input id="name" type="text" onChange={(event)=>this.props.changeInputNameHandler(event)} value={this.props.state.inputName} placeholder="Your name"></input>
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

            <label>Filter by gender:
                <select onChange={this.filterByGender}>
                    <option value="all">All</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
            </label>

        </div>
        )
    }
}
 
export default Form;