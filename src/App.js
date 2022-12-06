import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Palette from './components/Palette/Palette.js';

import { generatePalette } from './helpers/colorHelper';

import seedsPalette from './assets/seedsPalette';

class App extends Component {
	render() {
		return (
			<Routes>
				<Route path="/" element={<h1>Palettes go here!</h1>} />
				<Route path="/palette/:id" element={<h1>Palette</h1>} />
			</Routes>
			// <div>
			// 	<Palette palette={generatePalette(seedsPalette[0])} />
			// </div>
		);
	}
}

export default App;
