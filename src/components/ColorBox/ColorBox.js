import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

class ColorBox extends Component {
	render() {
		const { color, name } = this.props;
		return (
			<CopyToClipboard text={color}>
				<div style={{ background: color }} className="ColorBox">
					<div className="ColorBox__copy-container">
						<div className="ColorBox__box-content">
							<span>{name}</span>
						</div>
						<button className="ColorBox__copy-btn">Copy</button>
					</div>
					<span className="ColorBox__see-more">MORE</span>
				</div>
			</CopyToClipboard>
		);
	}
}

export default ColorBox;
