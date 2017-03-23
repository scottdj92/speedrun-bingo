import React, { Component } from 'react';

export default class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      completed: false
    };
  }

  handleClick(e) {
    this.setState({ completed: !this.state.completed });
  }

  render() {
    if (this.state ) return (
      <td onClick={this.handleClick.bind(this)} className={this.state.completed ? "greensquare" : ""}>{this.props.title}</td>
    );
  }
}