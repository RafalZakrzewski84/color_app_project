import React from 'react';
import { withStyles } from '@mui/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
  },
};

function DraggableColorBox({ name, color, classes }) {
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      {name}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
