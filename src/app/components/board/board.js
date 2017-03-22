import React, { Component } from 'react';

import './board.scss';

export default class Board extends Component {
  // constructor () {
  //   super();
  // }

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
                          <input className="input" type="text" placeholder="Leave blank for random seed"/>
                      </p>
                  </div>
                  <div className="field">
                      <p className="control">
                          <button className="button is-dark">Generate</button>
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
                              <td>TL-BR</td>
                              <td>COL1</td>
                              <td>COL2</td>
                              <td>COL3</td>
                              <td>COL4</td>
                              <td>COL5</td>
                          </tr>
                          <tr>
                              <td>ROW1</td>
                              <td>Slot 1</td>
                              <td>Slot 2</td>
                              <td>Slot 3</td>
                              <td>Slot 4</td>
                              <td>Slot 5</td>
                          </tr>
                          <tr>
                              <td>ROW2</td>
                              <td className="greensquare">Slot 6</td>
                              <td>Slot 7</td>
                              <td>Slot 8</td>
                              <td>Slot 9</td>
                              <td>Slot 10</td>
                          </tr>
                          <tr>
                              <td>ROW3</td>
                              <td>Slot 11</td>
                              <td>Slot 12</td>
                              <td>Slot 13</td>
                              <td>Slot 14</td>
                              <td>Slot 15</td>
                          </tr>
                          <tr>
                              <td>ROW4</td>
                              <td>Slot 16</td>
                              <td>Slot 17</td>
                              <td>Slot 18</td>
                              <td>Slot 19</td>
                              <td>Slot 20</td>
                          </tr>
                          <tr>
                              <td>ROW5</td>
                              <td>Slot 21</td>
                              <td>Slot 22</td>
                              <td>Slot 23</td>
                              <td>Slot 24</td>
                              <td>Slot 25</td>
                          </tr>
                          <tr>
                              <td>BL-TR</td>
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
