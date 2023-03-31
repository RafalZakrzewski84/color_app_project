import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Palette from './components/Palette/Palette.js';
import PaletteList from './components/PaletteList/PaletteList.js';
import SingleColorPalette from './components/SingleColorPalette/SingleColorPalette.js';
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm.js';

import { generatePalette } from './helpers/colorHelper';
import seedsPalette from './assets/seedsPalette';

const theme = createTheme();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { palettes: seedsPalette };
    this.findPalette = this.findPalette.bind(this);
    this.savePalette = this.savePalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find(palette => palette.id === id);
  }

  savePalette(newPalette) {
    console.log(newPalette);
    this.setState(st => ({ palettes: [...st.palettes, newPalette] }));
  }

  render() {
    const { palettes } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={palettes} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={routeProps => (
              <NewPaletteForm
                onSavePalette={this.savePalette}
                {...routeProps}
              />
            )}
          />
          <Route
            exact
            path="/palette/:id"
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.id),
                )}
              />
            )}
          />
          <Route
            exact
            path="/palette/:paletteId/:colorId"
            render={routeProps => (
              <SingleColorPalette
                colorId={routeProps.match.params.colorId}
                palette={generatePalette(
                  this.findPalette(routeProps.match.params.paletteId),
                )}
              />
            )}
          />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
