import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import './ColorBox.css';

class ColorBox extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}

	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}

	render() {
		const { hex, name } = this.props;
		const show = this.state.copied;

		return (
			<CopyToClipboard text={hex} onCopy={this.changeCopyState}>
				<div style={{ background: hex }} className="ColorBox">
					<div
						style={{ background: hex }}
						className={`ColorBox__copy-overlay ${show ? 'show' : ''}`}></div>
					<div className={`ColorBox__copy-msg ${show ? 'show' : ''}`}>
						<h1>Copied!</h1>
						<p>{hex}</p>
					</div>
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
