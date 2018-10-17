import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value:''
    };
  }

    handleUserNameChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event=> {
    event.preventDefault();
    if (!this.state.username || !this.state.password) return

    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.value}
     onChange={this.handleUserNameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.value}
     onChange={this.handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
