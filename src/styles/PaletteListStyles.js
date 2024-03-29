import sizes from './sizes';
import bg from './confetti-doodles.svg';

const styles = {
  '@global': {
    '.fade-exit': {
      opacity: 1,
    },
    '.fade-exit-active': {
      opacity: 0,
      transition: 'opacity 500ms ease-out',
    },
  },
  root: {
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflow: 'scroll',
    overflowX: 'hidden',
    backgroundColor: '#2E1FFA',
    // background by svgbackground.com
    backgroundImage: `url(${bg})`,
  },
  container: {
    width: '60%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    marginBottom: '2.5rem',
    [sizes.down('xl')]: {
      width: '78%',
    },
    [sizes.down('xs')]: {
      width: '70%',
    },
  },
  navbar: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    '& a': {
      color: 'white',
    },
  },
  title: {
    fontSize: '2rem',
  },
  paletteList: {
    boxSizing: 'border-box',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 30%)',
    gridGap: '3.8rem',
    [sizes.down('md')]: {
      gridTemplateColumns: 'repeat(2, 48%)',
      gridGap: '2rem',
    },
    [sizes.down('xs')]: {
      gridTemplateColumns: 'repeat(1, 100%)',
      gridGap: '2rem',
    },
  },
};
export default styles;
