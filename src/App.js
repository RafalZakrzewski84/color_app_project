import React, { Component } from 'react';

import Palette from './components/Palette/Palette.js';

import { generatePalette } from './helpers/colorHelper';

import seedsPalette from './assets/seedsPalette';

class App extends Component {
	render() {
		console.log(generatePalette(seedsPalette[8]));
		return (
			<div>
				<Palette {...seedsPalette[8]} />
			</div>
		);
	}
}

export default App;
