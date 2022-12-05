import React, { Component } from 'react';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
	render() {
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
			</div>
		);
	}
}

export default Navbar;
