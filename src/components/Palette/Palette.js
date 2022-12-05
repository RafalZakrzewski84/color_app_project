import React, { Component } from 'react';
import Slider from 'rc-slider';

import ColorBox from '../ColorBox/ColorBox.js';

import 'rc-slider/assets/index.css';
import './Palette.css';
class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { colorLevel: 500 };
		this.changeColorLevel = this.changeColorLevel.bind(this);
	}

	changeColorLevel(evt) {
		this.setState({ colorLevel: evt });
	}

	render() {
		const colorLevel = this.state.colorLevel;
		const { colors } = this.props.palette;
		const colorBoxes = colors[colorLevel].map((color, idx) => (
			<ColorBox key={color.name + idx} {...color} />
		));
		return (
			<div className="Palette">
				{/* navbar */}
				<div className="Palette__slider">
					<Slider
						defaultValue={colorLevel}
						min={100}
						max={900}
						step={100}
						onAfterChange={this.changeColorLevel}
					/>
				</div>
				<div className="Palette__colors">{colorBoxes}</div>
				{/* footer */}
			</div>
		);
	}
}

export default Palette;
