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
        ],
        filter: "all"
    }

    addUser = () => {
        const copyState = Object.assign({},this.state);
        copyState.users.push({id:copyState.id++, name:copyState.inputName, age:copyState.inputAge, gender: copyState.inputGender })
        this.setState(copyState);
        
        const name = document.querySelector("#name");
        console.log(name);
        name.value = "";
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

    filterByGender = (gender) => {
        this.setState({filter: gender})
    }

    render() {

        const renderedUserList = this.state.filter === "all"? this.state.users : this.state.users.filter(item => item.gender === this.state.filter);
        return (
            <div>

                <Form 
                func={this.addUser} 
                filterByGender={this.filterByGender}
                changeInputNameHandler={this.changeInputNameHandler} 
                changeInputAgeHandler={this.changeInputAgeHandler} 
                changeInputGenderHandler={this.changeInputGenderHandler}
                state={this.state}/>

                {renderedUserList.map((user,index) => {
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