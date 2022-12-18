import React, { Component } from 'react';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';

import MiniPalette from '../MiniPalette/MiniPalette';

const Div = styled('div')(unstable_styleFunctionSx);
const Nav = styled('nav')(unstable_styleFunctionSx);

export class PaletteList extends Component {
	render() {
		const { palettes } = this.props;
		const miniPalettes = palettes.map((palette) => (
			<MiniPalette key={palette.id} {...palette} />
		));
		return (
			<Div
				sx={{
					background: 'blue',
					height: '100%',
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'center',
				}}>
				<Div
					sx={{
						width: '50%',
						display: 'flex',
						alignItems: 'flex-start',
						flexDirection: 'column',
					}}>
					<Nav
						sx={{
							display: 'flex',
							width: '100%',
							justifyContent: 'space-between',
							color: 'white',
						}}>
						<h1>React Colors</h1>
					</Nav>
					<Div
						sx={{
							width: '100%',
							display: 'grid',
							gridTemplateColumns: 'repeat(3, 30%)',
							gridGap: '5%',
						}}>
						{miniPalettes}
					</Div>
				</Div>
			</Div>
		);
	}
}

export default PaletteList;
