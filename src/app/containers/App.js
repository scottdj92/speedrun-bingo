import React, { Component } from 'react';

import { connect } from 'react-redux';

// import styles
import './_main.scss';

// import components here
import Header from 'Components/header/header';
import Board from 'Components/board/board';

class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Header/>
        <Board tiles={this.props.tiles}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiles: state.tiles
  };
}

export default connect(mapStateToProps)(App);
