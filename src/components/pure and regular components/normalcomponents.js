import React, { Component } from 'react';

class NormalComponent extends Component {
  render() {
    console.log("regular");
    return <div>Regular component {this.props.name}</div>;
  }
}

export default NormalComponent;