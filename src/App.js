import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Palette from './components/Palette/Palette.js';
import PaletteList from './components/PaletteList/PaletteList.js';

import { generatePalette } from './helpers/colorHelper';
import seedsPalette from './assets/seedsPalette';

class App extends Component {
	findPalette(id) {
		return seedsPalette.find((palette) => palette.id === id);
	}
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/"
					render={() => <PaletteList palettes={seedsPalette} />}
				/>
				<Route
					exact
					path="/palette/:id"
					render={(renderParams) => (
						<Palette
							palette={generatePalette(
								this.findPalette(renderParams.match.params.id)
							)}
						/>
					)}
				/>
			</Switch>
		);
	}
}

export default App;
