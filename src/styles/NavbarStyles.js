import sizes from './sizes';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    height: '6vh',
  },
  navbarLogo: {
    marginRight: '15px',
    padding: '0 13px',
    fontSize: '22px',
    backgroundColor: '#eceff1',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyItems: 'center',
    letterSpacing: '-1px',
    '& a': {
      color: 'black',
      textDecoration: 'none',
    },
    [sizes.down('xs')]: {
      fontSize: '18px',
    },
  },
  navbarColorLevel: {
    [sizes.down('sm')]: {
      fontSize: '14px',
    },
  },
  navbarSlider: {
    width: '340px',
    margin: '0 10px',
    display: 'inline-block',
    '& .rc-slider-track': {
      backgroundColor: 'transparent',
    },
    '& .rc-slider-rail': {
      height: '8px',
    },
    '& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover':
      {
        backgroundColor: 'green',
        outline: 'none',
        border: '2px solid green',
        boxShadow: 'none',
        width: '13px',
        height: '13px',
        marginTop: '-3px',
      },
    [sizes.down('md')]: {
      width: '240px',
    },
    [sizes.down('sm')]: {
      width: '140px',
    },
    [sizes.down('xs')]: {
      width: '120px',
    },
  },
  navbarSelectContainer: {
    marginRight: '5px',
    marginLeft: 'auto',
    '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input':
      {
        padding: '3px 10px',
      },
  },
};

export default styles;
