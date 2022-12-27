import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox';

export class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.gatherShades(this.props.palette, this.props.colorId);
	}
	gatherShades(palette, colorToFilterBy) {
		let shades = [];
		for (let key in palette.colors) {
			shades = shades.concat(
				palette.colors[key].filter((color) => color.id === colorToFilterBy)
			);
		}
		return shades.slice(1);
	}
	render() {
		const colorBoxes = this._shades.map((color) => (
			<ColorBox
				key={color.name}
				name={color.name}
				background={color.hex}
				showLink={false}
			/>
		));
		return (
			<div className="Palette">
				<h1>SingleColorPalette</h1>
				<div className="Palette__colors">{colorBoxes}</div>
			</div>
		);
	}
}

export default SingleColorPalette;
