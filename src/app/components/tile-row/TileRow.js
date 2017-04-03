import React, { Component } from 'react';

import Tile from 'Components/tile/tile';

export default class TileRow extends Component {
  constructor (props) {
    super(props);
  }

  createTiles () {
    return this.props.tiles.map((tile, index) => {
      return (
        <Tile actions={this.props.actions} data={tile} key={index}/>
      );
    });
  }

  render () {
    return (
      <tr>
        <Tile data={{title: 'ROW ' + (this.props.rowIndex+1), complete: false}}/>
        {this.createTiles()}
      </tr>
    )
  }
}
