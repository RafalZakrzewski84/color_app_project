import sizes from './sizes';

const styles = {
  palette: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  color: {
    height: '90%',
    overflow: 'hidden',
  },
  goBackBox: {
    width: '20%',
    height: '50%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-4.2px',
    backgroundColor: 'black',
    [sizes.down('lg')]: {
      width: '25%',
      height: '33.33%',
    },
    [sizes.down('md')]: {
      width: '50%',
      height: '20%',
    },
    [sizes.down('xs')]: {
      width: '100%',
      height: '10%',
    },
  },
  goBackBtn: {
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
    color: 'white',
    textTransform: 'uppercase',
    fontSize: '1rem',
    lineHeight: '30px',
    textAlign: 'center',
    textDecoration: 'none',
  },
};

export default styles;
