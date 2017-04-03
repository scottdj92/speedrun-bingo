import React, { Component } from 'react';
import R from 'ramda';

import seedRandom from 'seedrandom';

import './board.scss';

import Tile from '../tile/tile';
import TileRow from 'Components/tile-row/TileRow';

export default class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      possibleSeed: null,
      tableHeader: ['', 'COL 1', 'COL 2', 'COL 3', 'COL 4', 'COL 5'],
      cardType: 'normal'
    };
  }

  componentDidMount() {

  }

  handleChange(e) {
    this.setState({possibleSeed: (e.target.value == '' ? null : Number(e.target.value))});
  }

  generateNewSeed() {
    if (this.state.possibleSeed === null) {
      this.props.actions.generateRandomSeed();
    } else {
      this.props.actions.applySeed(this.state.possibleSeed);
    }
  }

  createHeader() {
    return this.state.tableHeader.map((col, index) => {
      return (
        <Tile data={{title: col}} key={index}/>
      );
    });
  }

  createRows() {
    return R.splitEvery(5, this.props.data.tiles).map((row, rowIndex) => {
      return (
        <TileRow rowIndex={rowIndex} tiles={row} key={rowIndex} actions={this.props.actions}/>
      );
    });
  }

  render () {
    return (
      <div className="container">
          <div className="bingoPage">
              <div className="about is-pulled-right">
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
                          <input className="input" type="number" name="seed" placeholder="Leave blank for a random seed" onChange={this.handleChange.bind(this)}/>
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
                    <p>
                      There are some specific rules in place:
                    </p>
                    <ul>
                      <li>You must start with a new toon.</li>
                      <li>BoA gears are allowed.</li>
                      <li>If it says to have an item, you must actually keep it. For example, if it says to have '<strong>20 copper bars</strong>', you must still have it in your inventory at the time you finish getting all 5 objectives.</li>
                      <li>You can also store items in bank as it will still count as inventory.</li>
                      <li>If it says to craft, you must craft it yourself and the tooltip over crafted item must say '<i>Created by &lt;you&gt;</i>'</li>
                      <li>For collection goals such as '<strong>20 peacebloom</strong>', '<strong>10 gold</strong>', etc, you're allowed to exceed the required amount.</li>
                      <li>You can use the auction house to purchase or sell.</li>
                      <li>Cannot receive gold or items from alts.</li>
                      <li>Death Knight or Demon Hunter are not allowed.</li>
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
                          {this.createRows()}
                          <tr>
                              <Tile data={{title:"BL-TR", complete: false}} />
                          </tr>
                      </tbody>
                  </table>
                  <p>Seed: <strong>{this.props.data.seed}</strong>&emsp;Card Type: <strong>{this.state.cardType}</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
