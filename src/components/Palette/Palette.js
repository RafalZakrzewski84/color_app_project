import React, { Component } from 'react';

import Navbar from '../Navbar/Navbar';
import ColorBox from '../ColorBox/ColorBox.js';

import './Palette.css';
class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { colorLevel: 500 };
		this.changeColorLevel = this.changeColorLevel.bind(this);
	}

	changeColorLevel(newLevel) {
		this.setState({ colorLevel: newLevel });
	}

	render() {
		const colorLevel = this.state.colorLevel;
		const { colors } = this.props.palette;
		const colorBoxes = colors[colorLevel].map((color, idx) => (
			<ColorBox key={color.name + idx} {...color} />
		));
		return (
			<div className="Palette">
				<Navbar
					colorLevel={colorLevel}
					onChangeColorLevel={this.changeColorLevel}
				/>
				<div className="Palette__colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
