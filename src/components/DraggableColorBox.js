import React from 'react';
import { withStyles } from '@mui/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    '& :hover svg': {
      color: 'white',
      transform: 'scale(1.5)',
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
  },
  deleteIcon: {
    transition: 'all 0.3s ease-in-out',
  },
};

function DraggableColorBox({ name, color, classes }) {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{name}</span>
        <DeleteForeverIcon className={classes.deleteIcon} />
      </div>
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
