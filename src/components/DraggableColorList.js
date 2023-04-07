import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import DraggableColorBox from './DraggableColorBox';

const DraggableColorList = SortableContainer(
  ({ colors, onDeleteColor, onSortEnd }) => {
    return (
      <div style={{ height: '100%' }}>
        {colors.map((c, idx) => (
          <DraggableColorBox
            key={c.name + idx}
            index={idx}
            name={c.name}
            color={c.color}
            onDeleteColor={onDeleteColor}
            onSortEnd={onSortEnd}
          />
        ))}
      </div>
    );
  },
);

export default DraggableColorList;
