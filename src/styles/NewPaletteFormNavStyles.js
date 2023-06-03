import sizes from './sizes';

const styles = {
  root: {
    display: 'flex',
  },
  navButtons: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '24px',
    [sizes.down('xs')]: {
      marginRight: '16px',
    },
  },
};

export default styles;
