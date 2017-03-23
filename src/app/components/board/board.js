import React, { Component } from 'react';

import './board.scss';

import Tile from '../tile/tile'

export default class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seed: '',
    };
  }

  bingoGenerate() {
    console.log(this.state.seed);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({seed: e.target.value});
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
                          <input className="input" type="text" name="seed" placeholder="Leave blank for random seed" value={this.state.seed} onChange={this.handleChange.bind(this)} />
                      </p>
                  </div>
                  <div className="field">
                      <p className="control">
                          <button className="button is-dark" name="generate" onClick={this.bingoGenerate.bind(this)}>Generate</button>
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
                          <ul>
                              <li></li>
                          </ul>
                      </p>
                  </div>
              </div>
              <div className="results">
                  <table className="bingo">
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
                              <Tile title="Slot 1" />
                              <Tile title="Slot 2" />
                              <Tile title="Slot 3" />
                              <Tile title="Slot 4" />
                              <Tile title="Slot 5" />
                          </tr>
                          <tr>
                              <Tile title="ROW2" />
                              <Tile title="Slot 6" />
                              <Tile title="Slot 7" />
                              <Tile title="Slot 8" />
                              <Tile title="Slot 9" />
                              <Tile title="Slot 10" />
                          </tr>
                          <tr>
                              <Tile title="ROW3" />
                              <Tile title="Slot 11" />
                              <Tile title="Slot 12" />
                              <Tile title="Slot 13" />
                              <Tile title="Slot 14" />
                              <Tile title="Slot 15" />
                          </tr>
                          <tr>
                              <Tile title="ROW4" />
                              <Tile title="Slot 16" />
                              <Tile title="Slot 17" />
                              <Tile title="Slot 18" />
                              <Tile title="Slot 19" />
                              <Tile title="Slot 20" />
                          </tr>
                          <tr>
                              <Tile title="ROW5" />
                              <Tile title="Slot 21" />
                              <Tile title="Slot 22" />
                              <Tile title="Slot 23" />
                              <Tile title="Slot 24" />
                              <Tile title="Slot 25" />
                          </tr>
                          <tr>
                              <Tile title="BL-TR" />
                          </tr>
                      </tbody>
                  </table>
                  <p>Seed: <strong>1337</strong>&emsp;Card Type: <strong>Totally normal</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
