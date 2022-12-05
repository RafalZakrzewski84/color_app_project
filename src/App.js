import React, { Component } from 'react';

import Palette from './components/Palette/Palette.js';

import { generatePalette } from './helpers/colorHelper';

import seedsPalette from './assets/seedsPalette';

class App extends Component {
	render() {
		return (
			<div>
				<Palette palette={generatePalette(seedsPalette[0])} />
			</div>
		);
	}
}

export default App;
