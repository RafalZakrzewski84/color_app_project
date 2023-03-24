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
  findPalette(id) {
    return seedsPalette.find(palette => palette.id === id);
  }
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Switch>
          <Route
            exact
            path="/"
            render={routeProps => (
              <PaletteList palettes={seedsPalette} {...routeProps} />
            )}
          />
          <Route
            exact
            path="/palette/new"
            render={routeProps => <NewPaletteForm />}
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
