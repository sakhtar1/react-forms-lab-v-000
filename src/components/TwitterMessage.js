import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 140
    };
  }

    handleChange = event => {
     this.setState({
       value: event.target.value,
     });
   }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
