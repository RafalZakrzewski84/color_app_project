import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    marginBottom: '-7px',
    '&:hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
    },
    [sizes.down('md')]: {
      width: '25%',
      height: '20%',
    },
    [sizes.down('sm')]: {
      width: '100%',
      height: '5%',
    },
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    color: 'black',
    letterSpacing: '1px',
    fontSize: '12px',
    textTransform: 'uppercase',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    [sizes.down('sm')]: {
      alignItems: 'center',
    },
  },
  colorName: {
    color: ({ color }) =>
      chroma(color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.8)'
        : 'rgba(0,0,0,0.8)',
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    color: ({ color }) =>
      chroma(color).luminance() <= 0.08
        ? 'rgba(255,255,255,0.8)'
        : 'rgba(0,0,0,0.8)',
  },
};

export default styles;
