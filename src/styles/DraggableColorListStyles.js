import sizes from './sizes';

const styles = {
  container: {
    height: '100%',
    [sizes.down('xs')]: {
      marginTop: '8px',
    },
  },
};

export default styles;
