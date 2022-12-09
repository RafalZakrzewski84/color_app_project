import React from 'react';
import styled from 'styled-components';
import { unstable_styleFunctionSx } from '@mui/system';

const Div = styled('div')(unstable_styleFunctionSx);
const H5 = styled('h5')(unstable_styleFunctionSx);

const MiniPalette = (props) => {
	console.log(props);
	const { colors, paletteName, emoji } = props;
	return (
		<Div
			sx={{
				backgroundColor: 'white',
				border: '1px solid black',
				borderRadius: '5px',
				padding: '0.5rem',
				position: 'relative',
				overflow: 'hover',
				'&:hover': { cursor: 'pointer' },
			}}>
			<Div sx={{ backgroundColor: 'grey' }}>Colors</Div>
			<H5
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					margin: '0',
					color: 'black',
					paddingTop: '0.5rem',
					fontSize: '1rem',
					position: 'relative',
				}}>
				{paletteName}
				<span sx={{ marginLeft: '0.5rem', fontSize: '1.5rem' }}>{emoji}</span>
			</H5>
		</Div>
	);
};

export default MiniPalette;
