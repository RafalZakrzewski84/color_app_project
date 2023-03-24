import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';

import MiniPalette from '../MiniPalette/MiniPalette';

const Div = styled('div')(unstable_styleFunctionSx);
const Nav = styled('nav')(unstable_styleFunctionSx);

export class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`palette/${id}`);
  }
  render() {
    const { palettes } = this.props;
    const miniPalettes = palettes.map(palette => (
      <MiniPalette
        key={palette.id}
        {...palette}
        handleClick={() => this.goToPalette(palette.id)}
      />
    ));
    return (
      <Div
        sx={{
          background: 'blue',
          height: '100vh',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Div
          sx={{
            width: '50%',
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
          }}
        >
          <Nav
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'white',
              '& a': {
                color: 'white',
              },
            }}
          >
            <h1>React Colors</h1>
            <Link to="/palette/new">Create Palette</Link>
          </Nav>
          <Div
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 30%)',
              gridGap: '5%',
            }}
          >
            {miniPalettes}
          </Div>
        </Div>
      </Div>
    );
  }
}

export default PaletteList;
