import React, { Component } from 'react';

export default class Tile extends Component {
  constructor (props) {
    super(props);
  }

  toggleMilestone() {
    if (this.props.data.complete === true) {
      this.props.actions.undoMilestone(this.props.data.id);
    } else {
      this.props.actions.completeMilestone(this.props.data.id);
    }
  }

  render () {
    return (
      <td onClick={this.toggleMilestone.bind(this)} className={this.props.data.complete ? "complete" : ''}>{this.props.data.title}</td>
    );
  }
}
