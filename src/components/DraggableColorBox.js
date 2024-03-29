import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@mui/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styles from '../styles/DraggableColorBoxStyles';

const DraggableColorBox = SortableElement(props => {
  const { classes, handleClick, name, color } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span className={classes.colorName}>{name}</span>
        <DeleteForeverIcon
          className={classes.deleteIcon}
          onClick={handleClick}
        />
      </div>
    </div>
  );
});
export default withStyles(styles)(DraggableColorBox);
