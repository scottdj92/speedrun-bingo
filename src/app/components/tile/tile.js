import React, { Component } from 'react';

export default class Tile extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <td onClick={this.props.update} className={this.props.completed ? "complete" : '' }>{this.props.title}</td>
    );
  }
}
