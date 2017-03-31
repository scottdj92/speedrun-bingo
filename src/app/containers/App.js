import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import styles
import './_main.scss';

// import components here
import Header from 'Components/header/header';
import Board from 'Components/board/board';

export default class App extends Component {
  constructor () {
    super();
  }

  render () {
    return (
      <div>
        <Header/>
        <Board/>
      </div>
    );
  }
}
