import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: 140,
      value: this.props.maxChars
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
        {this.props.maxChars-this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
