import React from "react";
import './Form.css'

export class Form extends React.Component {
    state = {
        username : "",
    }
    render() {
        return (
            <form className="form"
                onSubmit = {(event) => {
                            event.preventDefault();
                            this.props.onSubmit(this.state.username);
                            this.setState({username:""});
                        }
                    }>
                <input  className="usernameInputField" 
                        type="username" 
                        maxLength="25" 
                        placeholder="Enter your Github username"
                        value={this.state.username}
                        onChange = {(event) => {
                            this.setState({username : event.target.value});
                        }}/>
                <button className="formButton">Add Card</button>
            </form>
        );
    }
}