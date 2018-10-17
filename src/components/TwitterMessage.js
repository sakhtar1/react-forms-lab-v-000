import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.maxChars,
    };
  }

    handleChange = event => {
     this.setState({
       value: event.target.value,
     });
      this.handleChange = this.handleChange.bind(this);
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
