import React, { Component } from 'react';

import './board.scss';

export default class Board extends Component {
  constructor (props) {
    super(props);

    this.state = {
      seed: ''
    };
  }

  bingoGenerate() {
    console.log(this.state.seed);
  }

  handleChange(e) {
      console.log(e.target.value);
    this.setState({seed: e.target.value});
  }

  bingoCellClick(value) {
      console.log(value);
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
                              <td onClick={this.bingoCellClick.bind(this, "tl-br")}>TL-BR</td>
                              <td onClick={this.bingoCellClick.bind(this, "col1")}>COL1</td>
                              <td onClick={this.bingoCellClick.bind(this, "col2")}>COL2</td>
                              <td onClick={this.bingoCellClick.bind(this, "col3")}>COL3</td>
                              <td onClick={this.bingoCellClick.bind(this, "col4")}>COL4</td>
                              <td onClick={this.bingoCellClick.bind(this, "col5")}>COL5</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "row1")}>ROW1</td>
                              <td onClick={this.bingoCellClick.bind(this, "11")}>Slot 1</td>
                              <td onClick={this.bingoCellClick.bind(this, "12")}>Slot 2</td>
                              <td onClick={this.bingoCellClick.bind(this, "13")}>Slot 3</td>
                              <td onClick={this.bingoCellClick.bind(this, "14")}>Slot 4</td>
                              <td onClick={this.bingoCellClick.bind(this, "15")}>Slot 5</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "row2")}>ROW2</td>
                              <td onClick={this.bingoCellClick.bind(this, "21")} className="greensquare">Slot 6</td>
                              <td onClick={this.bingoCellClick.bind(this, "22")}>Slot 7</td>
                              <td onClick={this.bingoCellClick.bind(this, "23")}>Slot 8</td>
                              <td onClick={this.bingoCellClick.bind(this, "24")}>Slot 9</td>
                              <td onClick={this.bingoCellClick.bind(this, "25")}>Slot 10</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "row3")}>ROW3</td>
                              <td onClick={this.bingoCellClick.bind(this, "31")}>Slot 11</td>
                              <td onClick={this.bingoCellClick.bind(this, "32")}>Slot 12</td>
                              <td onClick={this.bingoCellClick.bind(this, "33")}>Slot 13</td>
                              <td onClick={this.bingoCellClick.bind(this, "34")}>Slot 14</td>
                              <td onClick={this.bingoCellClick.bind(this, "35")}>Slot 15</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "row4")}>ROW4</td>
                              <td onClick={this.bingoCellClick.bind(this, "41")}>Slot 16</td>
                              <td onClick={this.bingoCellClick.bind(this, "42")}>Slot 17</td>
                              <td onClick={this.bingoCellClick.bind(this, "43")}>Slot 18</td>
                              <td onClick={this.bingoCellClick.bind(this, "44")}>Slot 19</td>
                              <td onClick={this.bingoCellClick.bind(this, "45")}>Slot 20</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "row5")}>ROW5</td>
                              <td onClick={this.bingoCellClick.bind(this, "51")}>Slot 21</td>
                              <td onClick={this.bingoCellClick.bind(this, "52")}>Slot 22</td>
                              <td onClick={this.bingoCellClick.bind(this, "53")}>Slot 23</td>
                              <td onClick={this.bingoCellClick.bind(this, "54")}>Slot 24</td>
                              <td onClick={this.bingoCellClick.bind(this, "55")}>Slot 25</td>
                          </tr>
                          <tr>
                              <td onClick={this.bingoCellClick.bind(this, "bl-tr")}>BL-TR</td>
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
