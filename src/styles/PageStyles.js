const styles = {
  '@global': {
    '.page-enter': {
      transform: 'translateX(100%)',
    },
    '.page-enter-active': {
      transform: 'translateX(0)',
    },
    '.page-exit-active': {
      transform: 'translateX(-100%)',
    },
  },
  page: {
    height: '100vh',
    position: 'fixed',
    width: '100%',
    top: 0,
    transition: 'transform 0.3s ease-in-out',
  },
};

export default styles;
