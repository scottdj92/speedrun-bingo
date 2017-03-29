import React, { Component } from 'react';
import R from 'ramda';

import seedRandom from 'seedrandom';

import './board.scss';
import tableTemplate from './__fixtures__/base-table';

import Tile from '../tile/tile';
import TileRow from 'Components/tile-row/TileRow';

export default class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seed: Math.ceil(999999999 * Math.random()),
      tableHeader: ['', 'COL1', 'COL2', 'COL3', 'COL4', 'COL5'],
      board: tableTemplate,
      cardType: 'normal'
    };
  }

  componentDidMount() {
    let rng = seedRandom(this.state.seed);
    let newBoard = [];
    let selectedMilestone;

    R.splitEvery(5, this.state.board).map((row) => {
      row.map((col) => {
        selectedMilestone = tableTemplate[Math.floor(tableTemplate.length * rng())];
        //make new board with selected milestone removed
        newBoard.push.apply( newBoard,
            tableTemplate.filter((elem) => {
              return elem === selectedMilestone;
            })
          );
        console.log(tableTemplate.indexOf(selectedMilestone));
        delete tableTemplate[tableTemplate.indexOf(selectedMilestone)];
      });
    });

    console.log(newBoard);

    this.setState({board: newBoard});
  }

  handleChange(e) {
    this.setState({seed: e.target.value});
  }

  generateNewSeed() {
    console.log(this.state.seed);
  }

  createHeader() {
    return this.state.tableHeader.map((col, index) => {
      return (
        <Tile title={col} key={index}/>
      );
    });
  }

  createRows() {
    return R.splitEvery(5, this.state.board).map((row, rowIndex) => {
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
                          The seed is used to generate the board. Changing the seed will make a new board.
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
                          <button className="button is-dark" name="generate" onClick={this.generateNewSeed.bind(this)}>Generate</button>
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
                    No rules in place yet.
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
                          {this.createRows()}
                          <tr>
                              <Tile title="BL-TR" />
                          </tr>
                      </tbody>
                  </table>
                  <p>Seed: <strong>{this.state.seed}</strong>&emsp;Card Type: <strong>{this.state.cardType}</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
