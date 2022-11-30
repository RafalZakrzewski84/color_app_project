import React, { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {
	render() {
		const { color, name } = this.props;
		return (
			<div style={{ backgroundColor: color }} className="ColorBox">
				<span>{name}</span>
				<span>MORE</span>
			</div>
		);
	}
}

export default ColorBox;
