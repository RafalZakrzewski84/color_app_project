import React, { Component } from 'react';

import ColorBox from '../ColorBox/ColorBox.js';

import './Palette.css';

class Palette extends Component {
	render() {
		const { colors } = this.props;
		const colorBoxes = colors.map((color, idx) => (
			<ColorBox key={color.name + idx} {...color} />
		));
		return (
			<div className="Palette">
				{/* navbar */}
				<div className="Palette__colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
