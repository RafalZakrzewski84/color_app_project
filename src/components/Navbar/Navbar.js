import React, { Component } from 'react';
import Slider from 'rc-slider';
import { Select, MenuItem } from '@mui/material';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { colorFormat: 'hex' };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({ colorFormat: evt.target.value });
		this.props.onChangeColorFormat(evt.target.value);
	}

	render() {
		const { colorFormat } = this.state;
		const { colorLevel, onChangeColorLevel } = this.props;
		return (
			<div className="Navbar">
				<div className="Navbar__logo">
					<a href="#">reactcolorpicker</a>
				</div>
				<div className="Navbar__slider-container">
					<span>Level: {colorLevel}</span>
					<div className="Navbar__slider">
						<Slider
							defaultValue={colorLevel}
							min={100}
							max={900}
							step={100}
							onAfterChange={onChangeColorLevel}
						/>
					</div>
				</div>
				<div className="Navbar__select-container">
					<Select value={colorFormat} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - (255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - (255,255,255,1)</MenuItem>
					</Select>
				</div>
			</div>
		);
	}
}

export default Navbar;
