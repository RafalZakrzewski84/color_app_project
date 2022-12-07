import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		const links = palettes.map((palette) => (
			<div key={palette.id}>
				<Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
			</div>
		));
		return (
			<div className="PaletteList">
				<h1>React Colors</h1>
				{links}
			</div>
		);
	}
}

export default PaletteList;
