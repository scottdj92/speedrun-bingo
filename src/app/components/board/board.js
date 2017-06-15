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
      tableHeader: ['TL-BR', 'COL 1', 'COL 2', 'COL 3', 'COL 4', 'COL 5'],
      cardType: 'Normal',
      wowRace: null,
      wowClass: null,
      version: "1.1.3"
    };
  }

  componentDidMount() {
    this.props.actions.generateWoWCombo();
    console.log(this.props);
  }

  handleChange(e) {
    this.setState({possibleSeed: (e.target.value == '' ? null : Number(e.target.value))});
  }

  generateNewSeed() {
    this.props.actions.generateWoWCombo();
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
                      <p>
                          <a href="https://github.com/mrawlingst/wow-bingo/blob/master/WoWBingoChangelog.md">Changelog</a> for WoW Bingo.
                      </p>
                  </div>
                  <h2 className="title is-3">Bingo Rules</h2>
                  <div className="content">
                    <p>
                      There are some specific rules in place:
                    </p>
                    <ul>
                      <li>You must play on a <a href="https://us.battle.net/support/en/article/world-of-warcraft-starter-edition">starter account</a>.</li>
                      <li>Each time you start a new bingo, create a new character.</li>
                      <ul>
                        <li>The generator will pick a random race and class for you to play below the bingo card.</li>
                      </ul>
                      <li>You can also store items in bank as it will still count as your inventory.</li>
                      <li>If it mentions items or professions, you must actually keep it. For example, if it says '<strong>20 copper bars</strong>', '<strong>Mining (50)</strong>', etc, you must still have the said items in your inventory or professions learned at the time you finish getting all 5 objectives.</li>
                      <li>If it says to craft, you must craft it yourself and the tooltip over crafted item must say '<i>Created by &lt;you&gt;</i>'</li>
                      <li>For collection goals such as '<strong>20 peacebloom</strong>', '<strong>1 gold</strong>', etc, you're allowed to exceed the required amount.</li>
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
                  <p>Race: <strong>{this.props.wowData.race}</strong>&emsp;Class: <strong>{this.props.wowData.class}</strong>&emsp;Seed: <strong>{this.props.data.seed}</strong>&emsp;Card Type: <strong>{this.state.cardType}</strong>&emsp;Version: <strong>v{this.state.version}</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
