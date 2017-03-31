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
      possibleSeed: '',
      tableHeader: ['', 'COL 1', 'COL 2', 'COL 3', 'COL 4', 'COL 5'],
      board: tableTemplate,
      cardType: 'normal'
    };
  }

  componentDidMount() {
    let rng = seedRandom(this.state.seed);
    let template = tableTemplate;
    let newBoard = [];
    let selectedMilestone;

    template.map(() => {
      selectedMilestone = template[Math.floor(template.length * rng())];
      newBoard.push(selectedMilestone);
      template = template.filter((elem) => {
        if (template.length > 1) {
          return elem !== selectedMilestone;
        } else {
          return elem;
        }
      });
    });

    this.setState({board: newBoard});
  }

  handleChange(e) {
    this.setState({possibleSeed: e.target.value});
  }

  generateNewSeed(e) {
    this.setState({seed: e.target.value});
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
                          <input className="input" type="text" name="seed" placeholder="Leave blank for random seed" />
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
