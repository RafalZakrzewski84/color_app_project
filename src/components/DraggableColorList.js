import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(
  ({ colors, onDeleteColor, onSortEnd }) => {
    return (
      <div style={{ height: '100%' }}>
        {colors.map(({ name, color }, idx) => (
          <DraggableColorBox
            key={name + idx}
            index={idx}
            name={name}
            color={color}
            onDeleteColor={onDeleteColor}
            onSortEnd={onSortEnd}
          />
        ))}
      </div>
    );
  },
);

export default DraggableColorList;
