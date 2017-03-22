import React, { Component, PropTypes } from 'react';

export default class InputField extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section>
        <form className="add-milestone" action="index.html" method="post">
          <input type="textarea" name="milestone_input" value="test"/>
          <button type="submit">Add Milestone</button>
        </form>
      </section>
    )
  }
}
