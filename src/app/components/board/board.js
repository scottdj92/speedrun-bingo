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
      wowRace: 'Human',
      wowClass: 'Warrior',
      version: "1.0"
    };
  }

  componentDidMount() {
    this.generateWoWCombo();
  }

  handleChange(e) {
    this.setState({possibleSeed: (e.target.value == '' ? null : Number(e.target.value))});
  }

  generateNewSeed() {
    this.generateWoWCombo();
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

  generateWoWCombo() {
    let wowRaces = ['Human', 'Dwarf', 'Night Elf', 'Gnome', 'Draenei', 'Worgen', 'Orc', 'Undead', 'Tauren', 'Troll', 'Blood Elf', 'Goblin'];
    let wowRace = wowRaces[Math.floor(Math.random() * wowRaces.length)];
    this.setState({wowRace: wowRace});
    
    // Really hacky way but whatever
    let classes = [];
    classes['Human'] = ['Rogue', 'Mage', 'Priest', 'Warrior', 'Hunter', 'Warlock', 'Paladin'];
    classes['Dwarf'] = ['Hunter', 'Mage', 'Priest', 'Shaman', 'Rogue', 'Warlock', 'Paladin', 'Warrior'];
    classes['Night Elf'] = ['Hunter', 'Druid', 'Mage', 'Warrior', 'Rogue', 'Priest'];
    classes['Gnome'] = ['Hunter', 'Warlock', 'Mage', 'Priest', 'Warrior', 'Rogue'];
    classes['Draenei'] = ['Hunter', 'Priest', 'Shaman', 'Mage', 'Paladin', 'Warrior'];
    classes['Worgen'] = ['Hunter', 'Rogue', 'Mage',' Warlock', 'Druid', 'Priest', 'Warrior'];
    classes['Orc'] = ['Hunter', 'Rogue', 'Shaman', 'Mage', 'Warlock', 'Warrior'];
    classes['Undead'] = ['Hunter', 'Mage', 'Priest', 'Warlock', 'Rogue', 'Warrior'];
    classes['Tauren'] = ['Hunter', 'Druid', 'Priest', 'Shaman', 'Paladin', 'Warrior'];
    classes['Troll'] = ['Hunter', 'Mage', 'Rogue', 'Shaman', 'Druid', 'Priest', 'Warlock', 'Warrior'];
    classes['Blood Elf'] = ['Hunter', 'Priest', 'Warlock', 'Mage', 'Paladin', 'Rogue', 'Warrior'];
    classes['Goblin'] = ['Hunter', 'Mage', 'Rogue', 'Shaman', 'Priest', 'Warlock', 'Warrior'];
    let wowClass = classes[wowRace][Math.floor(Math.random() * classes[wowRace].length)];
    this.setState({wowClass: wowClass});
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
                      <li>You must play on a <a href="https://us.battle.net/support/en/article/world-of-warcraft-starter-edition">starter account</a>.</li>
                      <li>Each time you start a new bingo, create a new character.</li>
                      <ul>
                        <li>The generator will pick a random race and class for you to play.</li>
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
                  <p>Race: <strong>{this.state.wowRace}</strong>&emsp;Class: <strong>{this.state.wowClass}</strong>&emsp;Seed: <strong>{this.props.data.seed}</strong>&emsp;Card Type: <strong>{this.state.cardType}</strong>&emsp;Version: <strong>v{this.state.version}</strong></p>
              </div>
          </div>
      </div>
    );
  }
}
