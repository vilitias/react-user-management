import React from "react";


class User extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            <div className="user">
                <div>Name: {this.props.name}</div>
                <div>Age: {this.props.age}</div>
                <div>Gender: {this.props.gender}</div>
                <button>Delete</button>
            </div>
        )
    }
}

export default User;