import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox.js';
import PaletteFooter from '../PaletteFooter/PaletteFooter';

import './Palette.css';
class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { colorLevel: 500, colorFormat: 'hex' };
    this.changeColorLevel = this.changeColorLevel.bind(this);
    this.changeColorFormat = this.changeColorFormat.bind(this);
  }

  changeColorLevel(newLevel) {
    this.setState({ colorLevel: newLevel });
  }
  changeColorFormat(newFormat) {
    this.setState(st => ({ ...st, colorFormat: newFormat }));
  }

  render() {
    const { colorLevel, colorFormat } = this.state;
    const { colors, paletteName, emoji, id } = this.props.palette;
    const colorBoxes = colors[colorLevel].map((color, idx) => (
      <ColorBox
        key={color.name + idx}
        background={color[colorFormat]}
        name={color.name}
        showLink={true}
        moreUrl={`/palette/${id}/${color.id}`}
      />
    ));
    return (
      <div className="Palette">
        <Navbar
          colorLevel={colorLevel}
          onChangeColorLevel={this.changeColorLevel}
          onChangeColorFormat={this.changeColorFormat}
          showLevelSlider
        />
        <div className="Palette__colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;
