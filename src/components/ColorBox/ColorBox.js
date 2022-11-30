import React, { Component } from 'react';

import './ColorBox.css';

class ColorBox extends Component {
	render() {
		const { color, name } = this.props;
		return (
			<div style={{ background: color }} className="ColorBox">
				<div className="ColorBox__copy-container">
					<div className="ColorBox__box-content">
						<span>{name}</span>
					</div>
					<button className="ColorBox__copy-btn">Copy</button>
				</div>
				<span className="ColorBox__see-more">MORE</span>
			</div>
		);
	}
}

export default ColorBox;
