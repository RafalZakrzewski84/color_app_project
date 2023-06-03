import React from 'react';
import { withStyles } from '@mui/styles';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';
import styles from '../styles/DraggableColorListStyles';

const DraggableColorList = SortableContainer(
  ({ colors, deleteColor, classes }) => {
    return (
      <div className={classes.container}>
        {colors.map((color, i) => (
          <DraggableColorBox
            index={i}
            key={color.name}
            color={color.color}
            name={color.name}
            handleClick={() => deleteColor(color.name)}
          />
        ))}
      </div>
    );
  },
);
export default withStyles(styles)(DraggableColorList);
