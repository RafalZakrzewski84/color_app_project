import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './components/Palette/Palette.js';
import PaletteList from './components/PaletteList/PaletteList.js';

import { generatePalette } from './helpers/colorHelper';
import seedsPalette from './assets/seedsPalette';

const theme = createTheme();
class App extends Component {
	findPalette(id) {
		return seedsPalette.find((palette) => palette.id === id);
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Switch>
					<Route
						exact
						path="/"
						render={(routeProps) => (
							<PaletteList palettes={seedsPalette} {...routeProps} />
						)}
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
					<Route
						exact
						path="/palette/:paletteId/:colorId"
						render={() => <h1>Single color page</h1>}
					/>
				</Switch>
			</ThemeProvider>
		);
	}
}

export default App;
