import React from "react";


class User extends React.Component {
    
    render() {
        const {name, age, gender} = this.props;
        return (
            <div className="user">
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Gender: {gender}</div>
            </div>
        )
    }
}

export default User;