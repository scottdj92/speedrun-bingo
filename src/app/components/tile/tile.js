import React, { Component } from 'react';

export default class Tile extends Component {
  constructor (props) {
    super(props);
    this.state = {
      complete: false
    };
  }

  toggleMilestone() {
    if (this.state.complete === true) {
      this.props.actions.undoMilestone(0);
    } else {
      this.props.actions.completeMilestone(0);
    }
  }

  render () {
    return (
      <td onClick={this.toggleMilestone.bind(this)} className={this.props.completed ? "complete" : '' }>{this.props.title}</td>
    );
  }
}
