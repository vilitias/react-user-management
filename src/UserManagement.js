import React from "react";
import User from "./User";

class UserManagement extends React.Component {

    state = {
        users: [
            {name: "Jul", age: 27, gender: "female"},
            {name: "N", age: 24, gender: "male"},
            {name: "A", age: 32, gender: "female"}
        ]
    }

    render() {
        const {users} = this.state;
        return (
            users.map(user => (
                <User 
                name={user.name}
                age={user.age}
                gender={user.gender}
                />
            ))
        )
    }
}

export default UserManagement;