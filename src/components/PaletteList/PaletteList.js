import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MiniPalette from '../MiniPalette/MiniPalette';

export class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		const miniPalettes = palettes.map((palette) => (
			<MiniPalette key={palette.id} {...palette} />
		));
		return (
			<div className="PaletteList">
				<h1>React Colors</h1>
				{miniPalettes}
			</div>
		);
	}
}

export default PaletteList;
