import chroma from 'chroma-js';
import sizes from './sizes';

const styles = {
  colorBox: {
    width: '20%',
    height: props => (props.showingFullPalette ? '25%' : '50%'),
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4.2px',
    '&:hover button': { opacity: 1, transition: '0.5s' },
    [sizes.down('lg')]: {
      width: '25%',
      height: props => (props.showingFullPalette ? '20%' : '50%'),
    },
    [sizes.down('md')]: {
      width: '50%',
      height: props => (props.showingFullPalette ? '10%' : '50%'),
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: props => (props.showingFullPalette ? '5.9%' : '10%'),
    },
  },
  copyBtn: {
    width: '100px',
    height: '30px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: '-50px',
    marginTop: '-15px',
    outline: 'none',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.3)',
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    textTransform: 'uppercase',
    fontSize: '1rem',
    lineHeight: '30px',
    textAlign: 'center',
    opacity: 0,
  },
  copyOverlay: {
    width: '100%',
    height: '100%',
    opacity: 0,
    zIndex: 0,
    position: 'absolute',
    transition: 'transform 0.6s ease-in-out',
  },
  copyOverlayShow: {
    transform: 'scale(10)',
    opacity: 1,
    zIndex: 10,
  },
  copyMsg: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    color: 'white',
    fontSize: '2.5rem',
    transform: 'scale(0.1)',
    opacity: 0,
    '& h1': {
      fontWeight: 400,
      padding: '1rem',
      textShadow: '1px 2px black',
      background: 'rgba(255, 255, 255, 0.2)',
      width: '100%',
      textAlign: 'center',
      textTransform: 'uppercase',
    },
    '& p': {
      marginTop: '0.5rem',
      fontSize: '1.2rem',
      fontWeight: 100,
      color: props =>
        chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    },
  },
  copyMsgShow: {
    transform: 'scale(1)',
    opacity: 1,
    zIndex: 25,
    transition: 'all 0.4s ease-in-out',
    transitionDelay: '0.3s',
  },
  boxContent: {
    position: 'absolute',
    width: '100%',
    left: '0px',
    bottom: '0px',
    padding: '10px',
    letterSpacing: '1px',
    fontSize: '12px',
    textTransform: 'uppercase',
  },
  colorName: {
    color: props =>
      chroma(props.background).luminance() <= 0.08 ? 'white' : 'black',
  },
  seeMore: {
    position: 'absolute',
    right: '0px',
    bottom: '0px',
    background: 'rgba(255, 255, 255, 0.3)',
    color: props =>
      chroma(props.background).luminance() >= 0.7 ? 'black' : 'white',
    width: '60px',
    height: '30px',
    lineHeight: '30px',
    textAlign: 'center',
  },
};
export default styles;
