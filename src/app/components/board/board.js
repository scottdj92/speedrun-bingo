import React, { Component } from 'react';

import './board.scss';
import tableTemplate from './__fixtures__/base-table';


import Tile from '../tile/tile'
import SeedRandom from 'seedrandom';
import Tasks from '../../data/tasks.json';


export default class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seed: Math.ceil(999999 * Math.random()),
      newSeed: '',
      board: [
        ['Slot 1',  'Slot 2',  'Slot 3',  'Slot 4',  'Slot 5'],
        ['Slot 6',  'Slot 7',  'Slot 8',  'Slot 9',  'Slot 10'],
        ['Slot 11', 'Slot 12', 'Slot 13', 'Slot 14', 'Slot 15'],
        ['Slot 16', 'Slot 17', 'Slot 18', 'Slot 19', 'Slot 20'],
        ['Slot 21', 'Slot 22', 'Slot 23', 'Slot 24', 'Slot 25'],
      ]
    };
  }

  seedPage() {
    this.setState({seed: this.state.newSeed == '' ? Math.ceil(999999 * Math.random()) : this.state.newSeed});
    this.populateBoard();
  }

  handleChange(e) {
    this.setState({newSeed: e.target.value});
  }

  populateBoard() {
    let newBoard = this.state.board;
    let rng = SeedRandom(this.state.seed);
    let tasks = JSON.parse(JSON.stringify(Tasks));

    for (var row = 0; row < 5; row++) {
      for (var col = 0; col < 5; col++) {
        let number = Math.floor(tasks.length * rng());
        newBoard[row][col] = tasks[number].task;
        delete tasks[number].task;
      }
    }

    this.setState({board: newBoard});
  }

  componentDidMount() {
    this.populateBoard();
  }

  createHeader() {
    return this.state.tableHeader.map((col, index) => {
      return (
        <Tile title={col} key={index}/>
      );
    });
  }

  createRows() {
    return tableTemplate.map((row, rowIndex) => {
      return (
        <TileRow rowIndex={rowIndex} tiles={row} key={rowIndex}/>
      );
    });
  }

  render () {
    return (
      <div className="container">
          <div className="bingoPage">
              <div className="about">
                  <h2 className="title is-3">Generate a new card</h2>
                  <div className="content">
                      <p>
                          Create a new card based on seed.
                      </p>
                      <p>
                          The seed is used to generate the card. Changing the seed will make a new card.
                      </p>
                  </div>
                  <div className="field">
                      <label className="label">Seed</label>
                      <p className="control">
                          <input className="input" type="text" name="seed" placeholder="Leave blank for random seed" onChange={this.handleChange.bind(this)} />
                      </p>
                  </div>
                  <div className="field">
                      <p className="control">
                          <button className="button is-dark" name="generate" onClick={this.seedPage.bind(this)}>Generate</button>
                      </p>
                  </div>
                  <h2 className="title is-3">About Bingo</h2>
                  <div className="content">
                      <p>
                          To win Bingo, you must complete 5 tasks in a row horizontally, vertically, or diagonally.
                      </p>
                      <p>
                          You can click on the squares to turn them green when you have performed tasks successfully.
                      </p>
                  </div>
                  <h2 className="title is-3">Bingo Rules</h2>
                  <div className="content">
                      <p>
                        No rules in place yet.
                      </p>
                      <ul>
                          <li></li>
                      </ul>
                  </div>
              </div>
              <div className="results">
                  <table className="bingo">
                    <thead>
                      <tr>
                        {this.createHeader()}
                      </tr>
                    </thead>
                      <tbody>
                          <tr>
                              <Tile title="TL-BR" />
                              <Tile title="COL1" />
                              <Tile title="COL2" />
                              <Tile title="COL3" />
                              <Tile title="COL4" />
                              <Tile title="COL5" />
                          </tr>
                          <tr>
                              <Tile title="ROW1" />
                              <Tile title={this.state.board[0][0]}/>
                              <Tile title={this.state.board[0][1]} />
                              <Tile title={this.state.board[0][2]} />
                              <Tile title={this.state.board[0][3]} />
                              <Tile title={this.state.board[0][4]} />
                          </tr>
                          <tr>
                              <Tile title="ROW2" />
                              <Tile title={this.state.board[1][0]}/>
                              <Tile title={this.state.board[1][1]} />
                              <Tile title={this.state.board[1][2]} />
                              <Tile title={this.state.board[1][3]} />
                              <Tile title={this.state.board[1][4]} />
                          </tr>
                          <tr>
                              <Tile title="ROW3" />
                              <Tile title={this.state.board[2][0]}/>
                              <Tile title={this.state.board[2][1]} />
                              <Tile title={this.state.board[2][2]} />
                              <Tile title={this.state.board[2][3]} />
                              <Tile title={this.state.board[2][4]} />
                          </tr>
                          <tr>
                              <Tile title="ROW4" />
                              <Tile title={this.state.board[3][0]}/>
                              <Tile title={this.state.board[3][1]} />
                              <Tile title={this.state.board[3][2]} />
                              <Tile title={this.state.board[3][3]} />
                              <Tile title={this.state.board[3][4]} />
                          </tr>
                          <tr>
                              <Tile title="ROW5" />
                              <Tile title={this.state.board[4][0]}/>
                              <Tile title={this.state.board[4][1]} />
                              <Tile title={this.state.board[4][2]} />
                              <Tile title={this.state.board[4][3]} />
                              <Tile title={this.state.board[4][4]} />
                          </tr>
                          <tr>
                              <Tile title="BL-TR" />
                          </tr>
                      </tbody>
                  </table>
                  <p>Seed: <strong>{this.state.seed}</strong>&emsp;Card Type: <strong>Totally normal</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
