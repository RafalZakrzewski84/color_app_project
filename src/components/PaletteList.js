import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import MiniPalette from './MiniPalette';
import styles from '../styles/PaletteListStyles';

export class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    const miniPalettes = palettes.map(palette => (
      <MiniPalette
        key={palette.id}
        {...palette}
        handleClick={() => this.goToPalette(palette.id)}
      />
    ));
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.navbar}>
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </nav>
          <div className={classes.paletteList}>{miniPalettes}</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
