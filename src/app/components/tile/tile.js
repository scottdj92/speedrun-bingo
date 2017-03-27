import React, { Component } from 'react';

export default class Tile extends Component {
  constructor (props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  handleChange(e) {
    this.setState({completed: true});
  }

  render () {
    return (
      <td onClick={this.handleChange.bind(this)} className={this.state.completed ? "complete" : '' }>{this.props.title}</td>
    );
  }
}
