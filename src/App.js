import React, { Component } from 'react';

import Palette from './components/Palette.js';

import seedsPalette from './assets/seedsPalette';

class App extends Component {
	render() {
		return (
			<div>
				<Palette />
			</div>
		);
	}
}

export default App;
