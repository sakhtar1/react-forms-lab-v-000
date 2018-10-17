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
    const username = event.target.children[0].value
    const password = event.target.children[1].value
    if (username && password) return
    alert('Usersubmitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
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
