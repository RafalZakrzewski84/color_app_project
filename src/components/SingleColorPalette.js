import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@mui/styles';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';
import styles from '../styles/PaletteStyles';

export class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { colorFormat: 'hex' };
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }
  gatherShades(palette, colorToFilterBy) {
    let shades = [];
    for (let key in palette.colors) {
      shades = shades.concat(
        palette.colors[key].filter(color => color.id === colorToFilterBy),
      );
    }
    return shades.slice(1);
  }
  changeColorFormat(newFormat) {
    this.setState(st => ({ ...st, colorFormat: newFormat }));
  }

  render() {
    const { classes } = this.props;
    const { paletteName, emoji, id } = this.props.palette;
    const format = this.state.colorFormat;
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showingFullPalette={false}
      />
    ));
    return (
      <div className={classes.palette}>
        <Navbar
          onChangeColorFormat={this.changeColorFormat}
          showLevelSlider={false}
        />
        <div className={classes.color}>
          {colorBoxes}
          <div className={classes.goBackBox}>
            <Link to={`/palette/${id}`} className={classes.goBackBtn}>
              GO BACK
            </Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
