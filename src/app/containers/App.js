import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';

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
        <Board actions={this.props.actions} data={this.props.tiles}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tiles: state.tiles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
