import React from "react";

export class LoginForm extends React.Component {
  state = { username: "", 
            password: "",
            remember: false,
            disabled: true,
        };

  handleUsernameInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      username: value,
      
    });
  };

  handleUsernamePasswordChange = (event) => {
    const value = event.target.value;
    this.setState({
        usernamepassword: value,
        
      });
  };

  Login = (event) => {
    console.log(event)
    const verify = event.target.disabled
    this.setState({
        disabled : verify
    })
    console.log(verify)
  }

  Reset = () => {
    this.setState({
        username: "",
        password: "",
        remember: false
    })
}


  

  render() {

    const buttonStyle = {
      color: "black",
      backgroundColor: this.state.password.length >= 8 ? "green" : "red"
    }

    return (
      <div>
        <h1>My Form</h1>
        <input
          name="username"
          value={this.state.username}
          onChange={this.handleUsernameInputChange}
        />

        <input
          name="password"
          type= 'password'
          value={this.state.password}
          onChange={this.handleUsernamePasswordChange}
        />

        <input
          name="remember"
          type= 'checkbox'
          value={this.state.remember}
          onChange={this.handleUsernamePasswordChange}
        />

        <button style = {buttonStyle} disabled={!this.state.username || !this.state.password} 
        onClick={this.Login}>Login
        </button>

        <button onClick={this.Reset}>Reset
        </button>
        
      </div>
    );
  }
}
