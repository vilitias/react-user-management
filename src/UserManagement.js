import React from "react";
import User from "./User";
import Form from "./Form";

class UserManagement extends React.Component {

    state = {
        id: 3,
        inputName: "",
        inputGender: "",
        inputAge: "",
        users: [
            {id : 0, name: "Jul", age: 27, gender: "female"},
            {id : 1, name: "N", age: 24, gender: "male"},
            {id : 2, name: "A", age: 32, gender: "female"}
        ]
    }

    addUser = () => {
        const copyState = Object.assign({},this.state);
        copyState.users.push({id:copyState.id++, name:copyState.inputName, age:copyState.inputAge, gender: copyState.inputGender })
        this.setState(copyState)           
    }

    deleteUser = (index) => {
        const copyState = Object.assign({},this.state);
        copyState.users.splice(index, 1);
        this.setState(copyState);  
    }

    changeInputNameHandler = (event) => {
        const copyState = Object.assign({},this.state); //?
        copyState.inputName = event.target.value;
        this.setState(copyState);           //?
    }

    changeInputAgeHandler = (event) => {
        const copyState = Object.assign({}, this.state);
        copyState.inputAge = event.target.value;
        this.setState(copyState);   
    }

    changeInputGenderHandler = (event) => {
        const copyState = Object.assign({}, this.state);
        copyState.inputGender = event.target.value;
        this.setState(copyState); 
    }

    render() {
        console.log('state', this.state)
        return (
            <div>

                <Form 
                func={this.addUser} 
                changeInputNameHandler={this.changeInputNameHandler} 
                changeInputAgeHandler={this.changeInputAgeHandler} 
                changeInputGenderHandler={this.changeInputGenderHandler}
                state={this.state}/>

                {this.state.users.map((user,index) => {
                    return(

                        <User 
                        key={index}
                        name={user.name}
                        age={user.age}
                        gender={user.gender}
                        id={user.id}
                        idx={index}
                        deleteUser={() => this.deleteUser(index)}
                        />

                    )
    })}
            </div>
        )
    }
}

export default UserManagement;