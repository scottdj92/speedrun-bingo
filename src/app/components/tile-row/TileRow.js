import React, { Component } from 'react';

import Tile from 'Components/tile/tile';

export default class TileRow extends Component {
  constructor (props) {
    super(props);
  }

  createTiles () {
    return this.props.tiles.map((tile, index) => {
      return (
        <Tile actions={this.props.actions} title={tile.title} key={index}/>
      );
    });
  }

  render () {
    return (
      <tr>
        <Tile title={'ROW ' + this.props.rowIndex} />
        {this.createTiles()}
      </tr>
    )
  }
}
